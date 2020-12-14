import axios from 'axios'

export default class ItinerariesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: ('http://localhost:5000/api/itineraries'),
            withCredentials: true,
        })
    }
    getAllItineraries = () => this.apiHandler.get('/getAllItineraries')
    getItinerary = itineraryId => this.apiHandler.get(`/getOneItinerary/${itineraryId}`)
    editItinerary = (itineraryId, itinerary) => this.apiHandler.put(`/editItinerary/${itineraryId}`, { itinerary })
    editSpot = (spotId, editedSpot) => this.apiHandler.put(`/editSpot/${spotId}`, editedSpot )
    newItinerary = itinerary => this.apiHandler.post('/newItinerary', {itinerary})
    newSpot = (itineraryId, spotInfo) => this.apiHandler.post('/newSpot', { itineraryId, spotInfo })
    deleteSpot = (itineraryId, spotId) => this.apiHandler.delete('/deleteSpot', { itineraryId, spotId })
    newMessage = (itineraryId, message) => this.apiHandler.post(`/${itineraryId}/message`, { message })
    deleteItinerary = itineraryId => this.apiHandler.delete(`/deleteItinerary/${itineraryId}`)
}
