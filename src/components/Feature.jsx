import React from "react";
import styled from "styled-components";
import Phone from "../img/Phone-flat.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
	display: flex;
	@media only screen and (max-width: 480px) {
		flex-direction: column;
		padding: 30px 20px;
	}
`;

const Left = styled.div`
	width: 50%;
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const Image = styled.img`
	width: 65%;
`;

const Right = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Title = styled.span`
	font-size: 70px;
	@media only screen and (max-width: 480px) {
		font-size: 50px;
	}
`;
const SubTitle = styled.span`
	font-size: 24px;
	font-style: italic;
	color: tomato;
	margin-top: 20px;
`;

const Description = styled.p`
	font-size: 20px;
	color: #777;
	margin-top: 20px;
`;

const Button = styled.button`
	width: 150px;
	border: none;
	padding: 15px 20px;
	margin-top: 20px;
	color: #fff;
	background-color: darkblue;
	border-radius: 20px;
	font-size: 20px;
	cursor: pointer;
`;

export default function Feature() {
	return (
		<>
			<Container>
				<Left>
					<Image src={Phone} />
				</Left>
				<Right>
					<Title>
						<b>Good</b> Design
						<br />
						<b>Good</b> Business
					</Title>
					<SubTitle>We know that good design means good Business</SubTitle>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
						nesciunt architecto nobis commodi, autem ea at dolore quos aperiam,
						sequi neque adipisci facere? Provident repellendus temporibus dicta
						quod adipisci debitis.
					</Description>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ad
						esse.
					</Description>
					<Button>Learn More</Button>
				</Right>
				<AnimatedShapes />
			</Container>
		</>
	);
}
