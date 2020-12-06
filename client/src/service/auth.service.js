import axios from 'axios'

export default class AuthService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true
        })
    }

    signup = credentials => this.apiHandler.post('/signup', credentials)
    login = credentials => this.apiHandler.post('/login', credentials)
    logout = () => this.apiHandler.post('/logout')
    isLoggedIn = () => this.apiHandler.get('/loggedin')
    getAllUsers = () => this.apiHandler.get('/getAllUsers')
    editUser = userId => this.apiHandler.put(`/editUser/${userId}`)
    deleteUser = userId => this.apiHandler.delete(`/deleteUser/${userId}`)
}