import React from "react";

const OrgMedal = ({ type, title, image, host, group }) => {
	return (
		<section className={`${group}__wrapper`}>
			<div className={`${group}__left`}>
				<span>
					<img
						src={image}
						alt={host}
					/>
				</span>
			</div>
			<div className={`${group}__right`}>
				<span>{host}</span>
				<span>{title}</span>
				<span>{type}</span>
			</div>
		</section>
	);
};

export default OrgMedal;
