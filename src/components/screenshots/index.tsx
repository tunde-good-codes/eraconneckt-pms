import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import ScreenShotHeading from "./components/ScreenShotHeading";
import ScreenshotCarousel from "./components/ScreenshotCarousel";
const Screenshots = () => {

	
	return (
		<Section id="screenshots">
			<Container>
				<ScreenShotHeading />
				<ScreenshotCarousel />
			</Container>
		</Section>
	);
};

export default Screenshots;
const Section = styled.section`
	background-color: #f6f6f6;
	padding: 40px 0;
`;
