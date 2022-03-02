import React from "react";
import styled from "styled-components";

const Square = styled.div`
	width: 60px;
	height: 60px;
	background-color: #4e6bff;
	opacity: 0.7;
	position: absolute;
	top: -60px;
	left: -6opx;
	z-index: -1;
	animation: square 25s linear alternate infinite;

	@keyframes square {
		to {
			transform: translate(100vw, 100vh);
		}
	}
`;
const Circle = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: tomato;
	position: absolute;
	top: 200px;
	left: -100px;
	z-index: -1;
	animation: circle 25s linear alternate infinite;

	@keyframes Circle {
		to {
			transform: translate(100vw, -100vh);
		}
	}
`;

const Rectangle = styled.div`
	width: 70px;
	height: 100px;
	background-color: yellow;
	opacity: 0.5;
	position: absolute;
	top: 400px;
	left: -5opx;
	z-index: -1;
	animation: Rectangle 25s linear alternate infinite;

	@keyframes Rectangle {
		to {
			transform: translate(100vw, -50vh);
		}
	}
`;

export default function AnimatedShapes() {
	return (
		<>
			<Square />
			<Circle />
			<Rectangle />
		</>
	);
}