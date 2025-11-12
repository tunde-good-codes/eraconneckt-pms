import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { clsx } from "clsx";
import useAnalyticsEventTracker from "../../../../../../hooks/useAnalyticsEventTracker";
import { useExport } from "../../../../../../hooks/useExport";
import { HOME } from "../../../../../../routes/paths.routes";
import { unAuthenticatedNavLinks } from "../../../../../../assets/data/navigation-data/navLinks";
import navbarCloseIcon from "../../../../../../assets/images/icons/navbar-close.svg";
import navbarOpenIcon from "../../../../../../assets/images/icons/navbar-open.svg";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll's Link

export default function NavbarComponent() {
	const location = useLocation();
	const gaEventTracker = useAnalyticsEventTracker("Navbar links");
	const [isMobileNavShown, setIsMobileNavShown] = useState(false);

	const { logoPms } = useExport();

	const handleNavbarToggle = function () {
		setIsMobileNavShown(!isMobileNavShown);
	};

	const [scrolled, setScrolled] = useState(false);
	document.addEventListener("scroll", () => (window.scrollY > 100 ? setScrolled(true) : setScrolled(false)));

	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				className={clsx("navbar", {
					scrolled: scrolled,
				})}
			>
				<Container
					style={{
						padding: "10px 0",
					}}
				>
					<Navbar.Brand
						href={HOME}
						style={{
							marginLeft: "8px",
						}}
					>
						<img src={logoPms} alt="ERATEK-PMS logo" />
					</Navbar.Brand>

					<Navbar.Toggle
						className={clsx("toggler-styles", {
							collapsed: !isMobileNavShown,
						})}
						aria-controls="responsive-navbar-nav"
						onClick={handleNavbarToggle}
						type="button"
						data-toggle="collapse"
						data-target="#navbarDefault"
						aria-expanded={isMobileNavShown ? "true" : "false"}
						aria-label="Toggle Navbar"
						style={{
							outline: "none",
							border: "0",
						}}
					>
						{isMobileNavShown ? (
							<span
								style={{
									backgroundImage: `url(${navbarCloseIcon})`,
								}}
								className="navbar-toggler-icon close"
							></span>
						) : (
							<span
								style={{
									backgroundImage: `url(${navbarOpenIcon})`,
								}}
								className="navbar-toggler-icon open"
							></span>
						)}
					</Navbar.Toggle>

					<Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
						<Nav className="navbar-nav navbar-right align-items-baseline">
							{/* Navigation links */}
							{unAuthenticatedNavLinks?.map((navLink) => {
								const hash = `#${navLink.path}`; // Convert path to hash
								return (
									<React.Fragment key={navLink?.id}>
										<Nav.Link
											as={ScrollLink} // Use react-scroll's Link
											to={navLink.path} // Target section ID
											smooth={true} // Enable smooth scrolling
											offset={-80} // Adjust for navbar height
											duration={500} // Scroll duration
											spy={true} // Enable active state on scroll
											hashSpy={true} // Enable hash-based active state
											className={`nav-links-styles ${location.hash === hash ? "active" : ""}`} // Active state
											onClick={() => gaEventTracker(`${navLink?.name}`)}
										>
											{navLink.name}
										</Nav.Link>
									</React.Fragment>
								);
							})}
							{/* /Navigation links */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
