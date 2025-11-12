import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { useLocation } from "react-router-dom";
import { useLocationPathName } from "../../hooks/useLocationPathName";
import FooterContent from "./components/FooterContent";

export default function Footer() {
	const location = useLocation();

	const useLocationPathNameProps = {
		location,
		limit: 1,
		isFirstLetterUppercased: false,
		searchQuery: "",
	};

	const { path } = useLocationPathName(useLocationPathNameProps);

	return (
	
			<section id="footer" className="footer">
				<Container>
					<Row>
						<Col>
							<FooterContent /> 
						</Col>
					</Row>
				</Container>
			</section>

	);
}
