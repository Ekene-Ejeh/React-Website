import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const PriceContainer = styled.div``;
const Price = styled.div``;
const Type = styled.div``;
const List = styled.div``;
const ListItem = styled.div``;
const Button = styled.div``;

export default function PriceCard() {
	return (
		<>
			<Container>
				<PriceContainer>
					$<Price>20</Price>/month
					<Type>Basic Plan</Type>
					<List>
						<ListItem>200 Hand-Crafted templates</ListItem>
						<ListItem>Exclusive Support</ListItem>
						<ListItem>50+ Prebuilt Websites</ListItem>
						<ListItem>Premium Plugins</ListItem>{" "}
					</List>
					<Button>Join Now</Button>
				</PriceContainer>
			</Container>
		</>
	);
}
