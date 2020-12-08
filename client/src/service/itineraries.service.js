import axios from 'axios'

export default class ItinerariesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/itineraries',
            withCredentials: true
        })
    }

    getAllItineraries = () => this.apiHandler.get('/getAllItineraries')
    getItinerary = itineraryId => this.apiHandler.get(`/getOneItinerary/${itineraryId}`)
    newItinerary = itineraryInfo => this.apiHandler.post(`/newItinerary/${itineraryInfo}`)
    editSpot = (itineraryId, spotId) => this.apiHandler.put(`/${itineraryId}/editSpot/${spotId}`)

}