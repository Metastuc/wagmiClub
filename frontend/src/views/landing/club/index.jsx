import React from "react";
import { clubTitles } from "../../../assets/data";
import { Reputation } from "../../../components";
import "./index.scss";

/**
 * Functional component representing a club section with reputation badges.
 *
 * @component
 *
 * @param {Object} props - The properties of the Club component.
 * @param {string} props.group - The group identifier for styling.
 * @returns {React.Element} React element representing the club section.
 */
const Club = ({ group }) => {
	return (
		<section className={`${group}__club`}>
			<div className={`${group}__club-wrapper`}>
				{/* Map through clubTitles array and render Reputation component for each item */}
				{clubTitles.map((item, index) => {
					const {
						id,
						value: { title, color },
					} = item;

					return (
						<Reputation
							key={id || index} // Use id as the key if available, otherwise use index
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

export default Club;
