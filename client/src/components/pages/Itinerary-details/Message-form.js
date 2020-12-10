import React, { Component } from "react"
import ItinerariesService from "./../../../service/itineraries.service"
import { Form, Button } from "react-bootstrap"

class MessageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            rating: '',
            user: this.props.loggedUser
        }
        this.itinerariesService = new ItinerariesService()
        console.log(this.props.loggedUser)
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        console.log("probando")
        this.itinerariesService
            .newMessage(this.props.match.params.itinerary_id, this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="rating" >
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
                <Form.Group controlId="text">
                    <Form.Control name="text" as="textarea" placeholder="Deja tu comentario" rows="3" value={this.state.text} onChange={this.handleInputChange} />
                </Form.Group>
                <Button variant="dark" type="submit">Enviar</Button>
            </Form>
        )
    }
}

export default MessageForm