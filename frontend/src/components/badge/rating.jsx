import React from "react";
import Stars from "../stars";

const Rating = ({ rating, handleRatingChange }) => {
	return (
		<div className="badge-rating">
			<label
				htmlFor="rating"
				className="badge-rating__label"
			>
				Excellence rating
			</label>
			<div className="badge-rating__wrapper">
				<Stars
					rating={rating}
					handleRatingChange={handleRatingChange}
				/>
			</div>
		</div>
	);
};

export default Rating;
