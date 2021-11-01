import client from './../provider/client'

export const getUser = id => client.get(`/${id}`)

export const deleteUser = id => client.delete(`/${id}`)

export const login = data => client.post('/login', data)
