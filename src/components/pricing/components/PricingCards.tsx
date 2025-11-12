import React from "react";
import { Col, Row } from "react-bootstrap";
import { pricingData } from "../../../assets/data/pricing-data/pricingData";
import PricingCard from "./PricingCard";

const PricingCards: React.FC = () => {
	return (
		<Row className="d-flex align-items-center justify-content-center">
			{pricingData.map((pricing) => (
				<Col
					key={pricing.id}
					lg={4}
					md={6}
					sm={12}
					style={{
						margin: "1rem 0",
					}}
				>
					<PricingCard
						package={pricing.package}
						headline={pricing.headline}
						features={pricing.features}
						demoUrl={pricing.demoUrl}
					/>
				</Col>
			))}
		</Row>
	);
};

export default PricingCards;
