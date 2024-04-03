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
			screens: {
				widescreen: { raw: "(min-aspect-ratio:3/2" },
				tallscreen: { raw: "(min-aspect-ratio:13/20" },
			},
			container: {
				center: true,
			},
			backgroundColor: {
				"white-opacity-50": "rgba(255, 255, 255, 0.5)",
			},
		},
	},
	plugins: [],
};
export default config;
