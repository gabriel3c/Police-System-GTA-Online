import styled from 'styled-components'
// import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import SideBar from '../components/SideBar'

export default function Dashboard({ content }) {
	return (
		<>
			<TopBar>
				<h1>Will be a dashboard</h1>
			</TopBar>
			<Main>
				<SideBar />
				<Content>{content}</Content>
			</Main>
		</>
	)
}

const TopBar = styled.header`
	height: 60px;
	background-color: #181826;
	color: white;
`
const Main = styled.main`
	background-color: #14151b;
	display: flex;
`
const Content = styled.div`
	background-color: #1e1e2e;
	width: calc(100vw - 80px);
	height: calc(100vh - 80px);
	margin: 10px;
	border-radius: 10px;
	color: white;
	/* height: ;
	width: ; */
`
