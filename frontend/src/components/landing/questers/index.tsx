"use client";

import {
	Badge as BadgeIcon,
	Medal as MedalIcon,
	Verified,
} from "@/assets/icons";
import { INDIVIDUAL_MEDALS, QUESTER, QUESTER_BADGE } from "@/assets/data";
import { RenderOrgMedals } from "@/components/explore";
import "./index.scss";

export const RenderQuesterBadges = () => {
	return (
		<div>
			{QUESTER_BADGE.slice(0, 4).map((item, index) => {
				const {
					id,
					value: { image, name, verified },
				} = item;

				return (
					<div key={id || index}>
						<i>
							<BadgeIcon />
						</i>

						<img
							key={id || index}
							src={image}
							alt={name}
						/>

						<span>
							{name}
							{verified && (
								<i>
									<Verified />
								</i>
							)}
						</span>
					</div>
				);
			})}
		</div>
	);
};

export const Questers = ({ group }: { group: string }) => {
	return (
		<section className={`${group}__questers`}>
			<div className={`${group}__questers-wrapper`}>
				<div className={`${group}__questers-left`}>
					<div className={`${group}__questers-left_top`}>
						<h2>
							Earn reputation <span>badge</span>
							<span>
								<BadgeIcon />
							</span>
						</h2>

						<RenderQuesterBadges />

						<p>
							Reputation badge is an icon of credibility,
							achievements, skillset or recognition given to
							merited people by organisations, DAOs. <br /> It is
							a professional stamp or testimonial!
						</p>
					</div>

					<div className={`${group}__questers-left_center`}>
						<h2>
							Collect merit <span>medals</span> onchain
							<span>
								<MedalIcon />
							</span>
						</h2>

						<p>
							Medals are claimed and collected onchain as an icon
							of reputation within a specific blockchain, think of
							achievements like top liquidity providers, Nft
							collectors...
						</p>
					</div>

					<div className={`${group}__questers-left_bottom`}>
						<form action="">
							<input
								type="email"
								name="email"
								id="email"
								placeholder="enter email address"
							/>
							<button
								onClick={(event) => {
									event.preventDefault();
								}}
								type="submit"
							>
								Get early access
							</button>
						</form>
					</div>
				</div>

				<div className={`${group}__questers-right`}>
					<div className={`${group}__questers-right_top`}>
						<span>Medals</span>
						<RenderOrgMedals group={"questers"} />
					</div>

					<div className={`${group}__questers-right_center`}>
						<div>
							<h3>
								Questers <span>3217</span>
							</h3>
							<div
								className={`${group}__questers-right_center-container`}
							>
								{QUESTER.map((item, index) => {
									const {
										id,
										value: { image, winner },
									} = item;

									return (
										<div
											key={index || id}
											className={`${group}__questers-right_center-wrapper`}
										>
											{winner && (
												<span id="icon">
													<MedalIcon />
												</span>
											)}
											<span
												id="image"
												style={{
													borderWidth: winner
														? "3px"
														: "1px",
													borderColor: winner
														? "#E5F77A"
														: "#FFFFFF",
													borderStyle: "solid",
												}}
											>
												<img
													src={image}
													alt=""
												/>
											</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<div className={`${group}__questers-right_bottom`}>
						<div>
							{INDIVIDUAL_MEDALS.map((item, index) => {
								const {
									id,
									value: { honours, name, host, image },
								} = item;
								return (
									<div
										key={index || id}
										className={`${group}__questers-right_bottom-container`}
									>
										<div
											className={`${group}__questers-right_bottom-wrapper`}
										>
											<div
												className={`${group}__questers-right_bottom-left`}
											>
												<span>
													<img
														src={image}
														alt=""
													/>
												</span>
											</div>
											<div
												className={`${group}__questers-right_bottom-center`}
											>
												<div>
													<span>{name}</span>
													<span>{honours}</span>
												</div>
												<span>
													<MedalIcon />
												</span>
											</div>
											<div
												className={`${group}__questers-right_bottom-right`}
											>
												<span>
													<img
														src={host}
														alt=""
													/>
												</span>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
