const path = require("path");
const express = require("express");
const fs = require("fs");

const app = express();

const ROUTES = {
	INDEX: {
		path: "/",
		pageTitle: "The All-in-One Productivity & Business Management Suite",
		pageDescription:
			"you get a fully integrated business management suite that simplifies operations, saves costs, and improves efficiency—without the hassle of switching between different apps.",
		ogURL: `https://eratek.io`,
		ogImage: `https://res.cloudinary.com/bacf/image/upload/v1740864274/ERA-PMS/01_va9kup.png`,
	},
	HOME: {
		path: "/home",
		pageTitle: "The All-in-One Productivity & Business Management Suite",
		pageDescription:
			"you get a fully integrated business management suite that simplifies operations, saves costs, and improves efficiency—without the hassle of switching between different apps.",
		ogURL: `https://eratek.io`,
		ogImage: `https://res.cloudinary.com/bacf/image/upload/v1740864274/ERA-PMS/01_va9kup.png`,
	},
};

// Loop through ROUTES and find a match
for (const routeName in ROUTES) {
	// Check if the requested path matches any route in ROUTES object
	app.get(ROUTES[routeName].path, (req, res) => {
		let pageTitle = ROUTES[routeName].pageTitle;
		let pageDescription = ROUTES[routeName].pageDescription;
		let ogURL = ROUTES[routeName].ogURL;
		let ogImage = ROUTES[routeName].ogImage;

		const raw = fs.readFileSync(pathToIndex);
		const updated = raw.toString().replace(
			"__PAGE_META__",
			`
      <title>${pageTitle}</title>
      <meta name="title" content="${pageTitle}" />
      <meta name="description" content="${pageDescription}" />
      <meta property="og:title" content="${pageTitle}" />
      <meta property="og:url" content="${ogURL}" />
      <meta property="og:description" content="${pageDescription}" />
      <meta property="og:site_name" content="${pageTitle}" />
      <meta property="og:image" content="${ogImage}" />
      <meta property="og:image:secure_url" content="${ogImage}" />
      <meta name="twitter:title" content="${pageTitle}" />
      <meta name="twitter:description" content="${pageDescription}" />
      <meta name="twitter:image" content="${ogImage}" />
      <meta property="twitter:url" content="${ogURL}" />

  `
		);

		res.send(updated);
	});
}

const pathToIndex = path.join(__dirname, "build/index.html");

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "build/index.html")));
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
