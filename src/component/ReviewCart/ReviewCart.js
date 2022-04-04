import React from 'react';

const ReviewCart = ({ review }) => {
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>
            <p>{review.name}</p>
            <img src={review.picture} alt="" />
            {review.review}
            {review.ratting}
        </div>
    );
};

export default ReviewCart;