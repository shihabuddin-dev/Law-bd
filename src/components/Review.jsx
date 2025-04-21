import React from 'react';

const Review = ({ allReview }) => {
    const { review_title, reviewer_description, reviewer_date, reviewer_name, review } = allReview || {}
    return (
        <div className='border-2 border-gray-300 p-4 rounded-2xl duration-700 transform hover:-translate-y-2 space-y-1 cursor-pointer'>
            <p className='text-sm text-gray-600'>{reviewer_description}</p>
            <p className='font-semibold text-lg'>{review_title}</p>
            <p className='text-sm'>{review}</p>
            <p className='text-sm font-semibold'>{reviewer_name}</p>
            <p className='text-sm text-gray-600'>Date: {reviewer_date}</p>
        </div>
    );
};

export default Review;