import React from "react";
import { Link } from "react-router-dom";
import { desktopNavLinks } from "../../../assets/data";
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
			{/* Wrapper for the logo, menu, and desktop navigation */}
			<div className="primaryNav__wrapper">
				{/* Application Logo */}
				<Logo />

				{/* Navigation Menu (Mobile) */}
				<Menu />

				{/* Desktop Navigation Menu */}
				<ul className="primaryNav__desktop">
					{/* Mapping through desktop navigation links */}
					{desktopNavLinks.map((item, index) => {
						const {
							id,
							value: { title, to },
						} = item;

						return (
							<li key={id || index}>
								{/* Link to specific route */}
								<Link to={to}>{title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default PrimaryNavbar;
