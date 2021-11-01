import styled from 'styled-components'

export default function Button(props) {
	const { value } = props
	return (
		<Box>
			<button>{value}</button>
		</Box>
	)
}

const Box = styled.div`
	margin: 10px 0;

	button {
		width: 100%;
		height: 40px;
		background-color: #145ea8;
		border: none;
		border-radius: 5px;
		outline: none;
	}
`
