import React from 'react';
import { Link } from 'react-router';

const Lawyer = ({ lawyer }) => {
    const { image, name, availability, speciality, license, experience } = lawyer || {}
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const isAvailable = availability.includes(today);
    return (
        <div className='border-2 border-gray-300 rounded-2xl p-5 md:p-6 flex flex-wrap items-center justify-center md:justify-normal gap-4 md:gap-6 shadow hover:shadow-lg duration-700 transform hover:-translate-y-1'>
            <div>
                <img className='w-48 h-48 rounded-2xl border-2 border-gray-300' src={image} alt="" />
            </div>
            <div className='space-y-2'>
                <div className='flex gap-2 flex-wrap items-center'>
                    <button className={`px-2 py-1 rounded-4xl ${isAvailable ? 'bg-[#09982F1A] text-[#09982F]' : 'bg-[#FFA00033] text-[#FFA000]'}`} >{isAvailable ? 'Available' : 'Unavailable'}</button>
                    <button className='bg-[#176AE51A] text-[#176AE5] px-2 py-1 rounded-4xl'>{experience}+ Years of experience</button>
                </div>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='text-lg text-[#0F0F0F99]'>{speciality}</p>
                <p className='text-[#0F0F0FB3] flex items-center gap-2'><span className='text-xl'>®</span> License No: {license}</p>
                <Link to={`lawyer-details/${license}`}>
                    <button className='cursor-pointer hover:bg-[#176AE5] hover:text-white text-[#176AE5] duration-900 transform hover:-translate-y-1 border-2 border-[#176AE533] py-1 w-full rounded-4xl'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Lawyer;