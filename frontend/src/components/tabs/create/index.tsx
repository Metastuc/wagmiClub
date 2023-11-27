import { FC } from "react";
import { tabProps } from "..";
import "./index.scss";

export const CreateTabs: FC<tabProps> = ({ onTabChange, tabIsActive }) => {
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
