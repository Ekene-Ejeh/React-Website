import React from "react";
import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";

const Container = styled.div`
	height: 100vh;
	overflow: hidden;
	position: relative;
`;

const Shape = css`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`;

const IntoShape = styled.div`
	${Shape}
	clip-path: polygon(60% 0, 100% 0%, 100% 100%, 55% 100%);
	background-color: #dc682c;
`;
const FeatureShape = styled.div`
	${Shape}
	clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
	background-color: #abb6bf;
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
				<FeatureShape />
			</Container>
		</>
	);
}

export default App;
