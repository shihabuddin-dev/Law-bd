import React, { useEffect, useState } from 'react';
import Lawyer from './Lawyer';
import Button from '../ui/Button';

const Lawyers = ({ lawyersData }) => {
    // show all lawyer and show less button functionality 
    const [displayLawyers, setDisplayLawyers] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if (showAll) setDisplayLawyers(lawyersData)
        else setDisplayLawyers(lawyersData.slice(0, 6))
    }, [showAll, lawyersData])
    return (
        <div className='mt-6 md:mt-12'>
            {/* header part  */}
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl font-semibold'>Our Best Lawyers</h2>
                <p className='text-gray-800 md:w-10/12 mx-auto'>Driven by achieving client success, our 'best' lawyers actively leverage deep legal knowledge and passionate dedication. They champion your unique goals, delivering strategic advocacy and impactful, personalized representation.
                </p>
            </div>
            {/* data  sent to lawyer page */}
            <div className='mt-8 grid gap-6 md:grid-cols-2'>
                {
                    displayLawyers.map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer} />)
                }
            </div>
            <div className='text-center mt-6'>
                <Button onClick={() => {
                    setShowAll(!showAll)
                    showAll && window.scrollTo(0, 660)
                }} label={showAll ? 'Show 6 Lawyer' : 'Show All Lawyer'} />
            </div>
        </div>
    );
};

export default Lawyers;