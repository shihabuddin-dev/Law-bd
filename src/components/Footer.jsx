import React from 'react';
import { Link, NavLink } from 'react-router';
import logoFooter from '../assets/logo-footer.png'
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";


const Footer = () => {
    const links = <div className='flex flex-col md:flex-row gap-3 md:gap-6 md:text-lg '>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/my-bookings'>My Bookings</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/reviews'>Reviews</NavLink>
        <NavLink to='/about-us'>About Us</NavLink>
    </div>
    return (
        <div className='bg-black'>
            <div className='container mx-auto py-12 px-4 md:px-6 lg:px-8 md:p-16 text-white flex justify-center items-center gap-4 flex-col'>
                <Link className="flex flex-wrap items-center">
                    <img className='w-10' src={logoFooter} alt="logo" />
                    <span className="ml-2 text-2xl font-bold tracking-wide uppercase">
                        Law. BD
                    </span>
                </Link>
                <ul>
                    <li>{links}</li>
                </ul>
                <hr className='border-t-2 border-gray-700 border-dashed w-full ' />
                <div className='text-2xl md:text-3xl flex flex-wrap gap-4'>
                    <a href='https://github.com/shihabuddin-dev' target='blank'><FaGithub /> </a>
                    <a href='https://www.linkedin.com/in/shihabuddinreal' target='blank'><FaLinkedin /> </a>
                    <a href='https://www.facebook.com/shihabuddinReal' target='blank'><FaFacebook /></a>
                    <a href='https://x.com/shihabuddinreal' target='blank'><FaTwitter /> </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;