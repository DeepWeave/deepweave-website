/** @format */

import React from "react";

export default function Contact() {
	return (
		<div className='bg-sky-bg flex justify-center items-center m-0 h-full pb-10'>
			<div className='flex flex-col justify-center items-center mt-10 md:mt-40'>
				<h2 className='text-stone-600 text-3xl font-semibold uppercase tracking-wider text-center md:ml-12 md:text-left md:w-full lg:text-4xl'>
					Contact
				</h2>
				<iframe
					src='https://docs.google.com/forms/d/e/1FAIpQLSekCfny7AnWZ3vqKRxyrjX-H3U2VBfytw559HrgRYQxSWE1Sg/viewform?embedded=true'
					width='640'
					height='950'
					className='py-5'
				>
					Loading…
				</iframe>
			</div>
		</div>
	);
}
