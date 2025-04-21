import React from 'react';
import { FiAlertOctagon } from 'react-icons/fi';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import Button from '../../components/ui/Button';
import { addAppointToLocalStorage } from '../../utils/localStorage';
import SpecificError from '../../components/SpecificError';
import toast from 'react-hot-toast';


const ViewDetails = () => {
    const navigate = useNavigate()
    const lawyersData = useLoaderData()
    const { lawyerLicense } = useParams()
    // finding single lawyer data 
    const findLawyer = lawyersData.find(lawyer => lawyer.license === lawyerLicense)
    const { id, image, name, speciality, license, experience, availability, fees } = findLawyer || {}
    if (!findLawyer) {
        return <SpecificError lawyerLicense={lawyerLicense} />
    }

    // added today date for available or unavailable
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const isAvailable = availability.includes(today);

    // set to local storage handle click function 
    const handleBookAnAppoint = (id) => {
        // store data with id 
        const isAdded = addAppointToLocalStorage(id)
        if (isAdded) {
            toast.success(`Appoint Schedule for ${name} Successfully`)
            navigate('/my-bookings')
        }
        else toast.error(`${name} is already added!`);
    }
    return (
        <div className='mb-12 mt-2 space-y-6'>
            <div className='space-y-5'>
                {/* Lawyer profile top */}
                <div className='text-center space-y-4 bg-[#0F0F0F0D] p-8 md:p-16 rounded-2xl'>
                    <h2 className='text-2xl md:text-3xl font-semibold'>Lawyer’s Profile Details</h2>
                    <p className='text-gray-800 md:w-10/12 mx-auto'>Quality representation by dedicated professionals, offering strategic counsel focused on your successful outcomes.
                    </p>
                </div>

                {/* Lawyer’s Profile Details */}
                <div className='border-2 border-gray-300 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow hover:shadow-lg duration-700 transform hover:-translate-y-1'>
                    <div>
                        <img className='w-48 h-48 rounded-2xl border-2 border-gray-300' src={image} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <button className='bg-[#176AE51A] text-[#176AE5] px-2 py-1 rounded-4xl'>{experience}+ Years of experience</button>
                        <h3 className='text-2xl font-semibold'>{name}</h3>
                        <div className='flex gap-8 items-center flex-wrap'>
                            <p className='text-lg text-[#0F0F0F99]'>{speciality}</p>
                            <p className='text-[#0F0F0FB3] flex items-center gap-2'><span className='text-xl'>®</span> License No: {license}</p>
                        </div>
                        <div className='flex gap-2 items-center flex-wrap '><span className='font-semibold text-[#141414B3]' >Availability</span>
                            {availability.map((day, i) => <button key={i} className='bg-[#FFA00033] text-[#FFA000] border-1 px-2 py- rounded-4xl'>{day}</button>)}
                        </div>
                        <div className='flex gap-2 items-center flex-wrap font-semibold '><span className='text-[#141414B3]'>Consult Fee:</span>
                            <span className='text-[#0EA106]'>Taka: {fees}</span>
                        </div>
                    </div>
                </div>

                {/* Book An Appointment  */}
                <div className='border-2 border-gray-300 space-y-3 rounded-2xl p-5 md:p-6 shadow hover:shadow-lg duration-700 transform hover:-translate-y-1'>
                    <h3 className='text-2xl font-semibold text-center'>Book An Appointment</h3>
                    <hr className='border-t-2 border-gray-200 border-dashed w-full ' />
                    <div className='flex justify-between items-center'><p className='font-semibold text-[#141414B3]'>Availability</p>
                        <button className={`px-2 py-1 rounded-4xl border-1 ${isAvailable ? 'bg-[#09982F1A] text-[#09982F]' : 'bg-[#FFA00033] text-[#FFA000]'}`} >{isAvailable ? 'Available' : 'Unavailable'}</button>
                    </div>
                    <hr className='border-t-2 border-gray-200 border-dashed w-full ' />
                    <button className='px-2 py-1 rounded-4xl flex items-center gap-2 bg-[#FFA00033] text-[#FFA000]' >
                        <FiAlertOctagon className='text-lg' /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>
                    <div className='mt-5 grid' >
                        <Button
                            onClick={() => handleBookAnAppoint(id)}
                            label={isAvailable ? 'Book Appointment Now' : 'UnAvailable'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;