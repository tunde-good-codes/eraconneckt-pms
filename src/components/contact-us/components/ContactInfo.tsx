import React from "react";
import styled from "styled-components";
import Title from "../../../utils/title/Title";
import { Colors } from "../../../utils/colors/colors";
import P from "../../../utils/p/P";

import {  FaPhone, FaEnvelope, FaHome } from "react-icons/fa";

const ContactInfo = () => {
	const { secondaryColor, whiteColor } = Colors();
	return (
		<ContactInfoWrapper 
		data-aos="fade-right"
		data-aos-once="true">
			<Title
				textColor={secondaryColor}
				text={"Contact Us"}
				isAnimatable={true}
				style={{
					marginBottom: "40px",
				}}
			/>

			<P
				isAnimatable={true}
				text={
					"Reach Out to Us—Whether You Have Questions, Need Assistance, or Just Want to Connect, We're Here to Help and Look Forward to Hearing from You!"
				}
				textColor={whiteColor}
				cName="p-0 m-0"
				style={{
					fontWeight: 500,
					fontSize: "1rem",
					maxWidth:"450px",
				}}
			/>
			<div 
          data-aos="fade-right"
          data-aos-once="true">
				<IconWrapper >
					<IconDiv>
					<FaPhone size={24} color={whiteColor} />

					</IconDiv>
					<Text>(977) 324 644 676 / (800) 123 456 789</Text>
				</IconWrapper>

				<IconWrapper>
					<IconDiv>
					<FaEnvelope size={24} color={whiteColor} />

					</IconDiv>
					<Text>
						<a
							href="mailto:admininfo@email.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: whiteColor }}
						>
							admininfo@email.com
						</a>
					</Text>
				</IconWrapper>
				<IconWrapper>
					<IconDiv>
					<FaHome size={28} color={whiteColor} />

					</IconDiv>
					<Text>No 40 Baria Sreet 133/2 New York City, NY, United States</Text>
				</IconWrapper>
			</div>
		</ContactInfoWrapper>
	);
};

export default ContactInfo;

const ContactInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 80px 40px;
	background-color: #201f4f;
	height: 600px;
	overflow-y: auto;
	
	&::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}

	scrollbar-width: none;
`;

const IconDiv = styled.div`
display:flex;
    justify-content: center;
	align-items: center;
`
const IconWrapper = styled.div`
	display: flex;
	gap: 30px;
	margin: 2rem auto;

`;

const Text = styled.div`
	color: #ffffff;
	font-size: 1.2rem;
	max-width:400px
`;
