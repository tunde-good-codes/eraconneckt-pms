import React, { useState } from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

type IProps = {
	imgSrc: string;
	name: string;
	role: string;
	facebookLink: string;
	twitterLink: string;
	instagramLink: string;
	linkedinLink: string;
};

const ExpertCard = ({ imgSrc, role, name, facebookLink, twitterLink, instagramLink, linkedinLink }: IProps) => {
	const [isHovered, setIsHovered] = useState(false); // Track hover state

	return (
		<ExpertCardWrapper
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			data-aos="fade-right"
			data-aos-once="true"
		>
			<ExpertCardImageContainer>
				<ExpertCardImage src={imgSrc} alt={name} />
				{isHovered && (
					<Overlay>
						<SocialIcons data-aos="fade-right" data-aos-once="true">
							{facebookLink && (
								<SocialIcon href={facebookLink} target="_blank" rel="noopener noreferrer">
									<FaFacebook size={20} /> {/* Facebook icon */}
								</SocialIcon>
							)}
							{twitterLink && (
								<SocialIcon href={twitterLink} target="_blank" rel="noopener noreferrer">
									<FaTwitter size={20} /> {/* Twitter icon */}
								</SocialIcon>
							)}
							{instagramLink && (
								<SocialIcon href={instagramLink} target="_blank" rel="noopener noreferrer">
									<FaInstagram size={20} /> {/* Instagram icon */}
								</SocialIcon>
							)}
							{linkedinLink && (
								<SocialIcon href={linkedinLink} target="_blank" rel="noopener noreferrer">
									<FaLinkedin size={20} /> {/* LinkedIn icon */}
								</SocialIcon>
							)}
						</SocialIcons>
					</Overlay>
				)}
			</ExpertCardImageContainer>
			<ExpertCardDetails data-aos="fade-right" data-aos-once="true">
				<NameText>{name}</NameText>
				<RoleText>{role}</RoleText>
			</ExpertCardDetails>
		</ExpertCardWrapper>
	);
};

export default ExpertCard;

// Styled Components
const ExpertCardWrapper = styled.div`
	height: 470px;
	width: 300px;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border: 1px solid #ddd;
	box-sizing: border-box;
	cursor: pointer;
	margin: 1rem 0;
	box-shadow: 0px 0px 5px 5px rgba(15, 9, 128, 0.035), 5px 12px 30px 5px rgba(15, 9, 128, 0.05);
	-webkit-box-shadow: 0px 0px 5px 5px rgba(15, 9, 128, 0.035), 5px 12px 30px 5px rgba(15, 9, 128, 0.05);
`;

const ExpertCardImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 370px;
`;

const ExpertCardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px 5px 0 0;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(32, 31, 79, 0.8); /* Custom blue (#201f4f) with 80% opacity */
	display: flex;
	align-items: flex-end;
	justify-content: center;
	border-radius: 5px 5px 0 0;
`;

const SocialIcons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	gap: 10px;
	margin-bottom: 20px;
`;

const SocialIcon = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	background-color: transparent;
	border: 2px solid white;
	border-radius: 50%;
	transition: background-color 0.3s ease;
	color: white; /* Icon color */

	&:hover {
		background-color: rgba(255, 255, 255, 0.2); /* Light background on hover */
	}
`;

const ExpertCardDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 20px;
`;

const NameText = styled.h3`
	font-size: 20px;
	font-weight: 500;
	line-height: 30px;
	color: #383838;
	font-family: "Poppins", sans-serif;
`;

const RoleText = styled.p`
	font-size: 14px;
	text-transform: capitalize;
	line-height: 20px;
	color: #383838;
	font-family: "Poppins", sans-serif;
`;
