import React from "react";
import styled from "styled-components";
import Phone from "../img/Phone-Call.jpg";

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	width: 50%;
`;

const Image = styled.img`
	width: 70%;
`;

const Right = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Title = styled.span`
	font-size: 70px;
`;
const SubTitle = styled.span`
	font-size: 24px;
	font-style: italic;
	color: tomato;
`;

const Description = styled.p``;

const Button = styled.button``;

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
						quod adipisci debitis, rerum voluptatum assumenda dolore suscipit
						modi? Totam laudantium, reiciendis libero sint voluptas, dolores,
						excepturi impedit rem delectus beatae adipisci exercitationem?
					</Description>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ad
						esse. Totam officia tempora aspernatur placeat, ratione veniam cum!
						Id incidunt veniam assumenda nobis eaque, totam odio nam facere at.
					</Description>
					<Button>Learn More</Button>
				</Right>
			</Container>
		</>
	);
}
