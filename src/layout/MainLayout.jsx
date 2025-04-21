import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../pages/Header';

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className='min-h-[calc(100vh-361px)] container mx-auto px-4 md:px-6 lg:px-8'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;