import axios from 'axios'

const client = axios.create({
	baseURL: 'https://gtabackendozo.herokuapp.com',
})

client.interceptors.request.use(config => {
	const token = localStorage.getItem('token')
	console.log('request interceptada')

	//verifica token no header, pra bater na api
	if (token) config.headers.Authorization = `Bearer ${token}`

	return config
})

export default client
