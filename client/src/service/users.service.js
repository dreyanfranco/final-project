import axios from 'axios'

export default class UsersService {

    constructor() {
        this.apiHandler = axios.create({
            //baseURL: 'http://localhost:5000/api/users',
            baseURL: `${process.env.REACT_APP_API_URL}/users`,
            withCredentials: true
        })
    }

    getAllUsers = () => this.apiHandler.get('/getAllUsers')
    editUser = userId => this.apiHandler.put(`/editUser/${userId}`)
    deleteUser = userId => this.apiHandler.delete(`/deleteUser/${userId}`)
    saveItinerary= itineraryId => this.apiHandler.get(`/profile/save-itinerary/${itineraryId}`)
    removeItinerary= itineraryId => this.apiHandler.get(`/profile/remove-itinerary/${itineraryId}`)
}