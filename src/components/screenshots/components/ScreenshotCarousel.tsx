import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { screenshotImgs } from "../../../assets/data/screenshots-images/screenshots";

const ScreenshotCarousel = () => {
	const settings = {
		dots: true, // Show dots for navigation
		infinite: true, // Infinite looping
		speed: 2000, // Transition speed
		slidesToShow: 2, // Default number of slides to show
		slidesToScroll: 1, // Number of slides to scroll at a time
		autoplay: true, // Enable auto-swipe
		autoplaySpeed: 500, // Auto-swipe every 500ms
        pauseOnHover: true, // Pause auto-swipe on hover

		responsive: [
			{
				breakpoint: 1024, // Large screens
				settings: {
					slidesToShow: 2, // Show 2 images on large screens
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768, // Small screens
				settings: {
					slidesToShow: 1, // Show 1 image on small screens
					slidesToScroll: 1,
				},
			},
		],

        appendDots: (dots:any) => <CustomDots>{dots}</CustomDots>, 
		customPaging: () => <CustomDot />
	};

	return (
		<CarouselContainer>
			<Slider {...settings}>
				{screenshotImgs.map((image, index) => (
					<Slide key={index}>
						<img
							src={image}
							alt={`Screenshot ${index + 1}`}
							style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "40px" }}
						/>
					</Slide>
				))}
			</Slider>
		</CarouselContainer>
	);
};

export default ScreenshotCarousel;

// Styled Components
const CarouselContainer = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	padding: 0 20px;
`;

const Slide = styled.div`
	padding: 0 10px; 
`;

const CustomDot = styled.div`
	width: 10px;
	height: 10px;
	background-color: #201f4f; // Default dot color
	border-radius: 50%;
	margin: 0 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	&.slick-active {
		background-color: #eb8145 !important; // Active dot color
	}
`;

const CustomDots = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-top: 20px;

    .slick-active {
		${CustomDot} {
			background-color: #eb8145;
		}
`;
