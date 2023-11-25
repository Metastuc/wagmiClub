import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CloseMenu, Hamburger, Search } from "../../assets/icons";
import { navLinks } from "../../assets/data";
import { useToggle } from "../../hooks/index.js";
import { login } from "../../utils/login.js";
// import { connectWallet as login } from "../../utils/app.mjs";
// import { connectWallet as login } from "../../../../backend/frontendLogic/app.mjs";
import "./index.scss";

/**
 * Menu component for the website navigation menu.
 * @returns {JSX.Element} Menu component JSX.
 */
const Menu = () => {
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
			login();
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
									{navLinks.map((item) => {
										const {
											id,
											value: { title, to },
										} = item;

										return (
											<li
												key={id}
												onClick={handleMenuItem}
											>
												<Link to={to}>{title}</Link>
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

export default Menu;
