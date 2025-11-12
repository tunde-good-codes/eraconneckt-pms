import { Container, Col, Row } from "react-bootstrap";
import "./SectionHeader.css";
import SectionHeaderTitle from "./component/Sectionheadertitle";
import SectionHeaderDesc from "./component/SectionheaderDesc";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ISectionHeader } from "../../types/general.types";

const SectionHeader = (props: ISectionHeader) => {
	const isNonMobile = useMediaQuery("(min-width:900px)");
	const titleStyle = {
		fontWeight: 800,
		lineHeight: "100%",
		letterSpacing: "-0.02em",
		maxWidth: `${isNonMobile ? "429px" : ""}`,
	};

	const subtitleStyle = {
		fontWeight: 400,
		fontSize: "18px",
		lineHeight: "140%",
	};

	return (
		<>
			<Container>
				<Row className="mb-5">
					<Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 5 }}>
						<SectionHeaderTitle
							titleText={props.titleText}
							textColor="#BABAC8"
							style={{ ...subtitleStyle, textAlign: "flex-start" }}
							cName="my-2"
						/>
					</Col>

					<Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 7 }}>
						<SectionHeaderDesc descText={props.descText} textColor="#EB8145" style={{ ...titleStyle }} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SectionHeader;
