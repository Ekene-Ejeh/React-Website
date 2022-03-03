import React from "react";
import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";

const Container = styled.div`
	height: 100vh;
	overflow: hidden;
`;

const Shape = css;

const IntoShape = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	clip-path: polygon(60% 0, 100% 0%, 100% 100%, 55% 100%);
	background-color: #dc682c;
`;

function App() {
	return (
		<>
			<Container>
				<Navbar />
				<Intro />
				<IntoShape />
			</Container>
			<Container>
				<Feature />
			</Container>
		</>
	);
}

export default App;
