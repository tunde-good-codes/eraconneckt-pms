import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useExternalMedia } from "../../../hooks/useExternalMedia";
import Left from "./Left";
import styled from "styled-components";

export default function Hero() {
	const { pmsHeroImg } = useExternalMedia();

	return (
		<Container>
			<Row>
				<Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}>
					<Left />
				</Col>
				<Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
					<ImageContainer data-aos="fade-right" data-aos-once="true">
						<img src={pmsHeroImg} alt="Hero" style={{ width: "100%", height: "auto" }} />
					</ImageContainer>
				</Col>
			</Row>
		</Container>
	);
}

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 300px;
	min-width: 300px;
`;
