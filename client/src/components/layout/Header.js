import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'

import AuthService from './../../service/auth.service'

class Header extends Component {
    constructor() {
        super()
        this.authService = new AuthService()
    }
    logOut = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }

    render() {
        
        return (
           <Navbar bg="light"  expand="md" style={{ marginBottom: '50px' }}>
                <Link to="/">
                    <Navbar.Brand>
                        <img alt="Logotipo" src={logo} width="30" height="30" className="d-inline-block align-top" />
                        {' '}Backpackers
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/">
                            <Nav.Link as="div">Inicio</Nav.Link>
                        </Link>
                        <Link to="/itinerarios">
                            <Nav.Link as="div">Itinerarios</Nav.Link>
                        </Link>
                        {
                            this.props.loggedUser
                                ?
                                <Nav.Link as="div" onClick={this.logOut}>Cerrar sesión</Nav.Link>
                                :
                                <>
                                    <Link to="/registro">
                                        <Nav.Link as="div">Registro</Nav.Link>
                                    </Link>
                                    <Link to="/inicio-sesion">
                                        <Nav.Link as="div">Inicio sesión</Nav.Link>
                                    </Link>
                                </>

                        }
                        <Link to="/perfil">
                            <Nav.Link as="div">Hola, {this.props.loggedUser ? this.props.loggedUser.username : 'invitado'}</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header