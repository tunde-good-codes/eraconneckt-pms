import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../../button/ButtonComponent";
import { ButtonType } from "../../../../types/general.types";
import { Colors } from "../../../colors/colors";
import Title from "../../../title/Title";
import P from "../../../p/P";

type IProps = {
	title: string;
	description: string;
	featureItems: string[];
	demoUrl: string;
};

export default function FeatureModal({ title, description, featureItems, demoUrl }: IProps) {
	const { secondaryColor, deepDarkGrayColor, } = Colors();

	return (
		<ClassModalWrapper 
		data-aos="fade-right"
		data-aos-once="true">
			<TitleWrapper>
				<Title
					textColor={secondaryColor}
					text={title}
					isAnimatable={true}
					style={{
						fontSize:"1.8rem",
						marginBottom: "40px",
						fontWeight: "500",textAlign: "center"
					}}
				/>
			</TitleWrapper>

			<P
				textColor={deepDarkGrayColor}
				text={description}
				isAnimatable={true}
				style={{
					marginBottom: "40px",
				}}
			/>

			<ul>
				{featureItems.map((item, index) => (
					<Li key={index}>{item}</Li>
				))}
			</ul>
			<BtnWrapper>
				<a
					href={demoUrl}
					target="_blank"
					hrefLang="en-us"
					rel="noopener noreferrer"
				
					
					data-aos="fade-right"
					data-aos-once="true"
				>
					<ButtonComponent
						isAnimatable={false}
						text={"SEE A DEMO"}
						hasLine={false}
						buttonType={ButtonType.SECONDARY}
						cName=""
						style={{   }}
						click={() => {}}
						isLoading={false}
					/>
				</a>
			</BtnWrapper>
		</ClassModalWrapper>
	);
}

const ClassModalWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;
	min-width: 100%;
`;
const Li = styled.li`
	font-family: "Poppins", sans-serif;
	font-size: 0.8rem;
	line-height: 1.5rem;
	font-weight: 400;

	@media (min-width: 768px) {
		font-size: 1.2rem;
		line-height: 1.8rem;
	}
`;

const BtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 40px;
	gap: 12px;
`;

const TitleWrapper = styled.div`
	display: flex;
	gap: 8px;
	flex-direction: row;
	align-items: center;
`;
