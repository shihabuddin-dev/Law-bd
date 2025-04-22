import { useEffect } from 'react';
import { useLocation } from 'react-router';

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                document.title = 'Home | Law.BD';
                break;
            case '/about-us':
                document.title = 'About Us | Law.BD';
                break;
            case '/blogs':
                document.title = 'Blogs | Law.BD';
                break;
            case '/contact':
                document.title = 'Contact Us | Law.BD';
                break;
            case '/my-bookings':
                document.title = 'My Booking | Law.BD';
                break;
            case '/reviews':
                document.title = 'Reviews | People Reviews';
                break;
            case '/contact-us':
                document.title = 'Contact Us | Contact Us';
                break;
            default:
                document.title = 'Law.BD - Your Legal Assistant';
                break;
        }
    }, [location.pathname]);

    return null;
};


export default DynamicTitle;