import Link from 'next/link';
import React from 'react';

const Button = ({ to = '/', text = "" }) => {
    return (
        <Link className='px-3 lg:px-5  block text-xs lg:text-xl font-italian py-1 rounded-full border text-white hover:bg-gray-500 ' href={to}>{text}</Link>
    );
};

export default Button;