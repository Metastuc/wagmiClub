import React from "react";
import "./index.scss";

/**
 * Functional component representing the ExploreTabs.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.group - The group to which the tabs belong.
 * @param {function} props.onTabChange - The function to be called when a tab is clicked.
 * @param {function} props.tabIsActive - The function to determine if a tab is active.
 * @returns {JSX.Element} ExploreTabs component JSX
 */
const ExploreTabs = ({ group, onTabChange, tabIsActive }) => {
	return (
		<section className={`${group}__tabs`}>
			<div className={`${group}__tabs-wrapper`}>
				<button
					className={`${tabIsActive(
						"marketplace",
					)} ${group}__tabs-button`}
					onClick={() => onTabChange("marketplace")}
				>
					<span>Marketplace</span>
				</button>

				<button
					className={`${tabIsActive(
						"onchainMedals",
					)} ${group}__tabs-button`}
					onClick={() => onTabChange("onchainMedals")}
				>
					<span>Onchain medals</span>
				</button>
			</div>
		</section>
	);
};

export default ExploreTabs;
