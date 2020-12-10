import React, { Component } from "react"
import ItinerariesService from "./../../../service/itineraries.service"
import { Form, Button } from "react-bootstrap"

class MessageForm extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            rating: ''
        }
        this.itinerariesService = new ItinerariesService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <Form>
                <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name="rating" as="select" value={this.state.rating} onChange={this.handleInputChange}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control name="text" as="textarea" placeholder="Deja tu comentario" rows="3" onChange={this.handleInputChange}/>
                </Form.Group>
                <Button variant="dark" type="submit">Enviar</Button>
            </Form>
        )
    }
}

export default MessageForm