/** @format */

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";

NavLinks.propTypes = {
	handleLinkClick: PropTypes.func,
	isDropDownOpen: PropTypes.bool,
};

export default function NavLinks({ handleLinkClick, isDropDownOpen }) {
	const pathname = usePathname();

	return (
		<>
			{/* Home */}
			<Link href='/'>
				<p
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
			<a
				href={
					window.innerWidth < 640
						? "https://forms.gle/3aWKbfZmX2EFMZDG9"
						: "/contact"
				}
				target={window.innerWidth < 640 ? "_blank" : ""}
				className={clsx("text-white tracking-widest custom-transition", {
					"font-bold text-yellow-400":
						!isDropDownOpen && pathname === "/contact",
					"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
						isDropDownOpen,
					"hover:font-bold ml-5 mr-5": !isDropDownOpen,
				})}
				onClick={handleLinkClick}
			>
				CONTACT
			</a>
		</>
	);
}
