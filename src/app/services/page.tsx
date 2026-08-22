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
					<h2 className='text-stone-600 text-3xl font-semibold uppercase tracking-wider text-left mt-3 md:text-left md:w-full lg:text-4xl'>
						WHAT I DO
					</h2>
					<p className='text-stone-600 tracking-wider text-base mt-5'>
						Before I moved to the government and nonprofit world, I worked as a product manager in software
						startups that delivered cutting-edge technologies. Startup product managers don&apos;t design,
						build, market, or sell the product, nor do they have authority over those who do. Their role is
						to shepherd the product from vision to delivery, ensuring the final result remains true to the
						vision and addresses both the company&apos;s and customers&apos; needs.
					</p>
					<p className='text-stone-600 tracking-wider text-base mt-5'>
						Successful product managers understand the larger system and see how all its parts work together.
						They operate in many different worlds at once, interpreting and coordinating between them. They
						identify strategic paths through conflict and constraint and drive execution of a plan even as it
						evolves in response to shifting conditions and learning. They assess and convey the value and
						impact of the product for both customers and company. And they do it without formal authority
						over anyone.
					</p>
					<p className='text-stone-600 tracking-wider text-base mt-5'>
						These days I use the same skills in service to my community, helping organizations implement
						new tools and programs, reimagine impact, and build stronger networks to create connected,
						resilient communities. I work both through paid engagements and as a volunteer, including
						chairing the System Performance Committee of the
						<a href="https://www.ashevillenc.gov/projects/asheville-buncombe-continuum-of-care/"
						   target="_blank">Asheville-Buncombe Continuum of Care</a> for homelessness. In my free time,
						I think and write about building resilient and just systems in my newsletter,&nbsp;
						<a href="https://deepweave.substack.com/" target="_blank" rel='noopener noreferrer'>
							<span className='text-sky-700 italic font-semibold tracking-wider underline underline-offset-2 mt-3 hover:text-sky-800'>
								Resilient Change
							</span>
						</a>.
					</p>
					<h3 className='text-stone-600 font-semibold tracking-wider text-2xl text-left mt-5 md:text-left md:w-full'>
						Some Ways I Can Help
					</h3>
					<p className='text-stone-600 tracking-wider text-base mt-5'>
						Community organizations don&apos;t usually have product managers, but their work can require similar
						skills. In a way they are like perpetual startups, constantly seeking funding and scrappily
						figuring out what does or doesn&apos;t help them fulfill their mission. Here are a few ways
						I&apos;ve helped with those challenges:
					</p>
					<ul className='list-disc pl-6 mt-2'>
						<li className='text-stone-600 mt-1'>
							<em>Creating systems for evaluation, reporting, & learning.</em> Simple counts of people served
							or supplies provided are important, but don’t tell you how people and the community were
							impacted or how changes in process might improve the results. Organizations often could
							gain that information, but lack the systems and processes to do so.
						</li>
					</ul>

				</div>
			</div>
		</>
	);
}
