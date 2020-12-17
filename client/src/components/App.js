import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import ItinerariesList from './pages/Itineraries-list/Itineraries-list'
import Profile from './pages/Profile/Profile'
import AdminProfile from './pages/Profile/Admin-profile/Admin-profile'
import ItineraryDetails from './pages/Itinerary-details/Itinerary-details'
import ItineraryForm from './pages/Itinerary-form/Itinerary-form'
import EditItinerary from './pages/Edit-itinerary/Edit-itinerary'
import SpotsForm from './pages/Spots-form/Spots-form'
import EditSpot from './pages/Edit-spots/Edit-spots'
import SpotDetails from './pages/Spot-details/Spot-details'

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
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/inicio-sesion" render={props => <Login storeUser={this.setTheUser} {...props} />} />
            <Route path="/perfil" render={props => this.state.loggedInUser ? <Profile loggedUser={this.state.loggedInUser} {...props} /> : <Redirect to="/inicio-sesion" />} />
            <Route path="/itinerarios" exact render={props => <ItinerariesList loggedUser={this.state.loggedInUser}  {...props} />} />
            <Route path="/itinerario/:itinerary_id" render={props => this.state.loggedInUser ? <ItineraryDetails loggedUser={this.state.loggedInUser} {...props} /> : <Redirect to="/inicio-sesion" />} />
            <Route path="/editar-itinerario/:itinerary_id" render={props => this.state.loggedInUser ? <EditItinerary loggedUser={this.state.loggedInUser} {...props} /> : <Redirect to="/inicio-sesion" />} />
            <Route path="/editar-spot/:spot_id" render={props => <EditSpot {...props} /> } />
            <Route path="/crear-itinerario" render={props => this.state.loggedInUser ? <ItineraryForm loggedUser={this.state.loggedInUser} {...props} /> : <Redirect to="/inicio-sesion" />} />
            <Route path="/:itinerary_id/crear-spots" render={props => <SpotsForm {...props} />} />
            <Route path="/:itinerary_id/spot/:spot_id" render={props => this.state.loggedInUser ? <SpotDetails loggedUser={this.state.loggedInUser} {...props} /> : <Redirect to="/inicio-sesion" />} />

            <Route path="/listado-usuarios" render={props => this.state.loggedInUser ? <AdminProfile loggedUser={this.state.loggedInUser} {...props} /> : <Redirect to="/inicio-sesion" />} />
          </Switch>
        </main>
        <Footer/>
      </>
    )
  }
}

export default App
