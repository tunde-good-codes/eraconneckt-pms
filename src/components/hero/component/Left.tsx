import React from "react";
import { Link } from "react-scroll";
import Title from "../../../utils/title/Title";
import { Colors } from "../../../utils/colors/colors";
import ButtonComponent from "../../../utils/button/ButtonComponent";
import { ButtonType } from "../../../types/general.types";
import P from "../../../utils/p/P";

export default function Left() {
	const { primaryColor, deepDarkGrayColor } = Colors();

	return (
		<div
			style={{
				marginBottom: "40px",
			}}
		>
			<Title
				isAnimatable={true}
				textColor={primaryColor}
				text={"The All-in-One Productivity & Business Management Suite"}
				style={{ maxWidth: "500px" }}
			/>

			<P
				textColor={deepDarkGrayColor}
				text={
					"Tired of switching between multiple tools for workforce management, project tracking, client relationships, and finances? ERA-PMS eliminates the need for multiple subscriptions and integrations by bringing everything into a single, seamless platform."
				}
				isAnimatable={true}
				style={{ textAlign: "flex-start", padding: "20px 0" }}
				cName="my-2"
				children=""
			/>

			<Link to={"contact-us"} activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
				<ButtonComponent
					isAnimatable={true}
					text={`See A Demo`}
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
