"use client";

import { FC, useEffect, useState } from "react";
import { ReputationMedal, ReputationView as ButtonIcon } from "@/assets/icons";

interface props {
	name: string;
	title: string;
	image: string;
	medals: number;
	group: string;
}

export const Medal: FC<props> = ({ name, title, image, medals, group }) => {
	const [randomMedals, setRandomMedals] = useState<number | null>(null);

	useEffect(() => {
		// Generate a random number only on the client side
		setRandomMedals(
			medals + Math.floor(Math.random() * (50 - 20 + 1)) + 20,
		);
	}, [medals]);

	return (
		<section className={`${group}__wrapper`}>
			<div className={`${group}__image`}>
				<span>
					<img
						src={image}
						alt={name}
					/>
				</span>
			</div>

			<div className={`${group}__title`}>
				<span>{name}</span>
				<span>{title}</span>
			</div>

			<div className={`${group}__footer`}>
				<div className={`${group}__medal`}>
					<span>{randomMedals}</span>
					<span>
						<ReputationMedal />
					</span>
				</div>

				<button className={`${group}__button`}>
					<span>
						<ButtonIcon />
					</span>
				</button>
			</div>
		</section>
	);
};
