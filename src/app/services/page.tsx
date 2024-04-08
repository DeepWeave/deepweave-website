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
			<h2 className='text-black-700 text-xl italic font-semibold tracking-wider mt-3 hover:text-sky-800'>
				{title}
			</h2>
		)
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
						Consistently getting good results is hard because there is always
						pressure to react to circumstances, rather than maintain a
						proactive, disciplined approach. Each of the services below will
						help you learn and apply simple frameworks to identify your desired
						results and to make steady progress toward them.
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
								<div className='bg-sky-700 text-yellow-400 font-semibold mt-10 py-3 pl-3 text-xl h-20 w-80'>
									{serviceObject.service}
								</div>
								<div className='bg-sky-tint text-white pt-3 pb-1 pl-3 pr-3 tracking-wider h-40 w-80 flex flex-col justify-between'>
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
					<div>
						{serviceObjects.map((serviceObject, index) => (
							<div key={index} id={serviceObject.idAttribute}>
								<div className='mt-20'>
									<h2 className='text-stone-600 text-3xl font-semibold tracking-wider uppercase mb-7'>
										{serviceObject.service}
									</h2>
									<div>
										{serviceObject.secondaryInfo.map((info, infoIndex) => (
											<div key={infoIndex}>
												<h2 className='text-stone-600 text-2xl font-semibold tracking-wider mt-10'>
													{info.title}
												</h2>
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
									<h2 className='text-sky-700 text-2xl font-semibold tracking-wider mt-5'>
										Relevant Articles
									</h2>
									<div>
										{serviceObject.articles.map((article, articleIndex) => (
											<div key={articleIndex}>
												{articleTitle(article.title, article.href)}
												{/* Button for small screens to navigate back to services */}
												<div>
													<Link href='#serviceBlocks' className='md:hidden'>
														<button className='bg-yellow-400 text-sky-700 font-semibold text-sm py-2 px-4 rounded-full tracking-wider custom-transition mt-7 uppercase hover:bg-yellow-500 md:py-2 md:px-8 md:text-base'>
															Back to Top
														</button>
													</Link>
												</div>
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
