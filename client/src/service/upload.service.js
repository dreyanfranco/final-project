
import axios from 'axios'

export default class FilesService {

    constructor() {
        this.apiHandler = axios.create({
            //baseURL: 'http://localhost:5000/api/files',
            baseURL: `${process.env.REACT_APP_API_URL}/files`,
            withCredentials: true
        })
    }

    uploadImage = imageForm => this.apiHandler.post('/uploadSignup', imageForm)
    uploadImageItinerary = imageForm => this.apiHandler.post('/uploadItinerary', imageForm)
    uploadImageSpot = imageForm => this.apiHandler.post('/uploadSpot', imageForm)
}