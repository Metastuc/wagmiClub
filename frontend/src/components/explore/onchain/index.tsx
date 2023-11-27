import { ORGANIZATION_MEDALS } from "@/assets/data";
import { useTabSwitcher } from "@/hooks";
import { Badge, OnchainTabs } from "@/components";
import "./index.scss";

export const RenderOrgMedals = function ({ group }: { group: string }) {
	return (
		<div className={`${group}__medals`}>
			{ORGANIZATION_MEDALS.map((item: any, index: number) => {
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
export const OnChain = ({ group }: { group: string }) => {
	const { activeTab, handleTabClick, tabIsActive } = useTabSwitcher("active");

	return (
		<section className={`${group}`}>
			<div className={`${group}__wrapper`}>
				<>
					{/* Tab switcher component for switching between personal, details, and socials tabs */}
					<OnchainTabs
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
