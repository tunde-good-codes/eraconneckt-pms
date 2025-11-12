import React from "react";
import { featureCardData } from "../../../assets/data/feature-card-data/featureCardData";
import FeatureCard from "./FeatureCard";
import { Col, Row } from "react-bootstrap";

const FeatureCards: React.FC = () => {
	return (
		<Row className="justify-content-center">
				{featureCardData.map((featureCard) => (
					<Col
						key={featureCard.id}
						lg={4}
						md={6}
						sm={12}
						className="d-flex justify-content-center"
					>
						<FeatureCard
							icon={featureCard.icon}
							title={featureCard.title}
							description={featureCard.description}
							featureItems={featureCard.featureItems}
							demoUrl={featureCard.demoUrl}
						/>
					</Col>
				))}
			</Row>
	);
};

export default FeatureCards;
