import React from "react";
import styled from "styled-components";
import Phone from "../img/phone.png";

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	width: 50%;
`;

const Image = styled.img``;

const Right = styled.div`
	width: 50%;
`;

export default function Feature() {
	return (
		<>
			<Container>
				<Left>
					<Image src={Phone} />
				</Left>
				<Right></Right>
			</Container>
		</>
	);
}
