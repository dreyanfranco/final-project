import React, { Component } from "react"
import FilesService from "./../../../service/upload.service"
import ItinerariesService from "./../../../service/itineraries.service"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Autocomplete from "./../Autocomplete-form/Autocomplete-form"

class ItineraryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itinerary: {
                name: "",
                description: "",
                itineraryImage: "",
                location: {
                    address: "",
                    coordinates: []
                },
                duration: "1 día",
                owner: this.props.loggedUser._id
            }
        }

        this.itinerariesService = new ItinerariesService()
        this.filesService = new FilesService()
    }
    handleInputChange = e => this.setState({ itinerary: { ...this.state.itinerary, [e.target.name]: e.target.value } })

    handleSubmit = e => {
        e.preventDefault()
        this.itinerariesService
            .newItinerary(this.state.itinerary)
            .then(res => this.props.history.push(`/itinerario/${res.data._id}`))
            .catch(err => console.log(err))
    }

    handleImageUpload = e => {
        const uploadData = new FormData()
        uploadData.append("itineraryImage", e.target.files[0])
        this.setState({ uploadingActive: true })
        this.filesService
            .uploadImageItinerary(uploadData)
            .then(response => {
                this.setState({
                    itinerary: { ...this.state.itinerary, itineraryImage: response.data.secure_url},
                    uploadingActive: false
                })
            })
            .catch(err => console.log("ERRORRR!", err))
    }

    handleLocation = city => {
        let itineraryCopy = { ...this.state.itinerary, location: city }
        this.setState({ itinerary: itineraryCopy })
    }

    render() {
    
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Crea tu itinerario</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="location">
                                <Form.Label>Nombre de ciudad</Form.Label>
                                <Autocomplete getData={location => this.handleLocation(location) }/>
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" value={this.state.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="itineraryImage">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="file" onChange={this.handleImageUpload} />
                            </Form.Group>
                            <Form.Group controlId="duration">
                                <Form.Label>Duración de viaje</Form.Label>
                                <Form.Control name="duration" as="select" value={this.state.duration} onChange={this.handleInputChange}>
                                    <option>1 día</option>
                                    <option>2 días</option>
                                    <option>3 días</option>
                                    <option>4 días</option>
                                    <option>5 días</option>
                                    <option>6 días</option>
                                    <option>7 días</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="dark" type="submit">Enviar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default ItineraryForm