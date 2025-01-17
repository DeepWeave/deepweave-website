/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Arial", "sans-serif"],
			},
			container: {
				center: true,
			},
			backgroundColor: {
				"white-opacity-70": "rgba(255, 255, 255, 0.70)",
				"sky-tint": "#3587b3",
				"sky-tint-light": "#4e96bd",
				"sky-bg": "#e6fof6",
			},
		},
	},
	plugins: [],
};


export default config;
