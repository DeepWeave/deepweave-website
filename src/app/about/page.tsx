/** @format */
"use client";
import React from "react";
import Image from "next/image";
import LinkedLogo_hover from "../_ui/linkedLogo_hover";

export default function About() {
	return (
		<div className='container flex justify-center items-center h-full sm:px-10rem'>
			<div className='flex flex-col justify-center items-center mt-10 md:mt-40 md:flex-row md:pl-5 md:mr-5'>
				<Image
					src='/Profile_image.jpg'
					width={270}
					height={270}
					alt='Picture of the Eric Jackson'
					className='object-cover h-full mx-auto md:mx-0 md:w-300px md:h-300px'
				/>
				<div className='flex flex-col items-center md:ml-5 md:items-start'>
					<h1 className='text-stone-600 text-2xl font-semibold uppercase tracking-wider text-center mt-3 sm:text-3xl md:text-left md:w-full lg:text-4xl'>
						About Eric Jackson
					</h1>
					<p className='text-stone-600 mt-5 text-center tracking-wider px-20 md:text-left md:px-0 md:w-full'>
						 I am an independent researcher, community organizer, and consultant interested
						 in how we create a just community where everyone thrives. I have worked for
						 nearly 40 years in technical and executive roles in scientific research and
						 computing, enterprise software, and, most recently, municipal government and
						 community organizing. One constant throughout has been the use of data to
						 develop insights, make decisions, and support accountability.
					</p>
					<p className='text-stone-600 mt-5 italic text-center tracking-wider px-20 md:text-left md:px-0 md:w-full'>
						For regular reflections, stories, observations, and explorations of others’
						wisdom about building resilient and just systems, check out my newsletter,%20 
						<a href="https://deepweave.substack.com/" target="_blank" rel='noopener noreferrer'>
							<span className='text-sky-700 italic font-semibold tracking-wider underline underline-offset-2 mt-3 hover:text-sky-800'>
								Resilient Change
							</span>
						</a>.
					</p>

					<LinkedLogo_hover />
				</div>
			</div>
		</div>
	);
}
