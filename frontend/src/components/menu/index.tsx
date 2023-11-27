"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CloseMenu, Hamburger, Search } from "@/assets/icons";
import { DESKTOP_NAV_LINKS } from "@/assets/data";
import { useToggle } from "@/hooks";
import "./index.scss";

// import { connectWallet } from "@/utils/app.mjs";

export const Menu = () => {
	const { status: menuActive, toggleStatus } = useToggle();

	useEffect(() => {
		// Toggle background vertical scroll when menu is active
		const scroll = menuActive ? "hidden" : "visible";
		document.body.style.overflowY = scroll;
	}, [menuActive]);

	/**
	 * Handle menu item click event.
	 */
	function handleMenuItem() {
		if (menuActive) {
			toggleStatus();
			// logIn();
		}
	}

	return (
		<section className="menu">
			<div className="menu-wrapper">
				{/* Hamburger menu button */}
				<button onClick={toggleStatus}>
					<Hamburger />
				</button>

				{/* Active menu background */}
				{menuActive && (
					<section className="active-menu-background">
						<div className="menu-content">
							<div className="content-wrapper">
								{/* Close menu button */}
								<div className="close-menu">
									<button onClick={toggleStatus}>
										<CloseMenu />
									</button>
								</div>

								{/* Navigation links */}
								<ul className="navigation">
									{DESKTOP_NAV_LINKS.map((item) => {
										const {
											id,
											value: { title, to },
										} = item;

										return (
											<li
												key={id}
												onClick={handleMenuItem}
											>
												<Link href={to}>{title}</Link>
											</li>
										);
									})}
								</ul>

								{/* Search input */}
								<div className="search">
									<input
										type="text"
										placeholder="search"
									/>
									<span>
										<Search />
									</span>
								</div>
							</div>
						</div>
					</section>
				)}
			</div>
		</section>
	);
};
