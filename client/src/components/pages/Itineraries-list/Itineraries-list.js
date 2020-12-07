import React, { Component } from 'react';
import ItinerariesService from './../../../service/itineraries.service';

class ItinerariesList extends Component {
    constructor() {
        super()
        this.state = {
            itineraries: undefined
        }
        this.itinerariesService = new ItinerariesService();
    }

    componentDidMount = () => {
        this.itinerariesService
            .editSpot('5fce436eb003635ae500a61d', '5fce436eb003635ae500a61e')
            .then(res => console.log(res))
            .catch(err => console.log(err));

        // this.itinerariesService
        //     .getAllItineraries()
        //     .then(res => this.setState({ itineraries: res.data }))
        //     .catch(err => console.log(err));
    }

    render() {
        return (
            <h1>Itineraries list</h1>
            // this.state.itineraries.map(elm => { elm.name })
        )
    }
}

export default ItinerariesList;