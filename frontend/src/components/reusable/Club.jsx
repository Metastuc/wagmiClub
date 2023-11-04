import React from "react";

/**
 * Functional component representing a club item.
 *
 * @component
 *
 * @param {Object} props - The properties of the club component.
 * @param {string} props.group - The group identifier for styling.
 * @param {string} props.color - The background color of the club item.
 * @param {number} props.id - The unique identifier of the club item.
 * @param {string} props.title - The title or text displayed on the club item.
 * @returns {React.Element} React element representing the club item.
 */
const Club = ({ group, color, id, title }) => {
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

export default Club;
