import React, { Component } from 'react'

import ItinerariesService from './../../../service/itineraries.service';

import Loader from './../../shared/Spinner/Loader'
import './Spot-details.css'
import SpotMap from './../Spot-map/Spot-map'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SpotDetails extends Component {

    constructor() {
        super()
        this.state = {
            spot: undefined,
           
        }
        this.itinerariesService = new ItinerariesService();
    }

    componentDidMount = () =>  {

        const spot_id= this.props.match.params.spot_id
        console.log(this.props.match.params.spot_id)
        this.itinerariesService
            .getOneSpot(this.props.match.params.spot_id)
            .then(res => this.setState({ spot: res.data }))
            .catch(err => console.log(err))
    }

    // deleteSpot= () => {

    //     const itinerary_id = this.props.match.params.itinerary_id
    //     const spot_id= this.props.match.params.spot_id
    //     this.itinerariesService
    //         .deleteItinerary({ itinerary_id, spot_id })
    //         .then(() => this.props.history.push('/perfil'))
    //         .catch(err => console.log(err))
    // }

    render() {

        return (
            
            <Container className="spot-details" >
                {this.state.spot
                    ?
                    <>
                        <section className="spot">
                            <Row>
                                <Col md={{ span: 6 }} >
                                    <img src={this.state.spot.image} alt={this.state.spot.location.address} />

                                </Col>
                                <Col md={{ span: 6 }} >
                                    <h1>{this.state.spot.location.address}</h1>
                                    <p className="description">{this.state.spot.description}</p>
            
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
             
            </Container>
        )
    }
}
export default SpotDetails