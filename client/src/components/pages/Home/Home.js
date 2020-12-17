import React, { Component } from 'react'
import './Home.css'

import ItinerariesService from './../../../service/itineraries.service';
import ItinerariesCard from '../Itineraries-list/Itineraries-card'

import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itineraries: [],
        }
        this.itinerariesService = new ItinerariesService();

    }

    componentDidMount = () => {
        this.itinerariesService
            .getAllItineraries()
            .then(res => this.setState({ itineraries: res.data }))
            .catch(err => console.log(err))
    }


    render() {



        return (
            <>
                <Jumbotron fluid className="hero">
                    <Container>
                        <Row>
                            <Col className="bg" md={{ span: 6, offset: 3 }}>
                                <h1>Travibe</h1>
                                <p>
                                    This is a modified jumbotron that occupies the entire horizontal space of
                                    its parent.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <h3 style={{ textAlign: "center" }}>Cómo Funciona</h3>
                    <hr />
                    <Row className="align-items-center justify-content-center">
                        <Col md={{ span: 3 }}>
                            <img src="https://res.cloudinary.com/drapkr7kb/image/upload/v1607863430/fotos-travel/header-img-3_rddajs.png" alt="destination" />
                            <h4>Regístrate</h4>
                            <p>Para poder crear y compartir tus propias experiencias y ver </p>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <img src="https://res.cloudinary.com/drapkr7kb/image/upload/v1607863888/fotos-travel/header-img-2_uim0jy.png" alt="destination" />
                            <h4>Busca</h4>
                            <p>Escoge de los itinerarios disponibles o puedes buscar tu próximo destino.</p>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <img src="https://res.cloudinary.com/drapkr7kb/image/upload/v1607863956/fotos-travel/about-icon-1_fiumus.png" alt="destination" />
                            <h4>Elige</h4>
                            <p>Puedes optar por los itinerarios que más te gustaron y añadirlos a tu lista de favoritos.</p>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <img src="https://res.cloudinary.com/drapkr7kb/image/upload/v1607863956/fotos-travel/about-icon-1_fiumus.png" alt="destination" />
                            <h4>Crea</h4>
                            <p>Puedes hacer tu propio itinerario y añadir tus spots favoritos de esa ciudad.</p>
                        </Col>
                    </Row>
                    <hr />
                    <h3 style={{ textAlign: "center" }}>Últimos itinerarios</h3>
                    <Row className="align-items-center">
                        {this.state.itineraries.reverse().slice(0, 6).map(elm =>
                            <ItinerariesCard key={elm._id} itinerary={elm} />
                        )}
                    </Row>
                    <hr />
                    <Row className="align-items-center">
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home
