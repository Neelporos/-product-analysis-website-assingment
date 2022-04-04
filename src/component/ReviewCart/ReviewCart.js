import React from 'react';

const ReviewCart = ({ review }) => {
    return (
        <div className='shadow-lg rounded-2xl w-{250px} bg-white p-4'>
            <h2 className='text-2xl text-center mb-4 p-4 font-bold'>{review.name}</h2>
            <img className='rounded-2xl h-44 ml-20 mb-4' src={review.picture} alt="" />
            <p>{review.review}</p>
            <p className='text-1xl font-bold mt-5'>Ratting: {review.ratting}</p>
        </div>
    );
};

export default ReviewCart;