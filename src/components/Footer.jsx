import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 10%;
	background-color: darkblue;
	color: lightgray;
`;
const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	justify-content: space-between;
`;
const List = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: none;
	display: flex;
`;
const ListItem = styled.li`
	margin-right: 20px;
`;
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
					<Copyright>Ekene Dev &copy; </Copyright>
				</Wrapper>
			</Container>
		</>
	);
}
