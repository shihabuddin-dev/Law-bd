import React, { useState } from 'react';
import Hero from '../components/Hero';
import Lawyers from '../components/lawyers/Lawyers';
import Service from '../components/Service';
import { useLoaderData } from 'react-router';
import Button from '../components/ui/Button';

const Home = () => {
    const data = useLoaderData()
    const [lawyers, setLawyers] = useState(data)
    const [searchText, setSearchText] = useState('')
    const handleSearch = (e, text) => {
        e.preventDefault()
        if (text === '') return setLawyers(data)
        const searchLawyers = data.filter(lawyer => lawyer.name.toLowerCase().includes(text.toLowerCase()) || lawyer.speciality.toLowerCase().includes(text.toLowerCase()))
        setLawyers(searchLawyers)
        console.log(searchLawyers)
    }
    return (
        <div>
            <Hero />
            <form
                onSubmit={(e) => {
                    handleSearch(e, searchText)
                    // reset text from input 
                    setSearchText('')
                }}
                className='flex gap-4 flex-col md:flex-row pt-3 justify-center items-center mt-8'>

                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder='Search by Lawyer name or Speciality of law' className='border shadow px-4 py-2 w-2/3 md:w-1/3 rounded-md border-gray-300 focus:outline-[#23BE0A]' />
                <Button type='submit' label='Search' />
            </form>
            <Lawyers lawyersData={lawyers} />
            <Service />

        </div>
    );
};

export default Home;