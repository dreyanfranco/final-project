import React, { Component } from 'react'
import ItinerariesService from './../../../service/itineraries.service';
import SpotForm from './../Spots-form/Spots-form'

class EditSpot extends Component {

    constructor() {
        super()
        this.state = {}

        this.itinerariesService = new ItinerariesService();
    }

    componentDidMount() {

        this.itinerariesService.getItinerary()
    }

    render() {
        return (

            <SpotForm />
        )
    }
}

export default EditSpot