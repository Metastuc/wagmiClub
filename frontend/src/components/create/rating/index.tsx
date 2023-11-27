import React, { FC } from "react";
import { Stars } from "@/components";
import "./index.scss";

interface props {
	rating: number;
	handleRatingChange: (rating: number) => void;
}

export const Rating: FC<props> = ({ rating, handleRatingChange }) => {
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
