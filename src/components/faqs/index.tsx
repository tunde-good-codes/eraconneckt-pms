import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import FAQComponent from "./component/FaqsSection";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import FaqsHeading from "./component/Faqsheading";

export default function Faqs() {
	const { faqImage } = useExternalMedia();

	return (
		<Section id="faqs">
			<Container>
				<FaqsHeading />
				<Row>
					<Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }}>
						<FAQComponent />
					</Col>
					<Col
						xs={{ span: 12, order: 1 }}
						md={{ span: 12, order: 1 }}
						lg={{ span: 5, order: 2 }}
						className="d-flex align-items-center"
					>
						<ImageContainer data-aos="fade-right" data-aos-once="true">
							<img src={faqImage} alt="About Us" style={{ width: "100%", height: "auto" }} />
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
