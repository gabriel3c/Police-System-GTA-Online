import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import ItemBar from './ItemBar'
// import PontosAbertos from './PontosAbertos'

export default function SideBar() {
	return (
		<Container>
			<div></div>
			<div>
				<ul>
					<li>
						<Link to='/pontos-abertos'>Pontos Abertos</Link>
					</li>
					<li>
						<Link to='/meus-pontos'>Meus Pontos</Link>
					</li>

					<li>
						<Link to='/pontos-geral'>Pontos Geral</Link>
					</li>

					<li>
						<Link to='/police-helper'>Police Helper</Link>
					</li>

					<li>
						<Link to='/editar-perfil'>Editar Perfil</Link>
					</li>

					<li>
						<Link to='/codigo-penal'>Código Penal</Link>
					</li>

					<li>
						<Link to='/registro-ocorrencia'>Registro de Ocorrencia</Link>
					</li>
				</ul>
			</div>
		</Container>
	)
}

const Container = styled.aside`
	background-color: #0839af;
	border-radius: 10px;
	color: white;
	width: 200px;
	height: calc(100vh - 80px);
	margin: 10px 10px;
`
