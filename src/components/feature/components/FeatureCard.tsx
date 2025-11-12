import { useState } from "react";
import { Colors } from "../../../utils/colors/colors";
import P from "../../../utils/p/P";
import Title from "../../../utils/title/Title";
import { useModal } from "../../../hooks/useModal";
import styled from "styled-components";
import Modal from "../../../hooks/modal/Modal";
import { useTruncate } from "../../../hooks/usetruncate";
import FeatureModal from "../../../utils/modals/components/feature-modal/FeatureModal";

type IProps = {
	icon: string;
	title: string;
	description: string;
	featureItems: string[];
	demoUrl: string;
};

const FeatureCard = ({ icon, title, description, featureItems, demoUrl }: IProps) => {
	const { primaryColor, offWhite, whiteColor } = Colors();
	const [mouseEnter, setMouseEnter] = useState(false);

	const { open, openModal, closeModal } = useModal();

	const primaryButtonClickEvent = () => {
		setMouseEnter(true);
		openModal();
	};
	return (
		<>
			<Card
			
			data-aos="fade-right"
			data-aos-once="true"
				onMouseEnter={() => setMouseEnter(true)}
				onMouseLeave={() => setMouseEnter(false)}
				onClick={primaryButtonClickEvent}
			>
				<img src={icon} alt={title} />

				<Title
					isAnimatable={true}
					textColor={mouseEnter ? whiteColor : primaryColor}
					text={title}
					style={{ fontSize: "1.5rem", }}
					cName="p-0 m-0"
				/>

				<P
					textColor={mouseEnter ? whiteColor : offWhite}
					text={useTruncate(description, 200)}
					isAnimatable={true}
					style={{ textAlign: "flex-start" }}
					cName="my-2"
					children=""
				/>
			</Card>

			<Modal
				open={open}
				openModal={openModal}
				closeModal={closeModal}
				children={
					<FeatureModal title={title} description={description} featureItems={featureItems} demoUrl={demoUrl} />
				}
			/>
		</>
	);
};

export default FeatureCard;

const Card = styled.div`
	display: flex;
	max-width: 400px;
	height: 450px;
	min-height: 450px;
	max-height: 450px;
	padding: 30px 20px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: #ffffff;
	margin: 1rem 0;
	cursor: pointer;
	&:hover {
		background: #eb8145;
		color: white;
	}
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04),
		0px 16px 24px 0px rgba(0, 0, 0, 0.06);
`;
