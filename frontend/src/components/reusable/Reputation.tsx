import { FC } from "react";

interface props {
	group: string;
	id: number;
	title: string;
	color: string;
}
export const Reputation: FC<props> = ({ group, id, title, color }) => {
	return (
		<div
			key={id}
			className={`${group}__reputation`}
		>
			<div
				className={`${group}__reputation-wrapper`}
				style={{ backgroundColor: color }}
			>
				<div className={`${group}__reputation-text`}>
					<span>{title}</span>
				</div>
			</div>
		</div>
	);
};
