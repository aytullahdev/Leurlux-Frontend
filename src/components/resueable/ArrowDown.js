import React from 'react';

const ArrowDown = () => {
    return (
        <div className='w-full  text-white py-5 lg:py-10 flex flex-row justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-6 lg:h-6 animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>

        </div>
    );
};

export default ArrowDown;