import React from "react";
import { MarketPlace } from "../../explore";
import "./index.scss";

const LeaderBoard = ({ group }) => {
	return (
		<section className={`${group}__leaderBoard`}>
			<div className={`${group}__leaderBoard-wrapper`}>
				<div className={`${group}__leaderBoard-top`}>
					<h2>Reputation board</h2>
					<div>
						<p>
							Discover top ranked profiles <br /> user ranking is
							determined by trustscore, badges & medals achieved
							by the user
						</p>
					</div>
				</div>

				<div className={`${group}__leaderBoard-bottom`}>
					<MarketPlace
						group="marketplace"
						items={6}
					/>
				</div>
			</div>
		</section>
	);
};

export default LeaderBoard;
