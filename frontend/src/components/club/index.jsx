import React from "react";
// import { clubTitles } from "../../assets/data";
import "./index.scss";

const ClubItem = ({ group, color, id, index, title }) => {
	return (
		// <section className={`${group}__club`}>
		// 	<div className={`${group}__club-wrapper`}>
		// 		{clubTitles.map((item, index) => {
		// 			const {
		// 				id,
		// 				value: { title, color },
		// 			} = item;

		// 			return (
		// 				<div
		// 					key={id || index}
		// 					className="club__parent"
		// 				>
		// 					<div
		// 						className="club__child"
		// 						style={{ backgroundColor: color }}
		// 					>
		// 						<div className="club__text">
		// 							<span>{title}</span>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			);
		// 		})}
		// 	</div>
		// </section>
		<div
			key={id || index}
			className={`${group}__club`}
		>
			<div
				className={`${group}__club-wrapper`}
				style={{ backgroundColor: color }}
			>
				<div className={`${group}__club-text`}>
					<span>{title}</span>
				</div>
			</div>
		</div>
	);
};

export default ClubItem;
