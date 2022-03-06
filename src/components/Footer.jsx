import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 10%;
	background-color: #111;
	color: lightgray;
`;
const Wrapper = styled.div``;
const List = styled.ul``;
const ListItem = styled.li``;
const Copyright = styled.span``;

export default function Footer() {
	return (
		<>
			<Container>
				<Wrapper>
					<List>
						<ListItem>Guide</ListItem>
						<ListItem>Support</ListItem>
						<ListItem>API</ListItem>
						<ListItem>Community</ListItem>
					</List>
					<Copyright>Ekene Dev </Copyright>
				</Wrapper>
			</Container>
		</>
	);
}
