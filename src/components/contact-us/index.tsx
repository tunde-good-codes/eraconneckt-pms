import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import styled from "styled-components";

const ContactUs = () => {

	
	return (
		<Section id="contact-us">
			<Container>
				<Row>
					<Col
						xs={{ span: 12, order: 2 }}
						md={{ span: 12, order: 2 }}
						lg={{ span: 6, order: 1 }}
						className="d-flex justify-content-center align-items-center"
					>
						<ContactInfo />
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</Section>
	);
};

export default ContactUs;
const Section = styled.section`
	background-color: #f6f6f6;
	padding: 40px 0;
`;
