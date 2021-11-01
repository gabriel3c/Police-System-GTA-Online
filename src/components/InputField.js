import styled from 'styled-components'

export default function InputField({ label, name, register, type }) {
	if (!type) type = 'text'
	if (!register) register = 0

	return (
		<Box>
			<label>{label}</label>
			<input type={type} {...register(name)} />
		</Box>
	)
}

const Box = styled.div`
	display: flex;
	flex-direction: column;
	/* gap: 5px; */
	margin-bottom: 20px;

	input {
		font-size: 19px;
		height: 50px;
		padding: 10px 20px;
		background-color: transparent;
		color: white;
		outline: none;
		border: 1px solid #145ea8;
		border-radius: 5px;
	}
	label {
		font-size: 15px;
		color: #a9a5a5;
	}
`
