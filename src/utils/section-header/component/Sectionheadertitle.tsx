import useMediaQuery from "../../../hooks/useMediaQuery";
import Title from "../../title/Title";

type Props = {
	titleText: string;
	textColor: string;
	style: {};
	cName?: string;
};

const SectionHeaderTitle = (props: Props) => {
	const isNonMobile = useMediaQuery("(min-width:900px)");

	const titleStyle = {
		maxWidth: `${isNonMobile ? "429px" : ""}`,
	};

	return (
		<>
			<Title text={props.titleText} isAnimatable={true} textColor="#EB8145" style={{ ...titleStyle }} />
		</>
	);
};

export default SectionHeaderTitle;
