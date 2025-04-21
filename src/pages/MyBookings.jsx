import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreAppoint, removeAppointFromLocalStorage } from '../utils/localStorage';
import Appoints from '../components/Appoints';
import EmptyAppoint from '../components/EmptyAppoint';
import Chart from '../components/Chart';

const MyBookings = () => {
    const data = useLoaderData()
    // make a use state for set data 
    const [appointList, setAppointList] = useState([])

    // filter data by using id what i stored in local storage 
    useEffect(() => {
        // get data from local storage 
        const storedAppointData = getStoreAppoint()
        const convertedStoredId = storedAppointData.map(id => parseInt(id))
        const totalAppointList = data.filter(appoint => convertedStoredId.includes(appoint.id))
        setAppointList(totalAppointList)
      
    }, [data])
   
    // data not found message 
    if (appointList.length < 1) return <EmptyAppoint />

    // delete  from local storage 
    const handleDelete = id => {
        removeAppointFromLocalStorage(id)
        const rest=appointList.filter(appoint=> appoint.id!==id)
        setAppointList(rest)
    
    }
    return (
        <div>
            <Chart appointList={appointList}/>
            {/* header part  */}
            <div className='text-center py-8 md:py-12 space-y-3'>
                <h2 className='text-3xl md:text-4xl font-semibold'>My Today Appointments</h2>
                <p className='text-gray-800'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                </p>
            </div>
            <div className='pb-8 md:pb-12 space-y-5'>
                {
                    appointList.map(lawyerAppoint => <Appoints key={lawyerAppoint.id} lawyerAppoint={lawyerAppoint} handleDelete={handleDelete} />)
                }
            </div>

        </div>
    );
};

export default MyBookings;