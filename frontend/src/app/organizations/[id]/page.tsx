"use client";

import { useRouter } from "next/navigation";
import { QUESTER_BADGE } from "@/assets/data";
import { useState } from "react";
import "./page.scss";
import { Star } from "@/assets/icons";

const Organizations = ({ params }: { params: { id: string } }) => {
	const group = "organizations";
	const router = useRouter();

	const details = params.id;

	const handleGoBack = () => {
		router.back();
	};

	const badgeDetails = QUESTER_BADGE.find((badge) => badge.id === details);

	// const { info } = badgeDetails;

	// console.log(info);

	return (
		<section className={group}>
			<div className={`${group}__wrapper`}>
				Organizations {params.id}
				<span
					className={`${group}__close`}
					onClick={() => {
						handleGoBack();
					}}
				>
					&times;
				</span>
				<section className={`${group}__details`}>
					<div className={`${group}__head-image`}>image</div>

					<div className={`${group}__main`}>
						<div className={`${group}__host`}>
							<p>created by base</p>

							<div>
								<img
									src=""
									alt="org__image"
								/>
								<span>hex</span>
							</div>
						</div>

						<div className={`${group}__name`}>
							<span>Frontend Engineer, Lukso</span>
							{/* title */}

							<h6 className={`${group}__title`}>Description</h6>
							<p className={`${group}__desc`}>
								{badgeDetails?.info?.desc}
							</p>

							<h6 className={`${group}__title`}>Time Stamp</h6>
							<p className={`${group}__desc`}>
								<span>from</span> <b>12-03-2021</b>{" "}
								<span>to</span> <b>09-08-2023</b>
							</p>

							<h6 className={`${group}__title`}>
								Badge Validator
							</h6>
							<p className={`${group}__desc`}>
								Brain, CEO Coinbase
							</p>

							<h6 className={`${group}__title`}>
								Excellence Rating
							</h6>
							<div>
								{[Array(badgeDetails?.info?.rating)].map(
									(item, index) => (
										<span
											key={index}
											style={{ color: "#FCFF71" }}
										>
											<Star />
										</span>
									),
								)}
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Organizations;
