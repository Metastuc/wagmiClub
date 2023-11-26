"use client";

import { useState } from "react";
import {
	PERSONAL_ACCOUNT_OPTIONS,
	REPUTATION_LEADERBOARD,
} from "@/assets/data";
import { useTabSwitcher } from "@/hooks";
import "./index.scss";
import { ReputationTabs, Dropdown, Medal } from "@/components";

export const ReputationBoard = ({ group }: { group: string }) => {
	const { activeTab, handleTabClick, tabIsActive } = useTabSwitcher("badge");
	const [selected, setSelected] = useState("");

	return (
		<section className={`${group}__reputationBoard`}>
			<div className={`${group}__reputationBoard-wrapper`}>
				<div className={`${group}__reputationBoard-header`}>
					<h2>ReputationBoard</h2>
				</div>

				<div className={`${group}__reputationBoard-text`}>
					<p>
						medals are claimed and collected onchain as an icon of
						reputation within a specific blockchain, think of
						achievements like top liquidity providers or NFT
						collectors.
					</p>
				</div>

				<section className={`${group}__reputationBoard-board`}>
					<div className={`${group}__reputationBoard-board_top`}>
						<div>
							<ReputationTabs
								group={group}
								onTabChange={handleTabClick}
								tabIsActive={tabIsActive}
							/>
						</div>
						<div>
							<Dropdown
								group={group}
								options={PERSONAL_ACCOUNT_OPTIONS}
								selectedValue={selected}
								onChange={(event: any) => {
									setSelected(event);
								}}
							/>
						</div>
					</div>
					<div className={`${group}__reputationBoard-board_bottom`}>
						<div className={`${group}__reputationBoard-grid`}>
							{REPUTATION_LEADERBOARD.map((item, index) => {
								return (
									<div
										className="reputation-medal"
										key={index}
									>
										<Medal
											{...item}
											group={"reputation-medal"}
										/>
									</div>
								);
							})}
						</div>
						<div className={`${group}__reputationBoard-action`}>
							<button>
								<span>See All</span>
							</button>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};
