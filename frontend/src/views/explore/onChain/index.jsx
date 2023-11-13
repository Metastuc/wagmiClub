import React from "react";
import { orgMedals } from "../../../assets/data";
import { Badge } from "../../../components";
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
	return (
		<section className={`${group}`}>
			<div className={`${group}__wrapper`}>
				<>tabs</>

				<RenderOrgMedals group={group} />
			</div>
		</section>
	);
};

export default OnChain;
