import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import ItinerariesService from './../../../service/itineraries.service'

import SearchBar from './Search-itinerary'
import ItinerariesCard from './Itineraries-card'


class ItinerariesList extends Component {
    constructor() {
        super()
        this.state = {
            itineraries: [],
            filteredItineraries: []
        }
        this.itinerariesService = new ItinerariesService();
    }

    componentDidMount = () => {
        this.itinerariesService
            .getAllItineraries()
            .then(res => this.setState({ itineraries: res.data, filteredItineraries: res.data }))
            .catch(err => console.log(err));
    }

    filterItineraries = value => {
        const filtered = this.state.itineraries.filter(elm => elm.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(value.toLowerCase()))
        this.setState({ filteredItineraries: filtered })
    }

    render() {
        return (
            <>
                <Container>
                    <SearchBar filter={this.filterItineraries} />
                    <h1>Listado de itinerarios</h1>

                    {this.state.itineraries.length ?
                        <Row>
                            {this.state.filteredItineraries.map(elm =>
                                <ItinerariesCard key={elm._id} itinerary={elm} />
                            )}
                        </Row>
                        : <>

                        </>
                    }
                </Container>
            </>
        )
    }
}

export default ItinerariesList;