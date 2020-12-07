import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItinerariesService from './../../../service/itineraries.service';

class ItinerariesList extends Component {
    constructor() {
        super()
        this.state = {
            itineraries: []
        }
        this.itinerariesService = new ItinerariesService();
        // console.log(this.itinerariesService);
    }

    componentDidMount = () => {
        // this.itinerariesService
        //     .editSpot('5fce436eb003635ae500a61d', '5fce436eb003635ae500a61e')
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));

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
                        {this.state.itineraries.map(elm => <Col md={4}>{ elm.name }</Col>)}
                    </Row>
                </Container>
            </>
        )
    }
}

export default ItinerariesList;