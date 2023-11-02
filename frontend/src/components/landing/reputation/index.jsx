import React from "react";
import { ReputationMedal as Icon, ReputationView } from "../../../assets/icons";
import "./index.scss";

/**
 * ReputationMedal component displays a user's reputation medal information.
 *
 * @component
 * @example
 * // Usage in a parent component
 * <ReputationMedal
 *    name="John Doe"
 *    title="Top Contributor"
 *    image="/path/to/medal-image.jpg"
 *    medals={100}
 * />
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the user.
 * @param {string} props.title - The title associated with the reputation medal.
 * @param {string} props.image - The URL of the reputation medal image.
 * @param {number} props.medals - The number of medals the user has earned.
 * @returns {JSX.Element} - React component representing a reputation medal.
 */
const ReputationMedal = ({ name, title, image, medals }) => {
	return (
		<section className="reputation-medal__wrapper">
			<div className="reputation-medal__image">
				<span>
					<img
						src={image}
						alt={name}
					/>
				</span>
			</div>

			<div className="reputation-medal__title">
				<span>{name}</span>
				<span>{title}</span>
			</div>

			<div className="reputation-medal__footer">
				<div className="reputation-medal__medal">
					<span>
						{medals +
							Math.floor(Math.random() * (50 - 20 + 1)) +
							20}
					</span>
					<span>
						<Icon />
					</span>
				</div>

				<button className="reputation-medal__button">
					<span>
						<ReputationView />
					</span>
				</button>
			</div>
		</section>
	);
};

export default ReputationMedal;
