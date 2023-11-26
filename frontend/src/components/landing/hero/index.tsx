import React from "react";
import "./index.scss";

export const Hero = ({ group }: { group: string }) => {
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

				<figure>
					<img
						src="/desktopBG.png"
						alt=""
					/>
				</figure>
			</div>
		</section>
	);
};
