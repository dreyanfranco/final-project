import axios from 'axios'

export default class ItinerariesService {

    constructor() {
        this.apiHandler = axios.create({
            //baseURL: 'http://localhost:5000/api/itineraries',
            baseURL: `${process.env.REACT_APP_API_URL}/itineraries`,
            withCredentials: true,
        })
    }
    getAllItineraries = () => this.apiHandler.get('/getAllItineraries')
    getAllItinerariesFromUser = userId => this.apiHandler.get(`/getAllItinerariesFromUser/${userId}`)
    getItinerary = itineraryId => this.apiHandler.get(`/getOneItinerary/${itineraryId}`)
    editItinerary = (itineraryId, itinerary) => this.apiHandler.put(`/editItinerary/${itineraryId}`, { itinerary })
    newItinerary = itinerary => this.apiHandler.post('/newItinerary', {itinerary})
    deleteItinerary = itineraryId => this.apiHandler.delete(`/deleteItinerary/${itineraryId}`)
    newMessage = (itineraryId, message) => this.apiHandler.post(`/${itineraryId}/message`, { message })
    newSpot = (itineraryId, spotInfo) => this.apiHandler.post('/newSpot', { itineraryId, spotInfo })
    getOneSpot = spotId => this.apiHandler.get(`/getOneSpot/${spotId}`)
    editSpot = (spotId, spot) => this.apiHandler.put(`/editSpot/${spotId}`, {spot} )
    deleteSpot = (itineraryId, spotId) => this.apiHandler.delete(`/deleteSpot/${spotId}`, {itineraryId})
}
