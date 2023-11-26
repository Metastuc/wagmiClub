import { CLUB_TILES } from "@/assets/data";
import { Reputation } from "@/components";
import "./index.scss";

export const Club = ({ group }: { group: string }) => {
	return (
		<section className={`${group}__club`}>
			<div className={`${group}__club-wrapper`}>
				{/* Map through CLUB_TILES array and render Reputation component for each item */}
				{CLUB_TILES.map((item, index) => {
					const {
						id,
						value: { title, color },
					} = item;

					return (
						<Reputation
							key={id || index} // Use id as the key if available, otherwise use index
							id={id}
							title={title}
							color={color}
							group="club" // Set the group prop for Reputation component
						/>
					);
				})}
			</div>
		</section>
	);
};
