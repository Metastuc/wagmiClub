import React from "react";
import Stars from "../../stars";
import "./index.scss";

/**
 * Rating component for displaying and updating the excellence rating.
 *
 * @component
 * @param {number} rating - The current rating value.
 * @param {Function} handleRatingChange - Callback function to handle rating changes.
 * @returns {JSX.Element} - A React component representing the badge rating section.
 */
const Rating = ({ rating, handleRatingChange }) => {
	return (
		<div className="badge__rating">
			{/* Label for the excellence rating input */}
			<label
				htmlFor="rating"
				className="badge__rating-label"
			>
				Excellence rating
			</label>
			<div className="badge__rating-wrapper">
				{/* Stars component for displaying and updating the rating */}
				<Stars
					rating={rating}
					handleRatingChange={handleRatingChange}
				/>
			</div>
		</div>
	);
};

export default Rating;
