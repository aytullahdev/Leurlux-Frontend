import useGlobalContext from '@/hooks/useGlobalContext';
import Link from 'next/link';
import React, { useEffect } from 'react';

const BookingSuccess = () => {
    const { setIsBooked, isBooked } = useGlobalContext();
    useEffect(() => {
        setIsBooked(false)
    }, [])

    return (
        <div>
            {isBooked && <div className=''>
                <h1 className='text-6xl font-bold text-center py-10'> Thank you for your booking.</h1>
                <p className='text-xl text-center'>  If you have any questions or need assistance, <br />please feel free to reach out to us on <span className='text-xl font-bold text-green-500'>WhatsApp👇</span>.</p>
                <div className='text-center py-5 font-black font-italian underline'> <Link href={'/#services'}>Services</Link></div>
            </div>}
        </div>
    );
};

export default BookingSuccess;