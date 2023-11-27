import { tabProps } from "..";
import { FC } from "react";
import "./index.scss";

export const ExploreTabs: FC<tabProps> = ({
	group,
	onTabChange,
	tabIsActive,
}) => {
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
