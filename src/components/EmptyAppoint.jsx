import React from 'react';
import Button from './ui/Button';
import { Link } from 'react-router';

const EmptyAppoint = () => {
    return (
        <div className='text-center space-y-4 pt-4 pb-6'>
            <h2 className='text-3xl md:text-4xl font-semibold'>No Appoint Available</h2>
            <p className='text-gray-800'>Quality representation by dedicated professionals, offering strategic counsel focused on your successful outcomes.
            </p>
            <Link to='/'>  <Button label='Add Appoint' /></Link>
        </div>

    );
};

export default EmptyAppoint;