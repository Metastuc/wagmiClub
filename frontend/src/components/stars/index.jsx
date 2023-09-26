import { useState } from 'react';
import Rating from 'react-rating-stars-component';

const Stars = () => {
    const [rating, setRating] = useState(0);

    return (
        <>
            <Rating
                count={5}
                value={rating}
                onChange={(newRating) => setRating(newRating)}
                size={24}
                activeColor="red"
                color="gray"
                edit={true}
            />
            <p>Current Rating: {rating}</p>
        </>
    );
};


export default Stars;