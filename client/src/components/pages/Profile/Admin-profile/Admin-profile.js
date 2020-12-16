import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import AuthServices from '../../../../service/auth.service'
import UsersService from './../../../../service/users.service'
import Loader from './../../../shared/Spinner/Loader'


class AdminProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: undefined
        }
        this.authServices = new AuthServices()
        this.usersService = new UsersService()
    }

    componentDidMount = () => {
        this.usersService
            .getAllUsers()
            .then(res => {
                this.setState({ users: res.data })
                
            })
            .catch(err => console.log(err))
    }

    deleteUser = () => {
        
        const user_id = this.state.users._id
        
        this.usersService
            .deleteUser(user_id)
            .then(() => this.props.history.push('/perfil'))
            .catch(err => console.log(err))
    }
    render() {
        
        return (
            <Container>
                {this.state.users
                    ?
                    <>
                        <Row>
                            <Col>
                                <h2>Listado de usuarios</h2>
                                <ul>
                                    {this.state.users.map(elm =>
                                        <li key={elm._id}>
                                            <Link className="btn btn-dark btn-sm" to={`/`}>Eliminar usuario</Link>{elm.username}
                                        </li>
                                    )}
                                </ul>
                            </Col>
                        </Row>
                    </>
                    : <Loader />
                }
            </Container>
        )
    }

}


export default AdminProfile