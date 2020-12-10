import React, { Component } from "react"
import FilesService from "./../../../service/upload.service"
import ItinerariesService from "./../../../service/itineraries.service"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
class ItineraryForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            cityName: "", // google maps autocomplete
            description: "",
            itineraryImage: "",
            latitude: "",
            longitude: "",
            duration: "1 día",
        }
        this.itinerariesService = new ItinerariesService()
        this.filesService = new FilesService()
    }
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })
    handleSubmit = e => {
        e.preventDefault()
        this.itinerariesService
            .newItinerary(this.state)
            .then(res => console.log(res))
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
                    itineraryImage: response.data.secure_url,
                    uploadingActive: false
                })
            })
            .catch(err => console.log("ERRORRR!", err))
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Crea tu itinerario</h1>
                        {console.log(this.state)}
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="cityName">
                                <Form.Label>Nombre de ciudad</Form.Label>
                                <Form.Control type="text" name="cityName" value={this.state.cityName} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" value={this.state.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="itineraryImage">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="file" onChange={this.handleImageUpload} />
                            </Form.Group>
                            <Form.Group controlId="cityLocation">
                                <Form.Label>Coordenadas</Form.Label>
                                <br />
                                <Form.Label size="sm">Latitud</Form.Label>
                                <Form.Control type="text" name="latitude" value={this.state.latitude} onChange={this.handleInputChange} />
                                <Form.Label size="sm">Longitud</Form.Label>
                                <Form.Control type="text" name="longitude" value={this.state.longi} onChange={this.handleInputChange} />
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