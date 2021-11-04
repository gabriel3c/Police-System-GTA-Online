import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import InputField from './InputField'
import Button from './Button'
import { login } from '../services/user'

export default function FormLogin() {
	const { register, handleSubmit } = useForm()

	const onSubmit = async data => {
		try {
			const resp = await login(data)
			console.log(resp.data)
			console.log('dados formulario', data)
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<Container>
			<p>Sign in</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField label='ID' name='id' register={register} />
				<InputField
					label='Senha'
					name='password'
					type='password'
					register={register}
				/>

				<InputCheckbox>
					<input id='remember' name='remember' type='checkbox' />
					<label>Lembrar</label>
				</InputCheckbox>
				<Button type='submit' value='Entrar' />
			</form>
		</Container>
	)
}

const Container = styled.div`
	width: 80%;

	p {
		text-align: center;
		font-size: 20px;
	}

	form {
		margin: 10px 0 0;
		display: flex;
		flex-direction: column;
	}
`
const InputCheckbox = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;

	label {
		padding-bottom: 3px;
		color: #a9a5a5;
	}
`
