/** @format */

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		function handleResize() {
			setIsSmallScreen(window.innerWidth < 640);
		}

		handleResize(); // Call handleResize initially to set the correct initial state
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		// Dynamic import the image
		const importImage = async () => {
			const { default: Image } = await import("next/image");

			// Set isLoaded to true once the image is loaded
			setIsLoaded(true);
		};

		importImage(); // Call the function to start loading the image
	}, []);

	return (
		<>
			{/* use isLoaded to make sure image and content load at the same time */}
			{isLoaded && (
				<>
					<div
						style={{
							zIndex: -1,
							position: "fixed",
							width: "100vw",
							height: "100vh",
							// opacity: isLoaded ? 1 : 0, // Hide the image until it's loaded
							// transition: "opacity 0.1s ease-in-out",
						}}
					>
						<Image
							src='/BG.jpg'
							alt='Image of stairs with leaves leading to town hall'
							layout='fill'
							objectFit='cover'
							priority
						/>
					</div>

					<div className='flex bg-white-opacity-70 w-full justify-center mt-40 sm:justify-start md:justify-start'>
						<div className='flex flex-col mt-10'>
							<div
								className={
									"text-stone-600 text-4xl font-bold pb-8 sm:ml-20 sm:text-5xl md:text-6xl lg:ml-40"
								}
							>
								Deliver Results <br /> for Your Community
							</div>
							<div className='flex pt-9 pb-5 justify-end sm:pr-3'>
								<Link
									href={isSmallScreen ? "/ContactRedirect" : "/contact"}
									target={isSmallScreen ? "_blank" : ""}
								>
									<button
										className={`bg-sky-700 text-yellow-400 font-semibold text-sm py-1 px-4 rounded-full tracking-wider custom-transition hover:bg-sky-800 ${
											isSmallScreen ? "md:py-2 md:px-8 md:text-base" : ""
										}`}
									>
										CONTACT
									</button>
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
			;
		</>
	);
}
