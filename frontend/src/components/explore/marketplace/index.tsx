"use client";

import { useEffect, useState } from "react";
import {
	PERSONAL_ACCOUNT_OPTIONS,
	REPUTATION_LEADERBOARD,
} from "@/assets/data";
import { ReputationMedal } from "@/assets/icons";
import { Dropdown, MarketPlaceTabs, Medal } from "@/components";
import { useTabSwitcher } from "@/hooks";
import "./index.scss";

export const MarketPlace = ({
	group,
	items,
}: {
	group: string;
	items?: number | undefined;
}) => {
	const [selected, setSelected] = useState("Advisor");
	const { activeTab, handleTabClick, tabIsActive } = useTabSwitcher("badges");
	const [users, setUsers] = useState<any>([]);

	useEffect(() => {
		function displayUsers(
			allUsers: any[],
			numberToDisplay: number | undefined,
		) {
			if (numberToDisplay === 0 || numberToDisplay === null) {
				return allUsers;
			}

			// Shuffling the users' data
			const shuffled = allUsers.sort(() => Math.random() - 0.5);

			// Limiting the displayed users based on the given number
			return shuffled.slice(0, numberToDisplay);
		}

		setUsers(displayUsers(REPUTATION_LEADERBOARD, items));
	}, [selected, activeTab]);

	return (
		<section className={`${group}`}>
			<div className={`${group}__wrapper`}>
				<div className={`${group}__header`}>
					<div className={`${group}__title`}>
						<span>Reputation board</span>
						<span>
							<ReputationMedal />
						</span>
					</div>

					<>
						<Dropdown
							group={group}
							options={PERSONAL_ACCOUNT_OPTIONS}
							selectedValue={selected}
							onChange={(event) => {
								setSelected(event);
							}}
						/>
					</>
				</div>

				<>
					<MarketPlaceTabs
						group={group}
						onTabChange={handleTabClick}
						tabIsActive={tabIsActive}
					/>
				</>

				<div className={`${group}__badges`}>
					{users.map((item: any, index: number) => {
						return (
							<div
								key={index}
								className={`${group}__badge`}
							>
								<Medal
									{...item}
									group={`${group}__badge`}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
