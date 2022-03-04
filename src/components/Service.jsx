import React, { useState } from "react";
import styled from "styled-components";
import Dog from "../img/Dog-3-peri-stojnic-5Vr_RVPfbMI-unsplash.jpg";
import Play from "../img/play.png";
import MiniCard from "./MiniCard";

const Container = styled.div`
	display: flex;
	height: 100%;
`;

const Left = styled.div`
	width: 50%;
	position: relative;
`;

const Image = styled.img`
	display: ${(props) => props.open && "none"};
	width: 62%;
	margin-left: 25px;
`;

const Video = styled.video`
	display: ${(props) => !props.open && "none"};
	height: 300px;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
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

const Button = styled.button`
	width: 180px;
	border: none;
	border-radius: 12px;
	background-color: darkblue;
	color: #fff;
	font-size: 20px;
	padding: 15px;
	margin-top: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	width: 20px;
	margin-right: 10px;
`;

export default function Service() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Container>
				<Left>
					<Image open={open} src={Dog} />
					<Video
						open={open}
						autoPlay
						loop
						controls
						src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
					/>
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
						<CardContainer>
							<MiniCard />
							<MiniCard />
							<MiniCard />
						</CardContainer>
						<Button onClick={() => setOpen(true)}>
							<Icon src={Play} />
							How it Works
						</Button>
					</Wrapper>
				</Right>
			</Container>
		</>
	);
}
