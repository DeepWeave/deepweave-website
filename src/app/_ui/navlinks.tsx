/** @format */
"use client";
import clsx from "clsx";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in navigation.

const links = [
	{ name: "HOME", href: "/" },
	{ name: "ABOUT", href: "/about" },
	{ name: "SERVICES", href: "/services" },
	{ name: "VALUES", href: "/values" },
	{ name: "CONTACT", href: "/contact" },
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx("text-white", {
							"font-bold": pathname === link.href,
						})}
					>
						<p className='ml-5 mr-5'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
