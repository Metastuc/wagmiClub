import { FC } from "react";
import { tabProps } from "..";
import "./index.scss";

export const ReputationTabs: FC<tabProps> = ({
	group,
	onTabChange,
	tabIsActive,
}) => {
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
