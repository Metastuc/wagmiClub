import React, { useState } from "react";
import { reputation, personal } from "../../../assets/data";
import { ReputationMedal } from "../../../assets/icons";
import { Medal, Dropdown } from "../../../components";
import "./index.scss";

/**
 * Functional component representing the Marketplace section.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.group - Group identifier for styling
 * @param {number} props.items - Number of items to display in the leaderboard
 * @returns {JSX.Element} Marketplace component JSX
 */
const MarketPlace = ({ group, items }) => {
	const [selected, setSelected] = useState("Advisor");

	/**
	 * Function to shuffle and limit the number of users to display.
	 *
	 * @param {Array} allUsers - Array of all users' data
	 * @param {number} numberToDisplay - Number of users to display (0 for all)
	 * @returns {Array} Shuffled and limited users' data
	 */
	function displayUsers(allUsers, numberToDisplay) {
		if (numberToDisplay === 0 || numberToDisplay === null) {
			return allUsers;
		}

		// Shuffling the users' data
		const shuffled = allUsers.sort(() => Math.random() - 0.5);

		// Limiting the displayed users based on the given number
		return shuffled.slice(0, numberToDisplay);
	}

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
							options={personal}
							selectedValue={selected}
							onChange={(event) => {
								setSelected(event);
							}}
						/>
					</>
				</div>

				<div className={`${group}__tabs`}>tabs</div>

				<div className={`${group}__badges`}>
					{displayUsers(reputation, items).map((item, index) => {
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

export default MarketPlace;
