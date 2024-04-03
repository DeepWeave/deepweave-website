/** @format */

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_ui/navbar";
import Home from "./page";

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
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link
					rel='apple-touch-icon'
					href='/apple-icon?<generated>'
					type='image/<generated>'
					sizes='<generated>'
				/>
			</head>
			<body className='m-0 p-0'>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
