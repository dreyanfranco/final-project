import React, { Component } from "react"
import FilesService from "./../../../service/upload.service"
import ItinerariesService from "./../../../service/itineraries.service"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

class SpotForm extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            description: "",
            image: "",
            latitude: "",
            longitude: "",
        }
        this.itinerariesService = new ItinerariesService()
        this.filesService = new FilesService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.itinerariesService
            .newSpot(this.props.match.params.itinerary_id ,this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    handleImageUpload = e => {
        const uploadData = new FormData()
        uploadData.append("image", e.target.files[0])

        this.setState({ uploadingActive: true })

        this.filesService
            .uploadImageSpot(uploadData)
            .then(response => {
                this.setState({
                    image: response.data.secure_url,
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
                        <h1>Añadir Spot</h1>
                        {console.log(this.state)}
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" value={this.state.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="file" onChange={this.handleImageUpload} />
                            </Form.Group>
                            <Form.Group controlId="cityLocation">
                                <Form.Label>Coordenadas</Form.Label>
                                <br />
                                <Form.Label size="sm">Latitud</Form.Label>
                                <Form.Control type="text" name="latitude" value={this.state.latitude} onChange={this.handleInputChange} />
                                <Form.Label size="sm">Longitud</Form.Label>
                                <Form.Control type="text" name="longitude" value={this.state.longitude} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button variant="dark" type="submit">Enviar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SpotForm