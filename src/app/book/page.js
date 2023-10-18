'use client'
import { GlobalContext } from '@/GlobalContext/GlobalContext';
import BookApartment from '@/components/Bookings/BookApartment';
import BookHotle from '@/components/Bookings/BookHotle';
import BookSuperCar from '@/components/Bookings/BookSuperCar';
import BookTransport from '@/components/Bookings/BookTransport';
import BookVilla from '@/components/Bookings/BookVilla';
import BookYacht from '@/components/Bookings/BookYacht';
import BookTraining from '@/components/Bookings/BookTraining'
import { data } from 'autoprefixer';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import BookPrivateJet from '../../components/Bookings/BookPrivateJet';
import BookNightClub from '../../components/Bookings/BookNightClub';









const BookService = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category')
    if (category === 'privatejet') {
        return <BookPrivateJet />
    }
    if (category === 'supercar') {
        return <BookSuperCar />
    }
    if (category === 'yacht') {
        return <BookYacht />
    }
    if (category === 'villa') {
        return <BookVilla />
    }
    if (category === 'apartment') {
        return <BookApartment />
    }
    if (category === 'hotel') {
        return <BookHotle />
    }
    if (category === 'transport') {
        return <BookTransport />
    }
    if (category === 'personal-training') {
        return <BookTraining />
    }
    if (category === 'night-club') {
        return <BookNightClub />
    }

    return <>

        <div className='justify-center items-center flex flex-col h-full w-full py-20'>
            <div>
                <h1 className='px-5 lg:px-0 text-2xl lg:text-4xl font-italian py-5'>If You Encounter Booking Issues, Contact Us on <span className='text-bold text-green-500'>WhatsApp!</span></h1>
            </div>
            <Link href={'/#services'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a service</Link>
        </div>
    </>

}
const page = () => {


    return (
        <>


            <BookService />


        </>
    );
};

export default page;