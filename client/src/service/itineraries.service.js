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
    editItinerary = (itineraryId, editedItinerary) => this.apiHandler.put(`/editItinerary/`, {itineraryId, editedItinerary })
    editSpot = (spotId, editedSpot) => this.apiHandler.put(`/editSpot/${spotId}`, editedSpot )
    newItinerary = itinerary => this.apiHandler.post('/newItinerary', {itinerary})
    newSpot = (itineraryId, spotInfo) => this.apiHandler.post('/newSpot', { itineraryId, spotInfo })
    newMessage = (itineraryId, message) => this.apiHandler.post(`/${itineraryId}/message`, { message })
}
