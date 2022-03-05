import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 90%;
	background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

const Wrapper = styled.div`
	height: 100%;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FormContainer = styled.div`
	width: 50%;
`;
const AddressContainer = styled.div`
	width: 50%;
`;

export default function Contact() {
	return (
		<>
			<Container>
				<Wrapper>
					<FormContainer></FormContainer>
					<AddressContainer></AddressContainer>
				</Wrapper>
			</Container>
		</>
	);
}
