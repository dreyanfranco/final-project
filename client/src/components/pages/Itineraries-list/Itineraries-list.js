import React, { Component } from 'react'
import { Container, Row, Jumbotron, Col } from 'react-bootstrap'
import './Itinerary-list.css'
import ItinerariesService from './../../../service/itineraries.service'

import SearchBar from './Search-itinerary'
import ItinerariesCard from './Itineraries-card'
import Loader from './../../shared/Spinner/Loader'

class ItinerariesList extends Component {
    constructor() {
        super()
        this.state = {
            itineraries: undefined,
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
                <Jumbotron fluid className="hero-list">
                    <Container>
                        <Row>
                            <Col className="text"  md={{ span: 6 }}>
                                <h2>¿Cuál será tu próximo destino?</h2>
                                <p>
                                    This is a modified jumbotron that occupies the entire horizontal space of
                                    its parent.
                                </p>
                                <SearchBar filter={this.filterItineraries} />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    {this.state.itineraries
                        ?
                        <>
                    
                        <Row>
                            {this.state.filteredItineraries.slice(0).reverse().map(elm =>
                                <ItinerariesCard key={elm._id} itinerary={elm} />
                            )}
                        </Row></>
                        :
                        <Loader/>
                    }
                </Container>
            </>
        )
    }
}

export default ItinerariesList;