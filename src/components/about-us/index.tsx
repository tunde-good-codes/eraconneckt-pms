import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutUsDetails from "./components/AboutUsDetails";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import styled from "styled-components";

export default function AboutUs() {
	const { aboutUsImg } = useExternalMedia();

	return (
		<Section id="about-us">
			<Container>
				<Row>
					<Col
						xs={{ span: 12, order: 2 }}
						md={{ span: 12, order: 2 }}
						lg={{ span: 6, order: 1 }}
						className="d-flex align-items-center"
					>
						<AboutUsDetails />
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
						<ImageContainer data-aos="fade-right" data-aos-once="true">
							<img src={aboutUsImg} alt="About Us" style={{ width: "100%", height: "auto" }} />
						</ImageContainer>
					</Col>
				</Row>
			</Container>
		</Section>
	);
}

const Section = styled.section`
	background-color: #f6f6f6;
	padding: 40px 0;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 300px;
	min-width: 300px;
	margin-bottom: 40px;
`;
