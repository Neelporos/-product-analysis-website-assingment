import React from 'react';
import useReviews from '../../hooks/reviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h2>{reviews.length}</h2>
        </div>
    );
};

export default Reviews;