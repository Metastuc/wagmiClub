// "use client"

import Link from "next/link";
import { DESKTOP_NAV_LINKS } from "@/assets/data";
import { Logo, Menu } from "@/components";
import "./index.scss";

export const PrimaryNav = () => {
	return (
		<nav className="primaryNav">
			{/* Wrapper for the logo, menu, and desktop navigation */}
			<div className="primaryNav__wrapper">
				{/* Application Logo */}
				<Logo />

				{/* Navigation Menu (Mobile) */}
				<Menu />

				{/* Desktop Navigation Menu */}
				<ul className="primaryNav__desktop">
					{/* Mapping through desktop navigation links */}
					{DESKTOP_NAV_LINKS.map((item, index) => {
						const {
							id,
							value: { title, to },
						} = item;

						return (
							<li key={id || index}>
								{/* Link to specific route */}
								<Link href={to}>{title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
