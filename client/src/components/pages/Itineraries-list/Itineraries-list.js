import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import ItinerariesService from './../../../service/itineraries.service';
import ItinerariesCard from './Itineraries-card';

class ItinerariesList extends Component {
    constructor() {
        super()
        this.state = {
            itineraries: []
        }
        this.itinerariesService = new ItinerariesService();
    }

    componentDidMount = () => {
        this.itinerariesService
            .getAllItineraries()
            .then(res => this.setState({ itineraries: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <Container>
                    <h1>Listado de itinerarios</h1>
                    <Row>
                        {this.state.itineraries.map(elm =>
                            <ItinerariesCard key={elm._id} itinerary={elm} />
                            )}
                    </Row>
                </Container>
            </>
        )
    }
}

export default ItinerariesList;