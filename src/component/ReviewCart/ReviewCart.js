import React from 'react';

const ReviewCart = ({ review }) => {
    return (
        <div>
            <p>{review.name}</p>

            {review.review}
        </div>
    );
};

export default ReviewCart;