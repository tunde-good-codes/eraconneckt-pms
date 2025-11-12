import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Homepage from "./pages/homepage";
import { HOME, INDEX, WILD_CARD } from "./routes/paths.routes";
import "react-activity/dist/library.css";
//import { clarity } from "react-microsoft-clarity";
import Footer from "./components/footer";

// TODO: Update TRACKING_ID to actual ID
// Start Google Analytics Code
const TRACKING_ID = "UA-XXXXX-X"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
// End Google Analytics Code

const queryClient = new QueryClient({});

function App() {
	// constants
	// const MICROSOFT_CLARITY_ID = constants().MICROSOFT_CLARITY_ID;

	useEffect(() => {
		AOS.init({
			delay: 100,
		});
		AOS.refresh();
	}, []);

	// initialize Microsoft Clarity for analytics in prod and non-signed-in users
	// if (ENV === PROD_ENV || !isAuthenticated) {
	// 	clarity.init(MICROSOFT_CLARITY_ID);
	// }

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<SectionStyle />
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={true}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					style={{
						zIndex: "9999999",
					}}
				/>

				<BrowserRouter>
					<Routes>
						<Route path={INDEX} element={<Homepage />} />
						<Route path={HOME} element={<Homepage />} />
						<Route path={WILD_CARD} element={<div>resting</div>} />
					</Routes>

					{/* Render these components below on all pages* */}

					<Footer />
				</BrowserRouter>

				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
}

export default App;

const SectionStyle = createGlobalStyle`
		section {
			max-width: 1920px;
			min-width: 100%;
		}
	`;
