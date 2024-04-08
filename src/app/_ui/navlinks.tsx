/** @format */

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, MouseEventHandler } from "react";

interface NavLinksProps {
	handleLinkClick: MouseEventHandler<HTMLParagraphElement>;
	isDropDownOpen: boolean;
}

export default function NavLinks({ handleLinkClick, isDropDownOpen }: NavLinksProps) {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		function handleResize() {
			setIsSmallScreen(window.innerWidth < 640);
		}

		handleResize(); // Call handleResize initially to set the correct initial state
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{/* Home */}
			<Link href='/'>
				<p
					onClick={handleLinkClick}
					className={clsx("text-white tracking-widest custom-transition", {
						"font-bold text-yellow-400": !isDropDownOpen && pathname === "/",
						"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
							isDropDownOpen,
						"hover:font-bold ml-5 mr-5": !isDropDownOpen,
					})}
				>
					HOME
				</p>
			</Link>

			{/* About */}
			<Link href='/about'>
				<p
					onClick={handleLinkClick}
					className={clsx("text-white tracking-widest custom-transition", {
						"font-bold text-yellow-400":
							!isDropDownOpen && pathname === "/about",
						"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
							isDropDownOpen,
						"hover:font-bold ml-5 mr-5": !isDropDownOpen,
					})}
				>
					ABOUT
				</p>
			</Link>

			{/* Services */}
			<Link href='/services'>
				<p
					onClick={handleLinkClick}
					className={clsx("text-white tracking-widest custom-transition", {
						"font-bold text-yellow-400":
							!isDropDownOpen && pathname === "/services",
						"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
							isDropDownOpen,
						"hover:font-bold ml-5 mr-5": !isDropDownOpen,
					})}
				>
					SERVICES
				</p>
			</Link>

			{/* Values */}
			<Link href='/values'>
				<p
					onClick={handleLinkClick}
					className={clsx("text-white tracking-widest custom-transition", {
						"font-bold text-yellow-400":
							!isDropDownOpen && pathname === "/values",
						"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
							isDropDownOpen,
						"hover:font-bold ml-5 mr-5": !isDropDownOpen,
					})}
				>
					VALUES
				</p>
			</Link>

			{/* Contact */}
			<Link
				href={isSmallScreen ? "/ContactRedirect" : "/contact"}
				target={isSmallScreen ? "_blank" : ""}
			>
				<p
					onClick={handleLinkClick}
					className={clsx("text-white tracking-widest custom-transition", {
						"font-bold text-yellow-400":
							!isDropDownOpen && pathname === "/contact",
						"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
							isDropDownOpen,
						"hover:font-bold ml-5 mr-5": !isDropDownOpen,
					})}
				>
					CONTACT
				</p>
			</Link>
		</>
	);
}
