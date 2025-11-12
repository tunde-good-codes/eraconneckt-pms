import React, { useState } from "react";
import { faqsData } from "../../../assets/data/faqs-data/faqsData";
import styled, { keyframes } from "styled-components";
import { Colors } from "../../../utils/colors/colors";

const FAQComponent = () => {
	const [activeId, setActiveId] = useState<number | null>(null); // Track active question
	const [hoveredId, setHoveredId] = useState<number | null>(null); // Track hovered question
	const { secondaryColor, primaryColor } = Colors();

	const toggleAnswer = (id: number) => {
		setActiveId((prevId) => (prevId === id ? null : id)); // Toggle answer visibility
	};

	const handleMouseEnter = (id: number) => {
		setHoveredId(id); // Set hover state for the specific question
	};

	const handleMouseLeave = () => {
		setHoveredId(null); // Reset hover state
	};

	return (
		<FAQContainer>
			{faqsData.map(({ id, question, answer }) => (
				<FAQItem key={id} 
				data-aos="fade-right"
				data-aos-once="true">
					<Question
						onClick={() => toggleAnswer(id)}
						onMouseEnter={() => handleMouseEnter(id)}
						onMouseLeave={handleMouseLeave}
						style={{
							color: activeId === id || hoveredId === id ? secondaryColor : primaryColor, // Change color for active or hovered question
						}}
					>
						<Icon active={activeId === id}>💬</Icon> {/* Custom icon */}
						{question}
					</Question>
					{activeId === id && (
						<div className=" py-2 px-5">
							<Answer dangerouslySetInnerHTML={{ __html: answer }} />
						</div>
					)}
				</FAQItem>
			))}
		</FAQContainer>
	);
};

export default FAQComponent;

// Styled Components
const FAQContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
`;

const FAQItem = styled.div`
	margin-bottom: 20px;
	border-bottom: 1px solid #ddd;
	padding-bottom: 10px;
`;

const Question = styled.div`
	font-size: 18px;
  font-family: "Poppins", sans-serif;
	font-weight: bold;
	color: #201f4f;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 10px; /* Space between icon and text */
	transition: color 0.3s ease;

	&:hover {
		color: #eb8145;
	}
	&:active {
		color: #eb8145;
	}
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Icon = styled.span<{ active: boolean }>`
	font-size: 20px;
	transition: color 0.3s ease, transform 0.3s ease;
`;
const Answer = styled.div`
	font-size: 16px;
	color: #555;
	line-height: 1.6;

	ul {
		list-style: none; /* Remove default bullets */
		padding-left: 0; /* Remove default padding */
	}

	li {
		position: relative;
		padding-left: 25px; /* Add space for the custom icon */
		margin-bottom: 10px;
        font-size:1rem;
	}

	li::before {
		content: "⭐"; /* Red pin icon (Unicode) */
		position: absolute;
		left: 0;
		color: red; /* Make the icon red */
		font-size: 16px;
	}
`;
