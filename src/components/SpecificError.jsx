import React from 'react';
import { Link } from 'react-router';
import Button from './ui/Button';

const SpecificError = ({ lawyerLicense }) => {

    return (
        <div className='pb-12'>
            {/* header part  */}
            <div className='text-center space-y-4 bg-[#0F0F0F0D] p-8 md:p-16 rounded-2xl'>
                <h2 className='text-2xl md:text-3xl font-semibold'>No Lawyer Found!!</h2>
                <p className='text-red-500 md:w-10/12 mx-auto'>No Lawyer Found with this License Number
                </p>
                <p className='text-gray-800 md:w-10/12 mx-auto flex justify-center items-center gap-2 font-semibold'> <span className='text-xl'>®</span> <span>Invalid Root {lawyerLicense}</span>
                </p>
                <Link to='/'><Button label='Back to Home' /></Link>
            </div>


        </div>
    );
};

export default SpecificError;