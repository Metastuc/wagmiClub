import React from "react";
import "./index.scss";

/**
 * CreateTabs component provides buttons to switch between Badge and Medal tabs.
 * It also includes a background indicator for the active tab.
 * @component
 * @param {Object} props - The properties of the CreateTabs component.
 * @param {Function} props.onTabChange - Function to handle tab changes.
 * @param {Function} props.tabIsActive - Function to check if a tab is active.
 */
const CreateTabs = ({ onTabChange, tabIsActive }) => {
	return (
		<section className="tab-switch">
			<div className="tab-switch__wrapper">
				{/* Badge Tab Button */}
				<button
					className={`${tabIsActive("badge")} tab-switch__button`}
					onClick={() => onTabChange("badge")}
				>
					<span>Badge</span>
				</button>

				{/* Medal Tab Button */}
				<button
					className={`${tabIsActive("medal")} tab-switch__button`}
					onClick={() => onTabChange("medal")}
				>
					<span>Medal</span>
				</button>

				{/* Background Indicator for Active Tab */}
				<div className={`${tabIsActive("badge")} tab-switch__bg`}></div>
			</div>
		</section>
	);
};

export default CreateTabs;
