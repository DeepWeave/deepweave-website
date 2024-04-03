/** @format */

"use client";
import clsx from "clsx";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ name: "HOME", href: "/" },
	{ name: "ABOUT", href: "/about" },
	{ name: "SERVICES", href: "/services" },
	{ name: "VALUES", href: "/values" },
	{ name: "CONTACT", href: "/contact" },
];

import PropTypes from "prop-types";

NavLinks.propTypes = {
	handleLinkClick: PropTypes.func,
	isDropDownOpen: PropTypes.bool,
};

export default function NavLinks({ handleLinkClick, isDropDownOpen }) {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				return (
					<Link
						key={link.name}
						href={link.href}
						onClick={handleLinkClick}
						className={clsx(
							"text-white tracking-widest transition ease-out duration-500",
							{
								"font-bold text-yellow-400":
									!isDropDownOpen && pathname === link.href,
								// "p-2": isDropDownOpen,
							}
						)}
					>
						<p
							className={
								isDropDownOpen
									? "py-2 hover:font-bold hover:bg-sky-tint-light"
									: "hover:font-bold ml-5 mr-5"
							}
						>
							{link.name}
						</p>
					</Link>
				);
			})}
		</>
	);
}
