import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import PricingHeading from "./components/PricingHeading";
import PricingCards from "./components/PricingCards";


const Pricing = () => {
	return (
		<Section id="pricing">
			<Container>
				<PricingHeading />
				<PricingCards />
			</Container>
		</Section>
	);
};

export default Pricing;
const Section = styled.section`
    padding: 40px 0;
`;
