import React from 'react';

const Appoints = ({ lawyerAppoint, handleDelete }) => {
    const { id, name, speciality, fees } = lawyerAppoint || {}

    return (
        <div>
            {/* Book An Appointment  */}
            <div className='border-2 border-gray-300 space-y-3 rounded-2xl p-5 md:p-6 shadow hover:shadow-lg duration-700 transform hover:-translate-y-1'>
                <div className='flex justify-center sm:justify-between items-center flex-wrap'>

                    <div>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p className='text-[#0F0F0F99]'>{speciality}</p>
                    </div>
                    <p className='text-[#0F0F0F99]'> Appointment Fee: <span className='text-[#09982F] font-semibold'> {fees}</span>  Taka</p>
                </div>
                <hr className='border-t-2 border-gray-200 border-dashed w-full ' />
                <div className='mt-5 grid ' >
                    <button onClick={() => handleDelete(id)}
                        className='border-red-400 border-2 rounded-2xl py-1 text-red-600 cursor-pointer hover:bg-red-500 duration-900 hover:text-white'>Cancel Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Appoints;