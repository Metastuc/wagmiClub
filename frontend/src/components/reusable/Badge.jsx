import React from "react";
import {
	ReputationMedal,
	ReputationView as ButtonIcon,
} from "../../assets/icons";

/**
 * Badge component displays a user's Badge information.
 *
 * @component
 * @example
 * // Usage in a parent component
 * <Badge
 *    name="John Doe"
 *    title="Top Contributor"
 *    image="/path/to/medal-image.jpg"
 *    medals={100}
 * />
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the user.
 * @param {string} props.title - The title associated with the reputation Badge.
 * @param {string} props.image - The URL of the reputation Badge image.
 * @param {number} props.medals - The number of medals the user has earned.
 * @returns {JSX.Element} - React component representing a reputation Badge.
 */
const Badge = ({ name, title, image, medals, group }) => {
	return (
		<section className={`${group}__wrapper`}>
			<div className={`${group}__image`}>
				<span>
					<img
						src={image}
						alt={name}
					/>
				</span>
			</div>

			<div className={`${group}__title`}>
				<span>{name}</span>
				<span>{title}</span>
			</div>

			<div className={`${group}__footer`}>
				<div className={`${group}__medal`}>
					<span>
						{medals +
							Math.floor(Math.random() * (50 - 20 + 1)) +
							20}
					</span>
					<span>
						<ReputationMedal />
					</span>
				</div>

				<button className={`${group}__button`}>
					<span>
						<ButtonIcon />
					</span>
				</button>
			</div>
		</section>
	);
};

export default Badge;
