import React from 'react';
import useReviews from '../../hooks/reviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='px-20 py-5 mx-auto max-w-7xl'>
            <p className='text-4xl font-bold text-center mb-10'>Customer Reviews</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5 '>
                {
                    reviews.map(review =>
                        <ReviewCart key={review._id} review={review}></ReviewCart>
                    )
                }
            </div>

        </div>
    );
};

export default Reviews;