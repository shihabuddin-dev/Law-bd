import React from 'react';
import lawyer from '../assets/success-lawyer.png'
import review from '../assets/success-review.png'
import initiated from '../assets/success-initiated.png'
import staffs from '../assets/success-staffs.png'
import CountUp from 'react-countup';

const Service = () => {

    return (
        <div className='pb-12 md:pb-16 mt-6 md:mt-12'>
            {/* header part  */}
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl font-semibold'>We Provide Best Law Service</h2>
                <p className='text-gray-800'>Quality representation by dedicated professionals, offering strategic counsel focused on your successful outcomes.
                </p>
            </div>
            {/* card  */}
            <div className='flex gap-4 flex-wrap justify-center items-center mt-6'>
                <div className='py-8 pl-8 px-24 bg-[#0F0F0F0D] rounded-lg space-y-1.5 border-2 border-gray-200 hover:shadow-lg duration-700 transform shadow hover:-translate-y-2'>
                    <img src={lawyer} className='w-16 h-14 object-cover' alt="" />
                    <h3 className='text-3xl md:text-4xl font-semibold'>
                        <CountUp start={0} end={199} enableScrollSpy duration={5} />+</h3>
                    <p className='md:text-lg text-[#0F0F0F99]'>Total Lawyer</p>
                </div>
                <div className='py-8 pl-8 px-24 bg-[#0F0F0F0D] rounded-lg space-y-1.5 border-2 border-gray-200 hover:shadow-lg duration-700 transform shadow hover:-translate-y-2'>
                    <img src={review} className='w-16 h-14 object-cover' alt="" />
                    <h3 className='text-3xl md:text-4xl font-semibold'>
                        <CountUp start={0} end={390} enableScrollSpy duration={5} />+</h3>
                    <p className='md:text-lg text-[#0F0F0F99]'>Total Reviews</p>
                </div>
                <div className='py-8 pl-8 px-24 bg-[#0F0F0F0D] rounded-lg space-y-1.5 border-2 border-gray-200 hover:shadow-lg duration-700 transform shadow hover:-translate-y-2'>
                    <img src={initiated} className='w-16 h-14 object-cover' alt="" />
                    <h3 className='text-3xl md:text-4xl font-semibold'> <CountUp start={0} end={2153} enableScrollSpy duration={5} />+</h3>
                    <p className='md:text-lg text-[#0F0F0F99]'>Total Initiated</p>
                </div>
                <div className='py-8 pl-8 px-24 bg-[#0F0F0F0D] rounded-lg space-y-1.5 border-2 border-gray-200 hover:shadow-lg duration-700 transform shadow hover:-translate-y-2'>
                    <img src={staffs} className='w-16 h-14 object-cover' alt="img" />
                    <h3 className='text-3xl md:text-4xl font-semibold'>
                        <CountUp start={0} end={371} enableScrollSpy duration={5} /> +</h3>
                    <p className='md:text-lg text-[#0F0F0F99]'>Total Stuffs</p>
                </div>

            </div>
        </div>
    );
};

export default Service;