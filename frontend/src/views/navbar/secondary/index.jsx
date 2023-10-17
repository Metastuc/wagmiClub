import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../../components";
import "./index.scss";

/**
 * Secondary navigation bar component containing logo, create link, search, and profile sections.
 *
 * @component
 * @returns {JSX.Element} - Rendered SecondaryNavbar component
 */
const SecondaryNavbar = () => {
	const location = useLocation();

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
							location.pathname === "/create" ? "active" : ""
						}`}
					>
						<Link to="/create">Create</Link>
					</div>

					{/* Search */}
					<div className="secondaryNav__item">Search</div>

					{/* Profile */}
					<div className="secondaryNav__item">Profile</div>
				</div>
			</div>
		</nav>
	);
};

export default SecondaryNavbar;
