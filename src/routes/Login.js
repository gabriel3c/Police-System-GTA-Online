import styled from 'styled-components'
import { Link } from 'react-router-dom'

import FormLogin from './../components/FormLogin'
import brandImage from './../assets/images/brand-lion.jpg'

export default function Login() {
	return (
		<Wrapper>
			<Brand>
				<div>
					<img src={brandImage} alt='Logo da King RP' />
				</div>
				<h1>Kings Roleplay</h1>
				<p>Sistema do Departamento de Polícia</p>
			</Brand>

			<FormSection>
				<FormLogin />
				<ForgotPassword>
					<Link to='/change-password'>Esqueceu sua senha?</Link>
					<Link to='/registration'>Faça seu cadastro</Link>
				</ForgotPassword>
				<small>Desenvolvido por ozo | 2021</small>
			</FormSection>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	color: white;
	align-items: center;
	background-color: black;
`

const Brand = styled.section`
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	div {
		max-width: 150px;
		margin-top: auto;

		img {
			width: 100%;
		}
	}

	h1 {
		font-size: 110px;
		font-family: 'Pricedown Bl', sans-serif;
	}
	p {
		margin: auto 0 100px;
		align-self: center;
		font-size: 25px;
		color: #b0fcee;
	}
`

const FormSection = styled.section`
	width: 40%;
	height: 100%;
	background-color: #181a1b;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;

	a {
		color: #145ea8;
	}

	small {
		color: #145ea8;
	}
`

const ForgotPassword = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
`

// Coisas para rever:
// -estilo da fonte
// -animação do label
// -icone da seção de Login
// -autenticação
// -funcionalidade do 'Lembrar'
