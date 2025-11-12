import React from "react";
import { Link } from "react-scroll";
import { Colors } from "../../../utils/colors/colors";
import ButtonComponent from "../../../utils/button/ButtonComponent";
import { ButtonType } from "../../../types/general.types";
import SubTitle from "../../../utils/subtitle/SubTitle";
import P from "../../../utils/p/P";

export default function AboutUsDetails() {
	const { primaryColor, secondaryColor, offWhite } = Colors();

	return (
		<div>
			<P
				textColor={primaryColor}
				text={"Our Story Our Strength "}
				isAnimatable={true}
				style={{
					margin: "0",
					display: "inline",
					fontSize: "24px",
				}}
			/>
			<div
				style={{
					display: "flex",
					gap: "12px",
					flexWrap: "wrap",
					textAlign: "left",
				}}

				
				data-aos="fade-right"
				data-aos-once="true"
			>
				<SubTitle
					isAnimatable={true}
					text={"About Us - "}
					textColor={secondaryColor}
					cName="my-2"
					children=""
					style={{
						lineHeight: "1.5rem",
					}}
				/>{" "}
				<SubTitle
					isAnimatable={true}
					text={"What We Believe"}
					textColor={secondaryColor}
					cName="my-2"
					children=""
					style={{
						lineHeight: "1.5rem",
						fontSize: "1.2rem",
					}}
				/>
			</div>
			<P
				isAnimatable={true}
				textColor={offWhite}
				text={
					"With ERA-PMS, you get a fully integrated business management suite that simplifies operations, saves costs, and improves efficiency—without the hassle of switching between different apps. Whether you’re a small business, a growing startup, or an established enterprise, ERA-PMS provides the tools you need to stay organized, boost efficiency, and scale effortlessly"
				}
				style={{ maxWidth: "500px", padding: "30px 0" }}
			/>

			<Link to={"contact-us"} activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
				<ButtonComponent
					isAnimatable={true}
					text={`Contact Us`}
					hasLine={false}
					buttonType={ButtonType.PRIMARY}
					cName="my-2"
					click={() => {}}
					style={{}}
					isLoading={false}
				/>
			</Link>
		</div>
	);
}
