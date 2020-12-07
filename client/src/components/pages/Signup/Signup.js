import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            profileImage:'',
            username: '',
            password: '',
            description: '',
        }
        this.authService = new AuthService()

    }
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })
    handleSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/perfil')        
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Registro de usuario</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="profileImage">
                                <Form.Label>Imagen </Form.Label>
                                <Form.Control type="text" name="profileImage" value={this.state.profileImage} onChange={this.handleInputChange} />
                            </Form.Group>
                             <Form.Group controlId="description">
                                <Form.Label>Sobre ti: </Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" value={this.state.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button variant="dark" type="submit">Registrarme</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Signup