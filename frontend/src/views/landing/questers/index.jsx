import React from "react";
import "./index.scss";
import { Badge as BadgeIcon, Medal as MedalIcon } from "../../../assets/icons";

const Questers = ({ group }) => {
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

						<div>badges</div>

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
						lots of components
					</div>

					<div className={`${group}__questers-right_center`}>
						lots of components
					</div>

					<div className={`${group}__questers-right_bottom`}>
						lots of components
					</div>
				</div>
			</div>
		</section>
	);
};

export default Questers;
