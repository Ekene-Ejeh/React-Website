import React from "react";
import styled from "styled-components";
import Search from "../img/search.png";

const Container = styled.div`
	width: 100px;
	padding: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.5);
	box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.6);
`;

const Image = styled.img`
	width: 20px;
`;

const Text = styled.span`
	margin-top: 10px;
	text-align: center;
`;

export default function MiniCard() {
	return (
		<>
			<Container>
				<Image src={Search} />
				<Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
			</Container>
		</>
	);
}
