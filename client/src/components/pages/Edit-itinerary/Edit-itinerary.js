import React, { Component } from "react"
import FilesService from "./../../../service/upload.service"
import ItinerariesService from "./../../../service/itineraries.service"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

class EditItinerary extends Component {

    constructor(props) {
        super(props)
        this.state ={
        itinerary:{
            name: "",
            cityName: "", // google maps autocomplete
            description: "",
            itineraryImage: "",
            latitude: "",
            longitude: "",
            duration: "1 día",
            
        }
        }
        this.itinerariesService = new ItinerariesService()
        this.filesService = new FilesService()

        this.itinerariesService = new ItinerariesService();
    }

    componentDidMount() {
        const itinerary_id = this.props.match.params.itinerary_id
        this.itinerariesService
            .getItinerary(itinerary_id)
            .then(res => this.setState({ itinerary: res.data }))
            .catch(err => console.log(err))
        console.log(this.state.itinerary)
        
    }
    handleSubmit = e => {
        e.preventDefault()
        this.itinerariesService
            .editItinerary(this.state.itinerary)
            .then(res => this.props.history.push(`/itinerario/${res.data._id}`)  )
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
                    itinerary: { ...this.state.itinerary, itineraryImage: response.data.secure_url },
                    uploadingActive: false
                })
            })
            .catch(err => console.log("ERRORRR!", err))
    }

    handleInputChange = e => {
    e.persist();

    this.setState(prevState => ({
    itinerary: { ...prevState.itinerary,  [e.target.name]: e.target.value }
    }))
}
    render() {
        
        return (
            
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Editar {this.state.itinerary.name}</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.itinerary.name} onChange={this.handleInputChange}  />
                            </Form.Group>
                            <Form.Group controlId="cityName">
                                <Form.Label>Nombre de ciudad</Form.Label>
                                <Form.Control type="text" name="cityName" value={this.state.itinerary.cityName} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" value={this.state.itinerary.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="itineraryImage">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control type="file"  onChange={this.handleImageUpload} />
                            </Form.Group>
                            <Form.Group controlId="cityLocation">
                                <Form.Label>Coordenadas</Form.Label>
                                <br />
                                <Form.Label size="sm">Latitud</Form.Label>
                                <Form.Control type="text" name="latitude" value={this.state.itinerary.latitude} onChange={this.handleInputChange} />
                                <Form.Label size="sm">Longitud</Form.Label>
                                <Form.Control type="text" name="longitude" value={this.state.itinerary.longitude} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="duration">
                                <Form.Label>Duración de viaje</Form.Label>
                                <Form.Control name="duration" as="select" value={this.state.itinerary.duration} onChange={this.handleInputChange}>
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

export default EditItinerary