import React from "react";
import { clubTitles } from "../../../assets/data";
import { Reputation } from "../../../components";
import "./index.scss";

const Club = ({ group }) => {
	return (
		<section className={`${group}__club`}>
			<div className={`${group}__club-wrapper`}>
				{clubTitles.map((item, index) => {
					const {
						id,
						value: { title, color },
					} = item;

					return (
						<Reputation
							key={id || index}
							title={title}
							color={color}
							group="club"
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Club;
