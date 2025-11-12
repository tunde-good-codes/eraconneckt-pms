import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "../../../assets/data/testimonials-data/testimonialData";
import TestimonyCard from "./TestimonyCard";
import styled from "styled-components";

const TestimonyCards = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	// Carousel settings
	const settings = {
		dots: true, // Show dots for navigation
		infinite: true, // Infinite looping
		speed: 4000, // Transition speed
		slidesToShow: 3, // Default number of slides to show
		slidesToScroll: 1, // Number of slides to scroll at a time
		autoplay: true, // Enable auto-swipe
		autoplaySpeed: 500, // Auto-swipe every 500ms
		pauseOnHover: true, // Pause auto-swipe on hover
		beforeChange: (_current: number, next: number) => setActiveSlide(next), // Track active slide
		responsive: [
			{
				breakpoint: 1024, // Large screens
				settings: {
					slidesToShow: 3, // Show 3 testimonies on large screens
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768, // Medium screens
				settings: {
					slidesToShow: 2, // Show 2 testimonies on medium screens
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480, // Small screens
				settings: {
					slidesToShow: 1, // Show 1 testimony on small screens
					slidesToScroll: 1,
				},
			},
		],
        appendDots: (dots:any) => <CustomDots>{dots}</CustomDots>, 
		customPaging: () => <CustomDot />
	};

	return (
		<div style={{ margin: "0 auto", maxWidth: "1200px", padding: "0 20px" }}>
			<Slider {...settings}>
				{testimonialData.map((testimony, index) => (
					<div key={testimony.id}>
						<TestimonyCard
							name={testimony.name}
							company={testimony.company}
							role={testimony.role}
							testimony={testimony.testimony}
							isActive={index === activeSlide} // Pass active state to TestimonyCard
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default TestimonyCards;

const CustomDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: #201f4f; // Default dot color
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top:40px;
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
