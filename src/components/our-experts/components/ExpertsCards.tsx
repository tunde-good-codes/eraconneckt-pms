import React from "react";
import { Col, Row } from "react-bootstrap";
import ExpertCard from "./ExpertCard";
import { expertsData } from "../../../assets/data/experts-data/expertData";

const ExpertsCards: React.FC = () => {
	return (
		<Row className="justify-content-center">
			{expertsData.map((expert) => (
				<Col key={expert.id} lg={3} md={6} sm={12} className="d-flex justify-content-center">
					<ExpertCard
						imgSrc={expert.imgSrc}
						name={expert.name}
						role={expert.name}
						facebookLink={expert.facebookLink}
						twitterLink={expert.twitter}
						instagramLink={expert.instagram}
						linkedinLink={expert.linkedln}
					/>
				</Col>
			))}
		</Row>
	);
};

export default ExpertsCards;
