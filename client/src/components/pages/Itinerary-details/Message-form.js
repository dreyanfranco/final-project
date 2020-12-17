import React, { Component } from "react"
import ItinerariesService from "./../../../service/itineraries.service"
import { Form, Button, Row, Col } from "react-bootstrap"

class MessageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            rating: '',
            user: this.props.loggedUser
        }
        this.itinerariesService = new ItinerariesService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        this.itinerariesService
            .newMessage(this.props.match.params.itinerary_id, this.state)
            .then(res => {
                this.props.updateMessage()
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="rating" >
                    <Form.Label column sm="3">Valora el itinerario</Form.Label>
                    <Col sm="9">
                        <Form.Control name="rating" as="select" value={this.state.rating} onChange={this.handleInputChange}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="text">
                    <Form.Control name="text" as="textarea" placeholder="Deja tu comentario" rows="3" value={this.state.text} onChange={this.handleInputChange} />
                </Form.Group>
                <Button variant="dark" type="submit">Enviar</Button>
            </Form>
        )
    }
}

export default MessageForm