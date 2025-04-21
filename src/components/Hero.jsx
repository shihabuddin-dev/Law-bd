import React from 'react';

const Hero = () => {
    return (
        <div className='hero-banner text-white flex justify-center flex-col items-center mt-2'>
            <div className='text-center space-y-6 px-2 md:px-0'>
                <h1 className='text-3xl md:text-5xl font-semibold md:leading-14 md:w-8/12 mx-auto '>Providing trusted counsel and strategic advocacy to protect your rights and best interests.</h1>
                <p className='md:w-9/12 mx-auto '>Legal matters require careful guidance and decisive action. We provide trusted counsel grounded in experience, ensuring you fully understand your position and options. Our approach blends strategy with assertive advocacy, from negotiation to litigation. At Law BD, our goal is robustly protecting your rights and pursuing your best interests with skilled representation.</p>
            </div>
        </div>
    );
};

export default Hero;