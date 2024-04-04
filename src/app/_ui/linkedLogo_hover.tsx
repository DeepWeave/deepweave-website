/** @format */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LinkedLogo_hover() {
	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);
	return (
		<Link href='https://www.linkedin.com/in/ericjackson/'>
			<div
				className='flex items-end mt-5 mb-5 custom-transition'
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{isHovering ? (
					<Image
						src='/LinkedIn-blue-hover.png'
						width={30}
						height={15}
						alt='LinkedIn Logo'
					/>
				) : (
					<Image
						src='/LinkedIn-blue.png'
						width={30}
						height={15}
						alt='LinkedIn Logo'
					/>
				)}
				<p className='text-sky-700 italic font-semibold tracking-wider ml-2 hover:text-sky-800'>
					See LinkedIn
				</p>
			</div>
		</Link>
	);
}
