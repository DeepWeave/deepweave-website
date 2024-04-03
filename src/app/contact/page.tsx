/** @format */

import React from "react";

export default function Contact() {
	return (
		<div className='container flex justify-center items-center h-full  m-auto px-10 '>
			<div className='flex flex-col justify-center items-center mt-10 md:mt-40'>
				<h2 className='text-stone-600 text-3xl font-semibold uppercase tracking-wider text-center mt-3 md:text-left md:w-full lg:text-4xl'>
					Contact
				</h2>
				<iframe
					src='https://docs.google.com/forms/d/e/1FAIpQLSekCfny7AnWZ3vqKRxyrjX-H3U2VBfytw559HrgRYQxSWE1Sg/viewform?embedded=true'
					width='640'
          height='814'
          className="mt-10"
				>
					Loading…
				</iframe>
			</div>
		</div>
	);
}
