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
    newItinerary = itineraryInfo => this.apiHandler.post('/newItinerary', itineraryInfo)
    newSpot = (itineraryId, spotInfo) => this.apiHandler.post('/newSpot', { itineraryId, spotInfo })

    postMessage = (id, message) => this.service.post(`/${id}/message`, { message })
        
    
    
    
}
