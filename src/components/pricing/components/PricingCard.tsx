import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../utils/colors/colors";
import Title from "../../../utils/title/Title";
import P from "../../../utils/p/P";
import { useExternalMedia } from "../../../hooks/useExternalMedia";
import ButtonComponent from "../../../utils/button/ButtonComponent";
import { ButtonType } from "../../../types/general.types";

type IProps = {
	package: string;
	headline: string;
	features: string[];
	demoUrl: string;
};

const PricingCard = (props: IProps) => {
	const { primaryColor, offWhite, whiteColor, secondaryColor } = Colors();
	const [mouseEnter, setMouseEnter] = useState(false);
	const { checkedList } = useExternalMedia();
	const primaryButtonClickEvent = () => {
		setMouseEnter(true);
	};
	return (
		<PricingCardWrapper
			onMouseEnter={() => setMouseEnter(true)}
			onMouseLeave={() => setMouseEnter(false)}
			onClick={primaryButtonClickEvent}
			
			data-aos="fade-right"
			data-aos-once="true"
		>
			<P
				textColor={mouseEnter ? primaryColor : secondaryColor}
				text={props.package}
				isAnimatable={true}
				style={{ textAlign: "flex-start" }}
				cName="my-2"
				children=""
			/>
			<Title
				isAnimatable={true}
				textColor={mouseEnter ? whiteColor : primaryColor}
				text={props.headline}
				cName="p-0 m-0"
				style={{fontSize:"1.8rem"}}
			/>

			<ul>
				{props.features.map((item, index) => (
					<Li key={index} 
					data-aos="fade-right"
					data-aos-once="true">
						<Icon src={checkedList} alt="icon" />
						{item}
					</Li>
				))}
			</ul>
			<a href={props.demoUrl} target="_blank" hrefLang="en-us" rel="noopener noreferrer">
				<BtnWrapper>
					<ButtonComponent
						isAnimatable={false}
						text={"BUY NOW"}
						hasLine={false}
						buttonType={mouseEnter? ButtonType.TERTIARY : ButtonType.PRIMARY}
						cName=""
						style={{ width: "100%" }}
						click={() => {}}
						isLoading={false}
					/>
				</BtnWrapper>
			</a>
		</PricingCardWrapper>
	);
};

export default PricingCard;

const PricingCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 50px;
	border-radius: 30px;
	box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease-in-out;
	max-height: 600px;

	cursor: pointer;
	&:hover {
		background: #eb8145;
		color: white;
	}
`;
const Li = styled.li`
	list-style: none;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 10px;
`;

const BtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 40px;
	gap: 12px;
`;
