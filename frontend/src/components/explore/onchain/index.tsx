import { ORGANIZATION_MEDALS } from "@/assets/data";
import { Badge } from "@/components";
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
	return <div>OnChain</div>;
};
