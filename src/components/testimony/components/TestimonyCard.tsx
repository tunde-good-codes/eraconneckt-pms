import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../utils/colors/colors";

type Props = {
	name: string;
	testimony: string;
	company: string;
	role: string;	isActive: boolean; // Add isActive prop

};

const TestimonyCard = ({ name, testimony, company, role,isActive }: Props) => {
	const [mouseEnter, setMouseEnter] = useState(false);
	const { primaryColor, secondaryColor, whiteColor, blackColor } = Colors();
	const primaryButtonClickEvent = () => {
		setMouseEnter(true);
	};
	return (
		<TestimonyWrapper
			onMouseEnter={() => setMouseEnter(true)}
			onMouseLeave={() => setMouseEnter(false)}
			onClick={primaryButtonClickEvent}
		>
			<TestimonialBox
				style={{
					backgroundColor: mouseEnter || isActive? primaryColor : "#f6f6f6",
					color: mouseEnter || isActive ? whiteColor : blackColor,
				}}
			>
				{testimony}
			</TestimonialBox>
			<TestimonyDetail>
				<Text>{name}</Text>
				<Text
					style={{
						color: secondaryColor,
					}}
				>
					{role} - {company}{" "}
				</Text>
			</TestimonyDetail>
		</TestimonyWrapper>
	);
};

export default TestimonyCard;

const TestimonialBox = styled.div`
	background-color: #f6f6f6;
  font-family: "Poppins", sans-serif;
	padding: 20px;
	border-radius: 80px; // Rounded edges on all sides
	width: 350px; // Increased width
	height: 300px; // Increased height
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 40px;
	clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 22% 76%, 43% 89%, 3% 76%, 0% 75%);
	margin: 2rem 0;
`;
const Text = styled.p`
	font-size: 16px;
	font-weight: 700;
	color: #333;
  font-family: "Poppins", sans-serif;
	margin: 0;
	padding: 0;
`;
const TestimonyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;
`;
const TestimonyDetail = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 12px;
	margin-top: -80px;
`;
