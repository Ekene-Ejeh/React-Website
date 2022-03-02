import React from "react";
import styled from "styled-components";
import Saitama from "../img/saitama.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
	height: calc(100vh - 50px);
	display: flex;
	padding: 20px;
`;
const Left = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-size: 60px;
	width: 60%;
`;

const Desc = styled.p`
	width: 60%;
	font-size: 20px;
	margin-top: 20px;
`;

const Info = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	align-items: center;
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
`;

const Contact = styled.div`
	display: flex;
	flex-direction: column;
`;

const Phone = styled.span`
	color: tomato;
	font-weight: bold;
`;
const ContactText = styled.span`
	color: grey;
	margin-top: 5px;
`;

const Right = styled.div`
	width: 40%;
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
					<Image src={Saitama}></Image>
				</Right>
				<AnimatedShapes />
			</Container>
		</>
	);
}
