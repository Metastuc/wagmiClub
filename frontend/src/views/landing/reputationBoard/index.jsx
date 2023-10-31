import React, { useState } from "react";
import { ReputationTabs as Tabs, Dropdown } from "../../../components";
import { useTabSwitcher } from "../../../hooks";
import { personal } from "../../../assets/data";
import "./index.scss";

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
						reputation within as specific blockchain, think of
						achievements like top liquidity providers Nft collector
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
						{/* {"selected option: " + selected} */}
					</div>
					<div className={`${group}__reputationBoard-board_bottom`}>
						<div className={`${group}__reputationBoard-grid`}>
							{[...Array(18)].map((_, index) => {
								return <div key={index}>hello world</div>;
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
