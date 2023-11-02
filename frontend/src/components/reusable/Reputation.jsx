import React from "react";

/**
 * Functional component representing a reputation badge.
 *
 * @component
 *
 * @param {Object} props - The properties of the reputation component.
 * @param {string} props.group - The group identifier for styling.
 * @param {string} props.color - The background color of the reputation badge.
 * @param {number} props.id - The unique identifier of the reputation badge.
 * @param {string} props.title - The title or text displayed on the reputation badge.
 * @returns {React.Element} React element representing the reputation badge.
 */
const Reputation = ({ group, color, id, title }) => {
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

export default Reputation;
