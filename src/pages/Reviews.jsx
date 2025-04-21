import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Review from '../components/Review';
import Button from '../components/ui/Button';

const Reviews = () => {
    const data = useLoaderData()
    const [displayReviews, setDisplayReviews] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if (showAll) return setDisplayReviews(data)
        else return setDisplayReviews(data.slice(0, 12))
    }, [showAll, data])
    return (
        <div>
            {/* header part  */}
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl font-semibold'>Total Reviews {data.length}</h2>
                <p className='text-gray-800'>Explore dynamic Reviews Here is all of our repeated client has been given reviews and the all are satisfied.
                </p>
            </div>

            <div className='mt-6 mb-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    displayReviews.map(review => <Review key={review.reviewer_date} allReview={review} />)
                }
            </div>
            <div className='text-center mb-8'>
                <Button onClick={() => {
                    setShowAll(!showAll)
                    showAll && window.scrollTo(0, 70)
                }} label={showAll ? 'Show Less Review' : 'Show All Review'} />
            </div>
        </div>
    );
};

export default Reviews;