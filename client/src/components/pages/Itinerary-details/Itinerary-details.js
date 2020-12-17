import React, { Component } from 'react'

import ItinerariesService from './../../../service/itineraries.service'
import UsersService from '../../../service/users.service'

import Loader from './../../shared/Spinner/Loader'
import SpotForm from './../Spots-form/Spots-form'
import MessageForm from './Message-form'
import MessageCard from './Message-card'
import Popup from './../../shared/Modal/Modal'
import ItineraryInfo from './Itinerary-info'
import ItineraryOwner from './Itinerary-owner'
import SpotsList from './Spots-list'


import './Itinerary-details.css'
import { Container, Row, Col, Button } from 'react-bootstrap'


class ItineraryDetails extends Component {

    constructor() {
        super()
        this.state = {
            itinerary: undefined,
            showModal: false,
            showModalDelete: false,
            favs: []
        }
        this.itinerariesService = new ItinerariesService();
        this.usersService = new UsersService()
    }

    componentDidMount = () => this.refreshItineraries()

    refreshItineraries = () => {

        const itinerary_id = this.props.match.params.itinerary_id

        this.itinerariesService
            .getItinerary(itinerary_id)
            .then(res => this.setState({ itinerary: res.data }))
            .catch(err => console.log(err))
        this.favs()
    }
    saveItinerary = () => {

        const itinerary_id = this.props.match.params.itinerary_id
        this.usersService
            .saveItinerary(itinerary_id)
            .then(response => {
                console.log(response)
                this.props.history.push('/perfil')
            })
            .catch(err => console.log(err))
    }
    removeItinerary = () => {

        const itinerary_id = this.props.match.params.itinerary_id
        this.usersService
            .removeItinerary(itinerary_id)
            .then(() => this.props.history.push('/perfil'))
            .catch(err => console.log(err))
    }
    deleteItinerary = () => {

        const itinerary_id = this.props.match.params.itinerary_id

        this.itinerariesService
            .deleteItinerary(itinerary_id)
            .then(() => this.props.history.push('/perfil'))
            .catch(err => console.log(err))
    }
    favs = () => {
        this.itinerariesService
            .getAllItinerariesFromUser(this.props.loggedUser._id)
            .then(res => {
                this.setState({ favs: res.data.favs })
            })
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })
    handleModalDelete = visible => this.setState({ showModalDelete: visible })

    render() {
        return (
            <Container className="itinerary-details" >
                {this.state.itinerary
                    ?
                    <>
                        <ItineraryInfo
                            itinerary={this.state.itinerary}
                            user={this.props.loggedUser}
                            favs={this.state.favs}
                            handleModal={this.handleModal}
                            handleModalDelete={this.handleModalDelete}
                            saveItinerary={this.saveItinerary}
                            removeItinerary={this.removeItinerary}
                        />
                       
                        <SpotsList spots={this.state.itinerary.spots} itinerary={this.state.itinerary} />


                        <ItineraryOwner owner={this.state.itinerary.owner} />

                        <section className="comments">

                            <Row>
                                <Col>
                                    <h4 className="description">Comentarios</h4>
                                    <MessageForm {...this.props} updateMessage={this.refreshItineraries} />
                                    
                                        {this.state.itinerary.messages.map(elm =>
                                            <MessageCard key={elm._id} message={elm} />
                                        )}
                                    
                                </Col>
                            </Row>
                        </section>

                    </>
                    :
                    <Loader />
                }
                <Popup show={this.state.showModalDelete} handleModal={this.handleModalDelete} title="Borrar itinerario">
                    <p>¿Seguro que quieres borrar este itinerario?</p>
                    <Button closeModal={() => this.handleModalDelete(false)} onClick={this.deleteItinerary} variant="dark" size="sm">Borrar itinerario</Button>
                </Popup>
                <Popup show={this.state.showModal} handleModal={this.handleModal} title="Nuevo spot">
                    <SpotForm closeModal={() => this.handleModal(false)} updateList={this.refreshItineraries} {...this.props} />
                </Popup>
            </Container>
        )
    }
}
export default ItineraryDetails