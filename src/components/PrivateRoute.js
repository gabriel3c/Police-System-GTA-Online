import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

export default function PrivateRoute({ children, ...rest }) {
	const authenticated = useContext(AuthContext)
	console.log('contexto autenticado', authenticated)
	const auth = localStorage.getItem('token')

	return (
		<Route
			{...rest}
			render={() => (auth ? children : <Redirect to='/login' />)}
		/>
	)
}
