import React from "react";
// import "./index.scss";

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
