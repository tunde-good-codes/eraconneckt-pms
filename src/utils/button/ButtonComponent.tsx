import Button from "react-bootstrap/Button";
import { Colors } from "../colors/colors";
import "./ButtonComponent.css";
import { IButton } from "../../types/general.types";
import Windmill from "react-activity/dist/Windmill";
import ButtonLine from "../../components/button-line/Buttonline";

const ButtonComponent = ({ text, hasLine, style, click, isLoading, buttonType, cName, isAnimatable }: IButton) => {
	const { primaryColor, whiteColor, blackColor, secondaryColor } = Colors();

	return (
		<>
			<Button
				data-aos={isAnimatable ? `fade-up` : ``}
				data-aos-once="true"
				className={`button ${
					buttonType === "PRIMARY"
						? "btn-primary primary-button"
						: buttonType === "SECONDARY"
						? "btn-secondary secondary-button"
						: buttonType === "TERTIARY"
						? "btn-tertiary tertiary-button"
						: ""
				} ${cName && cName}`}
				bsPrefix="btn"
				onClick={click}
				style={{
					...style,
					backgroundColor:
						buttonType === "PRIMARY"
							? secondaryColor
							: buttonType === "SECONDARY"
							? primaryColor
							: buttonType === "TERTIARY"
							? whiteColor
							: primaryColor,
					color:
						buttonType === "PRIMARY"
							? whiteColor
							: buttonType === "SECONDARY"
							? whiteColor
							: buttonType === "TERTIARY"
							? blackColor
							: whiteColor,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					padding: "24px 40px",
					gap: "10px",
					height: "44px",
					borderRadius: "30px",
					borderWidth: "1px",
					borderStyle: "solid",
					borderColor:
						buttonType === "PRIMARY"
							? secondaryColor
							: buttonType === "SECONDARY"
							? primaryColor
							: buttonType === "TERTIARY"
							? blackColor
							: whiteColor,
					flex: "none",
					order: 2,
					flexGrow: 0,
					cursor: isLoading ? "not-allowed" : "pointer",
					fontFamily: "Poppins",
					fontWeight: "500",
					outline: "none",
				}}
				disabled={isLoading}
			>
				{hasLine && !isLoading && (
					<ButtonLine
						lineBackgroundColor={
							buttonType === "PRIMARY"
								? whiteColor
								: buttonType === "SECONDARY"
								? primaryColor
								: buttonType === "TERTIARY"
								? blackColor
								: whiteColor
						}
					/>
				)}
				{isLoading && (
					<Windmill
						color={
							buttonType === "PRIMARY"
								? whiteColor
								: buttonType === "SECONDARY"
								? primaryColor
								: buttonType === "TERTIARY"
								? blackColor
								: whiteColor
						}
					/>
				)}{" "}
				{text}
			</Button>
		</>
	);
};

export default ButtonComponent;
