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
						className={clsx(
							"flex h-[48px] grow items-center justify-center gap-2 text-lg font-normal tracking-widest hover:font-bold md:flex md:justify-start md:p-2 md:px-3",
							{
								"font-bold": pathname === link.href,
							}
						)}
					>
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
