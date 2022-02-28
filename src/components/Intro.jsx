import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: calc(100vh - 50px);
	background-color: red;
`;

export default function Intro() {
	return (
		<>
			<Container></Container>
		</>
	);
}
