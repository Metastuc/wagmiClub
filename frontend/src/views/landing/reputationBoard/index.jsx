import React, { useState } from "react";
import {
	ReputationTabs as Tabs,
	Dropdown,
	Medal as ReputationMedal,
} from "../../../components";
import { personal, reputation } from "../../../assets/data";
import { useTabSwitcher } from "../../../hooks";
import "./index.scss";

/**
 * ReputationBoard component displays a user's reputation board with tabs for different reputation categories.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.group - The group identifier for styling and component organization.
 * @returns {JSX.Element} - React component representing a user's reputation board.
 */
const ReputationBoard = ({ group }) => {
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
							<Tabs
								group={group}
								onTabChange={handleTabClick}
								tabIsActive={tabIsActive}
							/>
						</div>
						<div>
							<Dropdown
								group={group}
								options={personal}
								selectedValue={selected}
								onChange={(event) => {
									setSelected(event);
								}}
							/>
						</div>
					</div>
					<div className={`${group}__reputationBoard-board_bottom`}>
						<div className={`${group}__reputationBoard-grid`}>
							{reputation.map((item, index) => {
								return (
									<div
										className="reputation-medal"
										key={index}
									>
										<ReputationMedal
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

export default ReputationBoard;
