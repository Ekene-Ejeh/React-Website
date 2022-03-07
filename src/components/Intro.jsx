import React from "react";
import styled from "styled-components";
import Dog from "../img/Dog-2-alvan-nee-brFsZ7qszSY-unsplash.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
	height: calc(100vh - 50px);
	display: flex;
	padding: 20px;

	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;
const Left = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 480px) {
		width: 100%;
		height: 100%;
	}
`;

const Title = styled.h1`
	font-size: 60px;
	width: 60%;

	@media only screen and (max-width: 480px) {
		width: 100%;
		font-size: 50px;
	}
`;

const Desc = styled.p`
	width: 60%;
	font-size: 20px;
	margin-top: 20px;

	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Info = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	align-items: center;

	@media only screen and (max-width: 480px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Button = styled.button`
	padding: 15px;
	background-color: darkblue;
	color: #fff;
	border-radius: 20px;
	font-weight: bold;
	cursor: pointer;
	border: none;
	letter-spacing: 2px;
	@media only screen and (max-width: 480px) {
		margin-bottom: 20px;
	}
`;

const Contact = styled.div`
	display: flex;
	flex-direction: column;
`;

const Phone = styled.span`
	color: tomato;
	font-weight: bold;

	@media only screen and (max-width: 480px) {
		color: crimson;
	}
`;
const ContactText = styled.span`
	color: grey;
	margin-top: 5px;
`;

const Right = styled.div`
	width: 40%;

	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const Image = styled.img`
	width: 100%;
`;

export default function Intro() {
	return (
		<>
			<Container>
				<Left>
					<Title>Adventures in Creative age</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
						magni cum magnam hic quo aspernatur perferendis temporibus modi, ex
						nostrum tempora, nesciunt iste a quam iusto assumenda. Expedita nisi
						inventore numquam molestias optio aperiam itaque, facere quasi id in
						ab unde cum minima.
					</Desc>
					<Info>
						<Button>START A PROJECT</Button>
						<Contact>
							<Phone>Call Us +234 8061234567</Phone>
							<ContactText>For any questions and concerns</ContactText>
						</Contact>
					</Info>
				</Left>
				<Right>
					<Image src={Dog}></Image>
				</Right>
				<AnimatedShapes />
			</Container>
		</>
	);
}
