import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Profile.css"
import { Link } from 'react-router-dom'
import ItinerariesService from './../../../service/itineraries.service';
import AuthServices from './../../../service/auth.service'
import ItinerariesCard from './../../pages/Itineraries-list/Itineraries-card'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itineraries: [],
            
        }
        this.itinerariesService = new ItinerariesService();
        this.authServices = new AuthServices
    }

    componentDidMount = () => {
        this.itinerariesService
            .getAllItineraries()
            .then(res => this.setState({ itineraries: res.data }))
            .catch(err => console.log(err))
    }
    filteredItineraries
    filterSaved
    
    render() {

        this.filteredItineraries = this.state.itineraries.filter(elm => elm.owner.username === this.props.loggedUser.username)
        this.filterSaved = this.state.itineraries.filter(elm => this.props.loggedUser.itinerariesSaved.includes(elm._id))

    return (
        <Container>
            <Row className="align-items-center">
                <Col md={{span:7}}>
                    <h1>¡Bienvenid@, {this.props.loggedUser.username} !</h1>
                    <h4>Sobre mi:</h4>
                    <p>{this.props.loggedUser.description} </p>
                    <Link className="btn btn-dark btn-sm" to={`/crear-itinerario`}>Crear Itinerario</Link>
                </Col>
                <Col md={{ span: 5 }}>
                    <img className="profile" src={this.props.loggedUser.profileImage} alt={this.props.loggedUser.username}/>
                </Col>
            </Row> 
            <hr />
            <Row className="align-items-center">
                      
                {this.filteredItineraries.map(elm =>
                                <ItinerariesCard key={elm._id} itinerary={elm} />
                            )}
               
            </Row>    
            <hr />
            <Row className="align-items-center">
                      
                {this.filterSaved.map(elm =>
                                <ItinerariesCard key={elm._id} itinerary={elm} />
                            )} 
               
            </Row>
        </Container>
    )
    }

 }


export default Profile
