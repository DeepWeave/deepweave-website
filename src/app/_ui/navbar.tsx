/** @format */

"use client";
import Image from "next/image";
import NavLinks from "./navlinks";
import { useState } from "react";

export default function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<>
			<div className='w-full h-15 sticky bg-sky-700'>
				<div className='flex justify-between ml-5 mr-5 sm:mr-2'>
					<div className='flex items-center'>
						<Image
							src='/DeepWeave_logo.png'
							width={75}
							height={75}
							alt='DeepWeave Logo'
						/>
						<div className='text-xl text-white ml-2'>DeepWeave</div>
					</div>
					<div className='hidden md:flex items-center'>
						<NavLinks />
					</div>
					<div className='flex items-center lg:hidden cursor-pointer'>
						<div className='flex items-center'>
							<button
								id='hamburger-button'
								className='text-5xl text-white cursor-pointer md:hidden'
								onClick={toggleDropdown}
							>
								&#9776;
							</button>
						</div>
						{isDropdownOpen && (
							<div className='absolute top-15 left-0 right-0  bg-black border border-gray-300 p-2'>
								<NavLinks />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
