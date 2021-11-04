import client from './../provider/client'

// const headers = {
// 	'Content-Type': 'application/json',
// 	'Access-Control-Allow-Origin': '*',
// }

export const getUser = id => client.get(`/${id}`)

export const deleteUser = id => client.delete(`/${id}`)

export const login = data => client.post('/login', data)
