/** @format */

import React from "react";
import { serviceObjects } from "../data";
import Link from "next/link";

function articleTitle (title: string, href: string) {
	let result;
	if (href !== "") {
		result = (
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
			>
				<h2 className='text-sky-700 text-xl italic font-semibold tracking-wider underline underline-offset-2 mt-3 hover:text-sky-800'>
					{title}
				</h2>
			</a>
		)
	} else {
		result = (
			<h2 className='text-stone-600 text-xl italic font-semibold tracking-wider mt-3'>
				{title}
			</h2>
		);
	}
	return result;
}

export default function Services() {
	return (
		<>
			<div className='container flex justify-center items-center h-full px-10 mb-10'>
				<div className='flex flex-col justify-center items-center mt-10 md:mt-40'>
					<h2 className='text-stone-600 text-3xl font-semibold uppercase tracking-wider text-center mt-3 md:text-left md:w-full lg:text-4xl'>
						Services
					</h2>
					<p className='text-stone-600 mt-5 text-center tracking-wider italic w-3/4 text-xl md:text-left md:w-full'>
						DeepWeave offers support for nonprofits, and their funding partners, in impact planning,
						implementation, and evaluation in service of building a resilient community.

					</p>
					{/* Blocks with services listed */}

					<div
						className='flex flex-wrap justify-center z-10'
						id='serviceBlocks'
					>
						{serviceObjects.map((serviceObject, index) => (
							<div
								key={index}
								className='flex flex-col drop-shadow-[0px_1px_5px_rgba(0,0,0,0.50)] mx-10 custom-transition'
							>
								<div className='bg-sky-700 text-yellow-400 font-semibold mt-10 py-3 pl-3 text-xl h-18 w-80'>
									{serviceObject.service}
								</div>
								<div className='bg-sky-tint text-white pt-5 pb-4 pl-3 pr-3 tracking-wider h-40 w-80 flex flex-col justify-between'>
									<div>{serviceObject.mainInfo}</div>
									<Link href={`#${serviceObject.idAttribute}`}>
										<div className='uppercase underline underline-offset-4 hover:text-yellow-400'>
											Learn more
										</div>
									</Link>
								</div>
							</div>
						))}
					</div>

					{/* Text describing services */}
					<div
						className='flex flex-wrap justify-normal z-20'
					>
						{serviceObjects.map((serviceObject, index) => (
							<div key={index} id={serviceObject.idAttribute}>
								<div className='mt-8'>
									<p className='text-stone-600 text-3xl font-semibold tracking-wider  mb-5'>
										{serviceObject.service}
									</p>
									<div>
										{serviceObject.secondaryInfo.map((info, infoIndex) => (
											<div key={infoIndex}>
												<p className='text-stone-600 tracking-wider mt-5'>
													{info.intro}
												</p>
												<ul className='list-disc pl-6 mt-2'>
													{info.bulletPoints.map((bullet, bulletIndex) => (
														<li
															key={bulletIndex}
															className='text-stone-600 mt-1'
														>
															{bullet}
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
