import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import avatar from './backpack.png'

import AuthService from './../../service/auth.service'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }
        this.authService = new AuthService()
    }
    logOut = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }
    handleModal = visible => this.setState({ showModal: visible })
    render() {

        return (
            <Navbar bg="light" expand="md">
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
                            <Nav.Link as="div"> <img alt="profile" width="20" height="20" className="d-inline-block align-top avatar" src={this.props.loggedUser ? this.props.loggedUser.profileImage : `${avatar}`} /> {this.props.loggedUser ? this.props.loggedUser.username : 'Perfil'}</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Header