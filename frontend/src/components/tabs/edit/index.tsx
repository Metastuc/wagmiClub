import { FC } from "react";
import { tabProps } from "..";
import "./index.scss";

export const EditTabs: FC<tabProps> = ({ onTabChange, tabIsActive }) => {
	return (
		<section className="tab-switch">
			<div className="tab-switch__wrapper">
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
