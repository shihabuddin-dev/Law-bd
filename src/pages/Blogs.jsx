import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../components/Blog';

const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div className='mb-8'>
            {/* header part  */}
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-4xl font-semibold'>Blogs</h2>
                <p className='text-gray-800'>Explore dynamic question and answer related to the programming concept like React and React Router...
                </p>
            </div>
           <div className='mt-4'>
           {
                blogs.map((blog,i) => <Blog key={i} blog={blog} />)
            }
           </div>
        </div>
    );
};

export default Blogs;