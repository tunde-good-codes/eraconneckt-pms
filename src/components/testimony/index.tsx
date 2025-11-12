import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import TestimonyHeading from "./components/TestimonyHeading";
import TestimonyCards from "./components/TestimonyCards";

const Testimonials = () => {
	
	return (
		<Section id="testimonials">
			<Container>
				<TestimonyHeading/>
				<TestimonyCards/>
			</Container>
		</Section>
	);
};

export default Testimonials;
const Section = styled.section`
    padding: 40px 0;
`;
