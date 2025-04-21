import React, { useState } from 'react';
import Button from './ui/Button';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = <div className='flex flex-col md:flex-row gap-3 md:gap-6 text-gray-800 md:text-lg '>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/my-bookings'>My Bookings</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/reviews'>Reviews</NavLink>
        <NavLink to='/about-us'>About Us</NavLink>
    </div>
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
                <Link className="inline-flex items-center">
                    <img className='w-10' src={logo} alt="logo" />
                    <p className="ml-2 text-2xl font-bold text-gray-800">
                        Law. BD
                    </p>
                </Link>
                <ul className="items-center hidden space-x-8 lg:flex">
                    <li>{links}</li>
                </ul>
                <ul className="items-center hidden space-x-8 lg:flex">
                    <li>
                    <NavLink to='/contact-us'> <Button label='Contact Us' /></NavLink>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border border-[#0EA106] rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <Link className="inline-flex items-center">
                                        <img className='w-10' src={logo} alt="logo" />
                                        <p className="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase">
                                            Law. BD
                                        </p>
                                    </Link>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>{links}</li>
                                        <li>
                                        <NavLink to='/contact-us'> <Button label='Contact Us' /></NavLink>
                                           
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;