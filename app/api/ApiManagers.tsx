import axios from 'axios'

const ApiManager = axios.create({
    baseURL: 'https://reqres.in/api/users?page=1',
    responseType: 'json',
})

export default ApiManager;