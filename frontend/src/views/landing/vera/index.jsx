import React from "react";
import { Club as Reputation } from "../../../components";
import "./index.scss";

/**
 * Vera component displays the reputation clubs on both mobile and desktop views.
 * @component
 * @param {object} props - Component props
 * @param {string} props.group - CSS class group name for styling
 * @returns {JSX.Element} - Rendered component
 */
const Vera = ({ group }) => {
	/**
	 * Reputation clubs data for mobile and desktop views.
	 * @type {Object}
	 */
	const clubs = {
		mobile: [
			{
				color: "#A1F294",
				title: "investors",
			},
			{
				color: "#FFFFFF",
				title: "founders",
			},
			{
				color: "#FFFFFF",
				title: "developers",
			},
		],
		desktop: [
			{
				color: "#FFFFFF",
				title: "founders",
			},
			{
				color: "#9BF593",
				title: "builders",
			},
			{
				color: "#E5F67A",
				title: "advisors",
			},
		],
	};

	/**
	 * Renders the reputation clubs for mobile view.
	 * @returns {JSX.Element} - Rendered clubs for mobile view
	 */
	function RenderMobileClubs() {
		return (
			<>
				{clubs.mobile.map((item, index) => {
					return (
						<Reputation
							{...item}
							key={index}
							group={`${group}__vera`}
						/>
					);
				})}
			</>
		);
	}

	/**
	 * Renders the reputation clubs for desktop view.
	 * @returns {JSX.Element} - Rendered clubs for desktop view
	 */
	function RenderDesktopClubs() {
		return (
			<>
				{clubs.desktop.map((item, index) => {
					return (
						<Reputation
							{...item}
							key={index}
							group={`${group}__vera`}
						/>
					);
				})}
			</>
		);
	}

	return (
		<section className={`${group}__vera`}>
			<div className={`${group}__vera-wrapper`}>
				<p>
					Our platform is a safe vault for your earned reputations,
					experience and achievements. It is tamper-proof and
					non-transferable!
				</p>

				<div className={`${group}__vera-dynamic`}>
					<div className={`${group}__vera-mobile`}>
						<RenderMobileClubs />
					</div>

					<div className={`${group}__vera-desktop`}>
						<RenderDesktopClubs />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Vera;
