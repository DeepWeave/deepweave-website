/** @format */

import Image from "next/image";
import NavLinks from "./navlinks";

export default function NavbarTwo() {
	return (
		<>
			<div className='w-full h-15 bg-sky-700'>
				<div className='flex justify-between ml-5 mr-5'>
					{/* I want this div to be on the left side of the navbar */}
					<div className='flex items-center'>
						<Image
							src='/DeepWeave_logo.png'
							width={75}
							height={75}
							alt='DeepWeave Logo'
						/>
						<div className='text-xl text-white ml-2'>DeepWeave</div>
					</div>
					{/* I want this div to be on the right side of the navbar */}
					<div className='hidden md:flex items-center'>
						<NavLinks />
					</div>
					<div className='flex items-center lg:hidden cursor-pointer'>
						<div className='flex items-center'>
							<button
								id='hamburger-button'
								className='text-3xl text-white md:hidden cursor-pointer' // Hidden on lg screens and above
							>
								&#9776;
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
