/** @format */

import Image from "next/image";
import Navbar from "./_ui/navbar";
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
			<div className='container flex w-full'>
				{/* Can't figure out why this background opacity is being passed the child div */}
				<div className='flex bg-white opacity-100 w-full mt-40'>
					<div className='flex flex-col mt-10'>
						<div
							className={twMerge(
								"text-sky-700 text-6xl font-bold text-opacity-100 bg-white opacity-70",
								"text-sky-700 text-6xl font-bold text-opacity-100 opacity-100 pb-8 ml-20 md:ml-40"
							)}
						>
							Deliver Results <br /> for Your Community
						</div>
						<div className='flex justify-start ml-40 pt-9 pb-5 sm:justify-end'>
							<Link href='/contact'>
								<button className='bg-yellow-400 hover:bg-yellow-500 text-sky-700 font-semibold py-2 px-8 rounded-full tracking-wider'>
									CONTACT
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
