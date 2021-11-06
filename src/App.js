import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import Registration from './routes/Registration'

import PrivateRoute from './components/PrivateRoute'
import MeusPontos from './components/MeusPontos'
import PontosAbertos from './components/PontosAbertos'
import PontosGeral from './components/PontosGeral'
import PoliceHelper from './components/PoliceHelper'
import EditarPerfil from './components/EditarPerfil'
import CodigoPenal from './components/CodigoPenal'
import RegistroOcorrencia from './components/RegistroOcorrencia'

import './styles/global.css'

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/registration' component={Registration} />

					<PrivateRoute exact path='/'>
						<Dashboard />
					</PrivateRoute>

					<PrivateRoute exact path='/pontos-abertos'>
						<Dashboard content={<PontosAbertos />} />
					</PrivateRoute>

					<PrivateRoute exact path='/meus-pontos'>
						<Dashboard content={<MeusPontos />} />
					</PrivateRoute>

					<PrivateRoute exact path='/pontos-geral'>
						<Dashboard content={<PontosGeral />} />
					</PrivateRoute>

					<PrivateRoute exact path='/police-helper'>
						<Dashboard content={<PoliceHelper />} />
					</PrivateRoute>

					<PrivateRoute exact path='/editar-perfil'>
						<Dashboard content={<EditarPerfil />} />
					</PrivateRoute>

					<PrivateRoute exact path='/codigo-penal'>
						<Dashboard content={<CodigoPenal />} />
					</PrivateRoute>

					<PrivateRoute exact path='/registro-ocorrencia'>
						<Dashboard content={<RegistroOcorrencia />} />
					</PrivateRoute>
				</Switch>
			</Router>
		</div>
	)
}

export default App
