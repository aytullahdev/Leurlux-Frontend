'use client'
import Button from '@/components/resueable/Button';
import Carousel from '@/components/resueable/Carousel';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const apartments = [
    {
        name: 'Puerto Banus',
        price: 'Price from: 2,970€/Week',
        images: [
            "https://ws.icnea.net/img4/E2147/imgs/E1016F1x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F2x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F3x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F4x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F5x1400.jpg",],
        beds: 4,
        bathTube: 3,
        area: 343,
        details: `Contact Us for more details`
    },
    {
        name: 'Penthouse in Puerto Banus ',
        price: 'Price from 2,500€ / Week',
        images: ['/apartments/penthouse/penthouse1.jpg', '/apartments/penthouse/penthouse2.jpg', '/apartments/penthouse/penthouse3.jpg', '/apartments/penthouse/penthouse4.jpg', '/apartments/penthouse/penthouse5.jpg'],
        beds: 4,
        bathTube: 3,
        area: 443,
        details: `Contact Us for more details`
    },
    {
        name: 'Penthouse Aloha',
        price: 'Price from: 1,500€ / Week',
        images: [
            "https://ws.icnea.net/img4/E2147/imgs/E1179F1x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F2x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F3x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F4x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F5x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F6x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F7x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F8x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F9x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F10x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F11x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F12x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F13x1400.jpg",],
        beds: 4,
        bathTube: 3,
        area: 543,
        details: `Contact Us for more details`
    },
    {
        name: 'Luxury in Nueva Andalucia ',
        price: 'Price From: 2,790€ / Week',
        images: [
            "https://ws.icnea.net/img4/E2147/imgs/E1016F24x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F25x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F26x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F27x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F28x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F29x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F30x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F31x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F32x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F33x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F34x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F35x1400.jpg"],
        beds: 4,
        bathTube: 3,
        area: 543,
        details: `Contact Us for more details`
    }
]

const Apartment = ({ apartment }) => {
    const router = useRouter();
    const { setSelectedApartment } = useGlobalContext()
    useEffect(() => {
        setSelectedApartment(null)
    }, [])
    const handleBook = () => {
        setSelectedApartment(apartment);

        router.push('/book?category=apartment')
    }
    return <>
        <div className='border  flex flex-col justify-between shadow-sm p-2 rounded-lg bg-gray-50'>
            <Carousel photos={apartment?.images} />

            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <div>
                    <p className='uppercase font-black mt-5 font-italian text-2xl'>{apartment?.name}</p>
                    <p className='py-2'>
                        <span className='font-thin'>{apartment?.price}</span>
                    </p>
                </div>
                <div className=''>
                    <button onClick={() => handleBook()} className='text-xl hover:bg-gray-400 font-italian bg-gray-500 px-5 py-1 rounded-lg block mx-auto text-white'>Book Now</button>
                </div>
            </div>
        </div>

    </>
}
const page = () => {
    return (
        <div className='px-2 lg:px-10 py-5' id='villas'>
            <div>
                <h1 className='text-5xl font-italian py-5'>Apartments</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 gap-5'>
                {apartments && apartments.length > 0 ? <>
                    {
                        apartments.map((apartment, indx) => {
                            return <Apartment key={`villa- ${indx}`} apartment={apartment} />
                        })
                    }
                </> : null}
            </div>

        </div>
    );
};

export default page;