import { useEffect, useState } from "react";
import Features from "../../components/feature";
import HeroSession from "../../components/hero/component";
import AboutUs from "../../components/about-us";
import Pricing from "../../components/pricing";
import Newsletters from "../../components/newsletter/Newsletter";
import Screenshots from "../../components/screenshots";
import Testimonial from "../../components/testimony";
import Faqs from "../../components/faqs";
import Experts from "../../components/our-experts";
import ContactUs from "../../components/contact-us";

export default function Homepage() {
	const [title, setTitle] = useState(`Welcome: Era-Pms`);

	useEffect(() => {
		document.title = title;

		setTitle(`Welcome: Era-Pms`);
	}, [title]);
	return (
		<>
			<HeroSession />
			<Features />
			<AboutUs />
			<Pricing />
			<Newsletters />
			<Screenshots />
			<Testimonial />
			<Faqs />
			<Experts />
			<ContactUs />
		</>
	);
}
