import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import FilesService from './../../../service/upload.service'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            profile:{
                profileImage:'',
                username: '',
                password: '',
                description: ''
            },
            uploadingActive: false
        }
        this.authService = new AuthService()
        this.filesService = new FilesService()
    }
    handleInputChange = e => this.setState({ profile: { ...this.state.profile, [e.target.name]: e.target.value }})
    handleSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state.profile)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/perfil')        
            })
            .catch(err => console.log(err))
    }
        handleImageUpload = e => {

        const uploadData = new FormData()
            uploadData.append('profileImage', e.target.files[0])
            
        this.setState({ uploadingActive: true })

        this.filesService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({
                    profile: { ...this.state.profile, profileImage: response.data.secure_url },
                    uploadingActive: false
                })
            })
            .catch(err => console.log('ERRORRR!', err))
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
                                <Form.Control type="file" onChange={this.handleImageUpload} />
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