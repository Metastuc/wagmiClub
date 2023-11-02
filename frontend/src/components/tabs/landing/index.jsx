import React from "react";
import "./index.scss";

/**
 * ReputationTabs component displays tabs for different reputation categories.
 * @component
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.group - The CSS class group for styling.
 * @param {Function} props.onTabChange - Function to handle tab selection change.
 * @param {Function} props.tabIsActive - Function to check if a tab is currently active.
 *
 * @returns {JSX.Element} ReputationTabs component
 */
const ReputationTabs = ({ group, onTabChange, tabIsActive }) => {
	return (
		<section className={`${group}__tabs`}>
			<div className={`${group}__tabs-wrapper`}>
				{/* Badge Tab */}
				<div
					className={`${tabIsActive("badge")} ${group}__tabs-item`}
					onClick={() => onTabChange("badge")}
				>
					<div className={`${group}__tabs-icon`}>
						<span></span> {/* Add icon or content for the tab */}
					</div>
					<span className={`${group}__tabs-title`}>Badges</span>
				</div>

				{/* Medals Tab */}
				<div
					className={`${tabIsActive("medal")} ${group}__tabs-item`}
					onClick={() => onTabChange("medal")}
				>
					<div className={`${group}__tabs-icon`}>
						<span></span> {/* Add icon or content for the tab */}
					</div>
					<span className={`${group}__tabs-title`}>Medals</span>
				</div>

				{/* Trustscore Tab */}
				<div
					className={`${tabIsActive(
						"trustscore",
					)} ${group}__tabs-item`}
					onClick={() => onTabChange("trustscore")}
				>
					<div className={`${group}__tabs-icon`}>
						<span></span> {/* Add icon or content for the tab */}
					</div>
					<span className={`${group}__tabs-title`}>Trustscore</span>
				</div>
			</div>
		</section>
	);
};

export default ReputationTabs;
