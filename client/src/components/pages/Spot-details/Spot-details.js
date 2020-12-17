import React, { Component } from 'react'

import ItinerariesService from './../../../service/itineraries.service';

import Loader from './../../shared/Spinner/Loader'
import './Spot-details.css'
import EditSpot from './../Edit-spots/Edit-spots'
import SpotMap from './../Spot-map/Spot-map'
import Popup from './../../shared/Modal/Modal'


import { Container, Row, Col, Button } from 'react-bootstrap'

class SpotDetails extends Component {

    constructor() {
        super()
        this.state = {
            itinerary: undefined,
            spot: undefined,
            showModal: false,
            showModalDelete: false

        }
        this.itinerariesService = new ItinerariesService();
    }
    componentDidMount = () => {
        this.refreshSpot()
        this.itinerariesService
            .getItinerary(this.props.match.params.itinerary_id)
            .then(res => this.setState({ itinerary: res.data }))
            .catch(err => console.log(err))
    }
    refreshSpot = () => {
        const spot_id = this.props.match.params.spot_id

        this.itinerariesService
            .getOneSpot(spot_id)
            .then(res => this.setState({ spot: res.data }))
            .catch(err => console.log(err))
    }


    deleteSpot = () => {
        const itinerary_id = this.props.match.params.itinerary_id
        const spot_id = this.props.match.params.spot_id

        this.itinerariesService
            .deleteSpot(itinerary_id, spot_id)
            .then(() => this.props.history.push(`/itinerario/${itinerary_id}`))
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })
    handleModalDelete = visible => this.setState({ showModalDelete: visible })

    render() {

        return (

            <Container className="spot-details" >
                {this.state.spot && this.state.itinerary
                    ?
                    <>
                        <section className="itinerary-details">
                            <Row>
                                <Col md={{ span: 6 }} >
                                    <img src={this.state.spot.image} alt={this.state.spot.location.address} />

                                </Col>
                                <Col md={{ span: 6 }} >
                                    <h1>{this.state.spot.location.address}</h1>
                                    <p className="description">{this.state.spot.description}</p>
                                    {
                                        this.state.itinerary.owner._id === this.props.loggedUser._id
                                            ?
                                            <>
                                                <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Editar</Button>
                                                <Button onClick={() => this.handleModalDelete(true)} variant="dark" size="sm">Borrar Spot</Button>
                                            </>
                                            :
                                            null
                                    }
                                </Col>


                            </Row>
                        </section>
                        <section className="Map">
                            <SpotMap location={this.state.spot.location.coordinates} spots={this.state.spot} />
                        </section>


                    </>
                    :
                    <Loader />
                }
                <Popup show={this.state.showModalDelete} handleModal={this.handleModalDelete} title="Borrar spot">
                    <p>¿Seguro que quieres borrar este spot?</p>
                    <Button closeModal={() => this.handleModalDelete(false)} onClick={this.deleteSpot} variant="dark" size="sm">Borrar spot</Button>
                </Popup>
                <Popup show={this.state.showModal} handleModal={this.handleModal} title="Editar spot">
                    <EditSpot closeModal={() => this.handleModal(false)} updateList={this.refreshSpot}  {...this.props} />
                </Popup>
            </Container>
        )
    }
}
export default SpotDetails