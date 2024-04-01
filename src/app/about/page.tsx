/** @format */
"use client";
import React from "react";
import Image from "next/image";
import LinkedLogo_hover from "../_ui/linkedLogo_hover";

export default function About() {
	return (
		<div className='container flex justify-center items-center h-full'>
			<div className='flex flex-col mt-40 w-2/3 md:flex-row'>
				{" "}
				{/* need to adjust size above */}
				<Image
					src='/Profile_image.jpg'
					width={375}
					height={375}
					alt='Picture of the Eric Jackson'
					className='object-cover h-full'
				/>
				<div className='flex flex-col ml-6'>
					<h1 className='text-stone-600 text-5xl font-semibold uppercase tracking-wider'>
						About Eric Jackson
					</h1>
					<p className='text-stone-600 mt-5 text-xl tracking-wider text-left'>
						Eric Jackson is a 35-year technology industry veteran who has worked
						in technical and executive roles in scientific research and
						computing, enterprise software, and, most recently, municipal
						government and community organizing. The constant through all these
						endeavors has been the use of data to develop insights, make
						decisions, and support accountability.
					</p>
					<LinkedLogo_hover />
				</div>
			</div>
		</div>
	);
}
