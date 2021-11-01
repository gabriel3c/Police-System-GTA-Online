import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import Registration from './routes/Registration'

import './styles/global.css'

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/registration' component={Registration} />
					<Route exact path='/' component={Dashboard} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
