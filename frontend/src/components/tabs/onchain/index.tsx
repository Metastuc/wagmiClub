import { FC } from "react";
import { tabProps } from "..";
import "./index.scss";

export const OnchainTabs: FC<tabProps> = ({
	group,
	onTabChange,
	tabIsActive,
}) => {
	return (
		<section className={`${group}__tabs`}>
			<div className={`${group}__tabs-wrapper`}>
				{/* Personal Tab */}
				<div
					className={`${tabIsActive("active")} ${group}__tabs-item`}
					onClick={() => onTabChange("active")}
				>
					<div className={`${group}__tabs-icon`}>
						<span></span> {/* Add icon or content for the tab */}
					</div>
					<span className={`${group}__tabs-title`}>Active</span>
				</div>

				{/* Organization Tab */}
				<div
					className={`${tabIsActive("ended")} ${group}__tabs-item`}
					onClick={() => onTabChange("ended")}
				>
					<div className={`${group}__tabs-icon`}>
						<span></span> {/* Add icon or content for the tab */}
					</div>
					<span className={`${group}__tabs-title`}>Ended</span>
				</div>
			</div>
		</section>
	);
};
