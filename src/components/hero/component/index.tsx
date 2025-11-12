import styled from "styled-components";
import NavbarSession from "../../header/components";
import Hero from "./Hero";

export default function HeroSession() {
	return (
		<Section id="">
			<NavbarSession />
			<Hero />
		</Section>
	);
}

const Section = styled.section`
	background-color: #f6f6f6;
	padding: 40px 0;
`;
