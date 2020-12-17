import React, { Component } from 'react'
import './Home.css'

import ItinerariesService from './../../../service/itineraries.service';
import ItinerariesCard from '../Itineraries-list/Itineraries-card'

import { Container, Row, Col, Button, Jumbotron} from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                            <Col  md={{ span: 6, offset: 3 }}>
                                <h1>Travel<span>hop</span></h1>
                                <p>Inspiradores destinos a tu alcance desde la vista de nuestros viajeros</p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <h3 className="home" style={{ textAlign: "center" }}>Cómo Funciona</h3>
                    <hr />
                    <Row className="align-items-center justify-content-center">
                        <Col md={{ span: 3 }} className="text-center">
                            <img src="https://res.cloudinary.com/drapkr7kb/image/upload/v1608217531/fotos-travel/065-sign-up_cnivlj.png" alt="destination" />
                            <h4>Regístrate</h4>
                            <p>Para poder crear y compartir tus propias experiencias y ver </p>
                        </Col>
                        <Col md={{ span: 3 }} className="text-center">
                            <img src="https://res.cloudinary.com/drapkr7kb/image/upload/v1608217543/fotos-travel/world_m2rwas.png" alt="destination" />
                            <h4>Busca</h4>
                            <p>Escoge de los itinerarios disponibles o puedes buscar tu próximo destino.</p>
                        </Col>
                        <Col md={{ span: 3 }} className="text-center">
                            <img src="https://res.cloudinary.com/drapkr7kb/image/upload/v1608217524/fotos-travel/destino_jr2cqi.png" alt="destination" />
                            <h4>Elige</h4>
                            <p>Puedes optar por los itinerarios que más te gustaron y añadirlos a tu lista de favoritos.</p>
                        </Col>
                        <Col md={{ span: 3 }} className="text-center">
                            <img src="https://res.cloudinary.com/drapkr7kb/image/upload/v1608217514/fotos-travel/map_eaq2bg.png" alt="destination" />
                            <h4>Crea</h4>
                            <p>Puedes hacer tu propio itinerario y añadir tus spots favoritos de esa ciudad.</p>
                        </Col>
                    </Row>
                    <div class="text-center">
                        <Link className="btn btn-dark center" to="/registro">Registrarse</Link>
                    </div>
                    <hr />
                    <h3 className="home-itineraries" style={{ textAlign: "center" }}>Últimos itinerarios</h3>
                    <Row className="align-items-center">
                        {this.state.itineraries.reverse().slice(0, 6).map(elm =>
                            <ItinerariesCard key={elm._id} itinerary={elm} />
                        )}
                    </Row>
                    <div class="text-center">
                        <Link className="btn btn-dark center" to="/itinerarios">Ver todos los Itinerarios</Link>
                    </div>
                    <hr />
                    
                </Container>
            </>
        )
    }
}

export default Home
