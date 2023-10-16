import React from "react";
import { Logo, Menu } from "../../../components";
import "./index.scss";

/**
 * Primary navigation bar component containing the logo and menu.
 *
 * @component
 * @returns {JSX.Element} - Rendered PrimaryNavbar component
 */
const PrimaryNavbar = () => {
	return (
		<nav className="primaryNav">
			{/* Wrapper for the logo and menu */}
			<div className="primaryNav__wrapper">
				{/* Application Logo */}
				<Logo />

				{/* Navigation Menu */}
				<Menu />
			</div>
		</nav>
	);
};

export default PrimaryNavbar;
