/** @format */

import React from "react";
import { serviceObjects } from "../data";
import Link from "next/link";

export default function Services() {
	return (
		<>
			<div className='container flex justify-center items-center h-full  m-auto px-10 '>
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
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
						{serviceObjects.map((serviceObject, index) => (
							<div key={index} className='flex flex-col drop-shadow-xl m-auto'>
								<div className='bg-sky-700 text-yellow-400 font-semibold mt-10 py-3 pl-3 text-xl h-20 w-80'>
									{serviceObject.service}
								</div>
								<div className='bg-sky-700 opacity-70 text-white pt-3 pb-1 pl-3 pr-3 tracking-wider w-full h-40 w-80 flex flex-col justify-between'>
									<div>{serviceObject.mainInfo}</div>
									<Link href='https:'>
										<div className='uppercase underline underline-offset-4'>
											Learn more
										</div>
									</Link>
								</div>
							</div>
						))}
					</div>
					{serviceObjects.map((serviceObject, index) => (
						<div key={index} className='mt-20'>
							<h2 className='text-stone-600 text-3xl font-semibold tracking-wider uppercase mb-7'>
								{serviceObject.service}
							</h2>
							{serviceObject.secondaryInfo.map((info, infoIndex) => (
								<div key={infoIndex}>
									<h2 className='text-stone-600 text-2xl font-semibold tracking-wider mt-10'>
										{info.title}
									</h2>
									<ul className='list-disc pl-6 mt-2'>
										{info.bulletPoints.map((bullet, bulletIndex) => (
											<li key={bulletIndex} className='text-stone-600 mt-1'>
												{bullet}
											</li>
										))}
									</ul>
								</div>
							))}
							<h2 className='text-sky-700 text-2xl font-semibold tracking-wider mt-5'>
								Relevant Articles
							</h2>
							{serviceObject.articles.map((article, articleIndex) => (
								<div key={articleIndex}>
									<Link href='https:'>
										<h2 className='text-sky-700 text-xl italic font-semibold tracking-wider underline underline-offset-8 mt-3 hover:text-sky-800'>
											{article.title}
										</h2>
									</Link>
								</div>
							))}
						</div>
					))}
					<div className="h-10"></div>
				</div>
			</div>
		</>
	);
}
