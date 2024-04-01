/** @format */

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_ui/navbar";

export const metadata: Metadata = {
	title: "DeepWeave",
	description: "DeepWeave",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='apple-touch-icon'
					href='/apple-icon?<generated>'
					type='image/<generated>'
					sizes='<generated>'
				/>
			</head>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
