import React from "react";
import styled from "styled-components";
import Dog from "../img/Dog-3-peri-stojnic-5Vr_RVPfbMI-unsplash.jpg";

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	width: 50%;
`;

const Image = styled.img`
	width: 62%;
	margin-left: 25px;
`;

const Right = styled.div`
	width: 50%;
`;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1``;
const Description = styled.p`
	font-size: 20px;
	margin-top: 20px;
	color: #555;
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
`;

export default function Service() {
	return (
		<>
			<Container>
				<Left>
					<Image src={Dog} />
				</Left>
				<Right>
					<Wrapper>
						<Title>Simple Process to Start</Title>
						<Description>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Incidunt, est! Ipsum numquam architecto eligendi adipisci expedita
							dolorum voluptatibus exercitationem, quis, fuga nemo soluta illum
							earum molestiae quasi, repellendus cum harum voluptatum provident
							aliquid consequuntur voluptate aut maxime! Saepe, tempora enim
							veniam inventore velit similique iusto quis architecto, quas animi
							totam?
						</Description>
						<CardContainer></CardContainer>
					</Wrapper>
				</Right>
			</Container>
		</>
	);
}
