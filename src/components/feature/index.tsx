import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import FeatureHeading from "./components/FeatureHeading";
import FeatureCards from "./components/FeatureCards";

const Features = () => {

	
	return (
		<Section id="features">
			<Container>
				<FeatureHeading />
				<FeatureCards />
			</Container>
		</Section>
	);
};

export default Features;
const Section = styled.section`
    padding: 40px 0;
`;
