import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='py-5 bg-white flex flex-col justify-center items-center h-screen'>
            <img src='/location.png' />
            <Link href="/#services" className='font-bold underline font-italian '>Our services</Link>
        </div>
    );
};

export default page;