import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'


import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './layout/Header'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'

import AuthServices from './../service/auth.service'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: undefined }
    this.authServices = new AuthServices
  }

  componentDidMount = () => {

    this.authServices   
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }


  setTheUser = user => this.setState({ loggedInUser: user })

  render() {

    return (
      <>
        <Header storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />

        <main>
          <Switch>
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
             <Route path="/inicio-sesion" render={props => <Login storeUser={this.setTheUser} {...props} />} />

          </Switch>
        </main>
      </>
    )
  }
}

export default App
