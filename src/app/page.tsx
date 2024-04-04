/** @format */

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div
				style={{
					zIndex: -1,
					position: "fixed",
					width: "100vw",
					height: "100vh",
				}}
			>
				<Image
					src='/BG.jpg'
					alt='Image of stairs with leaves leading to town hall'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className='flex bg-white-opacity-50 w-full justify-center mt-40 sm:justify-start md:justify-start'>
				<div className='flex flex-col mt-10'>
					<div
						className={
							"text-stone-600 text-4xl font-bold pb-8 sm:ml-20 sm:text-5xl md:text-6xl lg:ml-40"
						}
					>
						Deliver Results <br /> for Your Community
					</div>
					<div className='flex pt-9 pb-5 justify-end sm:pr-3'>
						<Link href='/contact'>
							<button className='bg-yellow-400 text-sky-700 font-semibold text-sm py-1 px-4 rounded-full tracking-wider custom-transition hover:bg-yellow-500 md:py-2 md:px-8 md:text-base'>
								CONTACT
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
