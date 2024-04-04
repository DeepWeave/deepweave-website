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

	const handleLinkClick = () => {
		setIsDropdownOpen(false); // Close the dropdown when a link is clicked
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
					{/* regular menu to display on larger screens*/}
					<div className='hidden md:flex items-center'>
						<NavLinks />
					</div>
					{/* hamburger menu to display on small screens*/}
					<div className='flex items-center lg:hidden cursor-pointer'>
						<div className='flex items-center'>
							{/* Toggle between hamburger menu and close icon based on isDropdownOpen state */}
							<button
								id='hamburger-button'
								className='text-5xl text-white cursor-pointer custom-transition hover:text-stone-300 md:hidden'
								onClick={toggleDropdown}
							>
								<span
									dangerouslySetInnerHTML={{
										__html: isDropdownOpen ? "&times;" : "&#9776;",
									}}
								/>
							</button>
						</div>
						{isDropdownOpen && (
							<div className='absolute top-[75px] left-0 text-center right-0 bg-sky-tint transition-all duration-500 delay-100'>
								<NavLinks handleLinkClick={handleLinkClick} isDropDownOpen />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
