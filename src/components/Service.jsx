import React from "react";
import styled from "styled-components";
import Latina from "../img/Latina.jpg";

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	width: 50%;
`;

const Image = styled.img`
	width: 62%;
`;

const Right = styled.div`
	width: 50%;
`;

export default function Service() {
	return (
		<>
			<Container>
				<Left>
					<Image src={Latina} />
				</Left>
				<Right></Right>
			</Container>
		</>
	);
}
