import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import Registration from './routes/Registration'

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

					<Route exact path='/'>
						<Dashboard />
					</Route>

					<Route exact path='/pontos-abertos'>
						<Dashboard content={<PontosAbertos />} />
					</Route>

					<Route exact path='/meus-pontos'>
						<Dashboard content={<MeusPontos />} />
					</Route>

					<Route exact path='/pontos-geral'>
						<Dashboard content={<PontosGeral />} />
					</Route>

					<Route exact path='/police-helper'>
						<Dashboard content={<PoliceHelper />} />
					</Route>

					<Route exact path='/editar-perfil'>
						<Dashboard content={<EditarPerfil />} />
					</Route>

					<Route exact path='/codigo-penal'>
						<Dashboard content={<CodigoPenal />} />
					</Route>

					<Route exact path='/registro-ocorrencia'>
						<Dashboard content={<RegistroOcorrencia />} />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
