import React, { Component } from 'react'
import ItinerariesService from './../../../service/itineraries.service';
import Loader from './../../shared/Spinner/Loader'
import './Itinerary-details.css'
import MapContainer from './../Itinerary-map/Itinerary-map'


import SpotsCard from './Spots-card'


import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

class ItineraryDetails extends Component {

    constructor() {
        super()
        this.state = {
            itinerary: undefined

        }
        this.itinerariesService = new ItinerariesService();
    }
    componentDidMount = () => {

        const itinerary_id = this.props.match.params.itinerary_id

        this.itinerariesService
            .getItinerary(itinerary_id)
            .then(res => this.setState({ itinerary: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container className="itinerary-details" >
                {this.state.itinerary
                    ?
                    <>
                        <section className="itinerary">
                            <Row>
                                <Col md={{ span: 6 }} >
                                    <img src={this.state.itinerary.itineraryImage} alt={this.state.itinerary.name} />

                                </Col>
                                <Col md={{ span: 6 }} >
                                    <h1>{this.state.itinerary.name}</h1>
                                    <p>{this.state.itinerary.cityName}</p>
                                    <p>{this.state.itinerary.owner.username}</p>
                                    <p>Duración: {this.state.itinerary.duration}</p>
                                    <p>Rating: {this.state.itinerary.messages.rating}</p>
                                </Col>

                                <Col>
                                    {this.state.itinerary.description}
                                </Col>
                            </Row>
                        </section>
                        <section className="spots-list">
                            <h3>Listado de Spots</h3>
                            <Row>

                                {this.state.itinerary.spots.map(elm => <SpotsCard key={elm._id} spot={elm} />
                                )}


                            </Row>
                        </section>
                        <section className="about-owner">
                            <Row>
                                <hr />
                                <Col md={{ span: 7 }}>

                                    <h3>Sobre {this.state.itinerary.owner.username}</h3>
                                    <p>{this.state.itinerary.owner.description}</p>
                                </Col>

                                <Col md={{ span: 5 }}>
                                    <img src={this.state.itinerary.owner.profileImage} alt={this.state.itinerary.owner.username} />
                                </Col>

                            </Row>
                        </section>
                        <section className="comments">
                            <Row>
                                <Col>
                                    <h3>Comentarios:</h3>
                                    <ul>
                                        {this.state.itinerary.messages.map(elm =>
                                            <li key={elm._id}>{elm.text} </li>
                                        )}
                                    </ul>
                                </Col>
                            </Row>
                        </section>
                        <section className="comments">
                            <Row>
                                <Col>
                                    <h3>Mapa</h3>
                                    <MapContainer
                                        location={this.state.itinerary.cityLocation.coordinates}

                                    />
                                </Col>
                            </Row>
                        </section>
                    </>
                    :
                    <Loader />
                }

            </Container>
        )
    }
}
export default ItineraryDetails