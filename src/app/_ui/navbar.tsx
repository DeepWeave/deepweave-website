/** @format */

import NavLinks from "./navlinks";
import Image from "next/image";

export default function Navbar() {
	return (
		<>
			<div className='w-full h-15 bg-sky-700 sticky top-0'>
				<div className='container ml-5 h-full'>
					<div className='flex justify-between h-full'>
						<div className='flex items-center'>
							<Image
								src='/DeepWeave_logo.png'
								width={75}
								height={75}
								className='hidden md:block'
								alt='DeepWeave Logo'
							/>
							<h2 className='text-white ml-2 text-xl tracking-widest'>
								DeepWeave
							</h2>
						</div>
						<ul className='hidden md:flex gap-x-4 text-white items-center'>
							<NavLinks />
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
