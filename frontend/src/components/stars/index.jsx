import { useState } from "react";
import Rating from "react-rating-stars-component";

const Stars = ({ rating: formRating, handleRatingChange }) => {
	const [rating, setRating] = useState(formRating);

	return (
		<>
			<Rating
				count={5}
				value={rating}
				onChange={(newRating) => {
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

export default Stars;
