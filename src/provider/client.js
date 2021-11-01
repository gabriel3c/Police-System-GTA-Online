import axios from 'axios'

const client = axios.create({
	//passar url
	baseURL: 'https://gtabackendozo.herokuapp.com',
})

export default client
