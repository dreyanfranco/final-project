import React, { Component } from 'react'

import ItinerariesService from './../../../service/itineraries.service';
import AuthService from '../../../service/auth.service'

import Loader from './../../shared/Spinner/Loader'
import './Itinerary-details.css'
import MapContainer from './../Itinerary-map/Itinerary-map'
import SpotForm from './../Spots-form/Spots-form'
import MessageForm from './Message-form'
import MessageCard from './Message-card'
import SpotsCard from './Spots-card'


import { Container, Row, Col, Button, Modal } from 'react-bootstrap'


class ItineraryDetails extends Component {

    constructor() {
        super()
        this.state = {
            itinerary: undefined,
            showModal: false
        }
        this.itinerariesService = new ItinerariesService();
        this.authService = new AuthService()
    }

    componentDidMount = () => this.refreshItineraries()
    refreshItineraries = () => {

        const itinerary_id = this.props.match.params.itinerary_id

        this.itinerariesService
            .getItinerary(itinerary_id)
            .then(res => this.setState({ itinerary: res.data }))
            .catch(err => console.log(err))
    }
    saveItinerary = () => {

        const itinerary_id = this.props.match.params.itinerary_id
        this.authService
            .saveItinerary(itinerary_id)
            .then(() => this.props.history.push('/perfil'))
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })

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
                                    {
                                        this.state.itinerary.owner.username === this.props.loggedUser.username
                                            ?
                                            <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Crear spot</Button>
                                            :
                                            <Button onClick={this.saveItinerary} variant="dark" size="sm">Guardar itinerario</Button>

                                    }
                                </Col>

                                <Col>
                                    <p className="description">{this.state.itinerary.description}</p>
                                  
                                </Col>
                            </Row>
                        </section>
                        <section className="spots-list">
                            <h3>Listado de Spots</h3>
                            <Row>
                                <Col md= {{ span: 5 }}>
                                {this.state.itinerary.spots.map(elm => <SpotsCard key={elm._id} spot={elm} />
                                )}
                                </Col>
                                <Col md={{ span: 7 }}>
                                    <MapContainer location={this.state.itinerary.cityLocation.coordinates} spots={this.state.itinerary.spots} />
                                </Col>
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
                                    <MessageForm {...this.props} />
                                    <ul>
                                        {this.state.itinerary.messages.map(elm =>
                                            <MessageCard key={elm._id} message={elm} updateList={this.refreshItineraries} />
                                        )}
                                    </ul>
                                </Col>
                            </Row>
                        </section>

                    </>
                    :
                    <Loader />
                }
                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <SpotForm closeModal={() => this.handleModal(false)} updateList={this.refreshItineraries} {...this.props} />
                    </Modal.Body>

                </Modal>

            </Container>
        )
    }
}
export default ItineraryDetails