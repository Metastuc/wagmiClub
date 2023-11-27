"use client"

import { usePathname } from "next/navigation";
import { Logo } from "@/components";
import Link from "next/link";
import "./index.scss";

export const SecondaryNav = () => {
	const pathname = usePathname();

	return (
		<nav className="secondaryNav">
			{/* Wrapper for the logo and right column */}
			<div className="secondaryNav__wrapper">
				{/* Application Logo */}
				<Logo />

				{/* Right column containing create link, search, and profile */}
				<div className="secondaryNav__right-col">
					{/* Create Link */}
					<div
						className={`secondaryNav__item ${
							pathname === "/create" ? "active" : ""
						}`}
					>
						<Link href="/create">Create</Link>
					</div>

					{/* Search */}
					<div className="secondaryNav__item">Search</div>

					{/* Profile */}
					<div className="secondaryNav__item">
						<Link href={"/profile"}>Profile</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
