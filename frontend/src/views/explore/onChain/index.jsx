import React from "react";
import { Badge, OnchainTabs as Tab } from "../../../components";
import { orgMedals } from "../../../assets/data";
import { useTabSwitcher } from "../../../hooks";
import "./index.scss";

export const RenderOrgMedals = function ({ group }) {
	return (
		<div className={`${group}__medals`}>
			{orgMedals.map((item, index) => {
				const { id, value } = item;

				return (
					<div
						key={index | id}
						className={`${group}__medal`}
					>
						<Badge
							{...value}
							group={`${group}__medal`}
						/>
					</div>
				);
			})}
		</div>
	);
};

const OnChain = ({ group }) => {
	const { activeTab, handleTabClick, tabIsActive } = useTabSwitcher("active");

	return (
		<section className={`${group}`}>
			<div className={`${group}__wrapper`}>
				<>
					{/* Tab switcher component for switching between personal, details, and socials tabs */}
					<Tab
						group={group}
						onTabChange={handleTabClick}
						tabIsActive={tabIsActive}
					/>
				</>

				<RenderOrgMedals group={group} />
			</div>
		</section>
	);
};

export default OnChain;
