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
				className='flex justify-center mt-5 mb-5'
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{isHovering ? (
					<Image
						src='/LinkedIn_hover.png'
						width={30}
						height={15}
						alt='LinkedIn Logo'
					/>
				) : (
					<Image
						src='/LinkedIn.png'
						width={30}
						height={15}
						alt='LinkedIn Logo'
					/>
				)}

				<p className='text-stone-600 italic font-semibold tracking-wider ml-2 hover:text-stone-700 md:text-left'>
					See LinkedIn
				</p>
			</div>
		</Link>
	);
}
