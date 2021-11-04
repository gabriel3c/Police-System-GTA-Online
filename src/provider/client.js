import axios from 'axios'

const client = axios.create({
	baseURL: 'https://gtabackendozo.herokuapp.com',
})

export default client
