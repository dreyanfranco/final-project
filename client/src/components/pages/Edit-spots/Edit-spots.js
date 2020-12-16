import React, { Component } from "react"
import FilesService from "./../../../service/upload.service"
import ItinerariesService from "./../../../service/itineraries.service"
import Autocomplete from "./../Autocomplete-form/Autocomplete-form"
import Loader from './../../shared/Spinner/Loader'

import { Container, Row, Col, Form, Button } from "react-bootstrap"

class EditSpot extends Component {
    constructor() {
        super()
        this.state = {
            spot: {
                description: "",
                image: "",
                location: {
                    address: "",
                    coordinates: []
                }
            },
            uploadingActive: false,
        }
        this.itinerariesService = new ItinerariesService()
        this.filesService = new FilesService()
    }
    componentDidMount() {
        const spot_id = this.props.match.params.spot_id
        this.itinerariesService
            .getOneSpot(spot_id)
            .then(res => this.setState({ spot: res.data }))
            .catch(err => console.log(err))
    
        
    }

    handleInputChange = e => this.setState({ spot: { ...this.state.spot, [e.target.name]: e.target.value} })

    handleSubmit = e => {
      
        e.preventDefault()
        this.itinerariesService
            .editSpot(this.state.spot._id, this.state.spot)
             .then(res => {
                this.props.closeModal()
                this.props.updateList()
            })
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
                    spot: {...this.state.spot, image: response.data.secure_url},
                    uploadingActive: false
                })
            })
            .catch(err => console.log("ERRORRR!", err))
    }

    handleLocation = spotLoc => {
        let spotCopy = { ...this.state.spot, location: spotLoc }
        this.setState({ spot: spotCopy })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 12 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="location">
                                <Form.Label>Localización</Form.Label>
                                <Autocomplete getData={location => this.handleLocation(location)} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" value={this.state.spot.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Imagen{this.state.uploadingActive && <Loader />}</Form.Label>
                                <Form.Control type="file" onChange={this.handleImageUpload} />
                            </Form.Group>
                            <Button variant="dark" type="submit"disabled={this.state.uploadingActive}>{this.state.uploadingActive ? 'Subiendo imagen...' : 'Enviar'}</Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default EditSpot