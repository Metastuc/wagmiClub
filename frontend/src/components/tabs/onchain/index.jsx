import "./index.scss";

/**
 * OnchainTabs component provides a tab switcher for personal and organization tabs.
 * @component
 * @param {Object} props - The properties of the OnchainTabs component.
 * @param {Function} props.onTabChange - Function to handle tab changes.
 * @param {Function} props.tabIsActive - Function to check if a tab is active.
 */
const OnchainTabs = ({ group, onTabChange, tabIsActive }) => {
	return (
		<section className={`${group}__tabs`}>
			<div className={`${group}__tabs-wrapper`}>
				{/* Personal Tab */}
				<div
					className={`${tabIsActive("personal")} tab-switch__item`}
					onClick={() => onTabChange("personal")}
				>
					<div className="tab-switch__icon">
						<span></span> {/* Add icon or content for the tab */}
					</div>
					<span className="tab-switch__title">Personal</span>
				</div>

				{/* Organization Tab */}
				<div
					className={`${tabIsActive(
						"organisation",
					)} tab-switch__item`}
					onClick={() => onTabChange("organisation")}
				>
					<div className="tab-switch__icon">
						<span></span> {/* Add icon or content for the tab */}
					</div>
					<span className="tab-switch__title">Organization</span>
				</div>
			</div>
		</section>
	);
};

export default OnchainTabs;