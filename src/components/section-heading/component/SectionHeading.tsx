import React from "react";
import styled from "styled-components";
import Title from "../../../utils/title/Title";
import { Colors } from "../../../utils/colors/colors";
import P from "../../../utils/p/P";
import SubTitle from "../../../utils/subtitle/SubTitle";

type Props = {
	mainFeature: string;
	title: string;
	description: string;
};

const SectionHeading = (props: Props) => {
	const {  primaryColor, deepDarkGrayColor } = Colors();
	return (
		<SectionHeadingWrapper 
		data-aos="fade-right"
		data-aos-once="true">
			<TitleHeading 
          data-aos="fade-right"
          data-aos-once="true">
				<Title textColor={primaryColor} text={props.mainFeature + " -"} isAnimatable={true} />

				<Title
					textColor={deepDarkGrayColor}
					text={props.title}
					isAnimatable={true}
					style={{
						textAlign: "center",
					}}
				/>
			</TitleHeading>

			<SubTitle
				isAnimatable={true}
				text={props.description}
				textColor={deepDarkGrayColor}
				style={{
					textAlign: "center",
					maxWidth: "800px",
					lineHeight: "30px",
				}}
			/>
		</SectionHeadingWrapper>
	);
};

export default SectionHeading;

const SectionHeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 80px;
`;

const TitleHeading = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;
