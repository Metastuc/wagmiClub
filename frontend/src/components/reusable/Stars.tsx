"use client";

import { FC, useState } from "react";
import Rating from "react-rating-stars-component";

interface props {
	rating: number;
	handleRatingChange: (rating: number) => void;
}

export const Stars: FC<props> = ({
	rating: formRating,
	handleRatingChange,
}) => {
	const [rating, setRating] = useState(formRating);

	return (
		<>
			<Rating
				count={5}
				value={rating}
				onChange={(newRating: number) => {
					setRating(newRating);
					handleRatingChange(newRating);
				}}
				size={20}
				activeColor="#FFD700"
				color="gray"
				edit={true}
			/>
		</>
	);
};
