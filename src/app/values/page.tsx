/** @format */

import React from "react";
import { valuesObjects } from "../data";

export default function Values() {
	return (
		<div className='container flex justify-center items-center h-full px-10 pb-10'>
			<div className='flex flex-col justify-center items-center mt-10 md:mt-40'>
				<h2 className='text-stone-600 text-3xl font-semibold uppercase tracking-wider text-center mt-3 md:w-full lg:text-left lg:text-4xl'>
					Values
				</h2>
				<p className='text-stone-600 mt-5 text-center tracking-wider italic w-3/4 text-xl md:w-full lg:text-left'>
					In every engagement I am committed to both providing and supporting
					services that are
				</p>
				<div className='flex flex-wrap justify-center'>
					{valuesObjects.map((valueObject, index) => (
						<div
							key={index}
							className='flex flex-col drop-shadow-lg mr-10'
						>
							<div className='bg-sky-700 text-yellow-400 font-semibold mt-10 py-3 pl-3 text-xl h-15 w-80'>
								{valueObject.value}
							</div>
							<div className='bg-sky-700 opacity-70 text-white pt-3 pl-3 pr-3 tracking-wider h-40 w-80 flex flex-col justify-between'>
								<div>{valueObject.mainInfo}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
