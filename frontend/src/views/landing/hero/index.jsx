import React from "react";
import "./index.scss";

/**
 * Hero component displays the main message for the specified group.
 *
 * @component
 * @param {Object} props - The properties of the Hero component.
 * @param {string} props.group - The CSS class name for the group styling.
 * @returns {JSX.Element} - Rendered Hero component
 */
const Hero = ({ group }) => {
	return (
		<section className={`${group}__hero`}>
			<div className={`${group}__hero-wrapper`}>
				{/* Main heading for the hero section */}
				<h1>the club with the magic badge</h1>

				{/* Description text with a highlighted word */}
				<p>
					wagmi<span>club</span> is the update for professional
					networking using onchain reputation
				</p>
			</div>
		</section>
	);
};

export default Hero;
