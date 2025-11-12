import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import ExpertsHeading from "./components/ExpertsHeading";
import ExpertsCards from "./components/ExpertsCards";

const Experts = () => {
	
	return (
		<Section id="experts">
			<Container>
				<ExpertsHeading />
				<ExpertsCards />
			</Container>
		</Section>
	);
};

export default Experts;
const Section = styled.section`
    padding: 40px 0;
`;
