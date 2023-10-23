import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

/**
 * Logo component representing the application logo with a link to the home page.
 *
 * @component
 * @returns {JSX.Element} - Rendered Logo component
 */
const Logo = () => {
	return (
		<section className="logo">
			{/* Logo wrapper with a link to the home page */}
			<div className="logo__wrapper">
				{/* Link to the home page */}
				<Link
					to={"/"}
					className="logo__link"
				>
					{/* First part of the logo */}
					<span>wagmi</span>

					{/* Second part of the logo */}
					<span>club</span>
				</Link>
			</div>
		</section>
	);
};

export default Logo;
