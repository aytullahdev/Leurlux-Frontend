'use client'
import Button from '@/components/resueable/Button';
import Carousel from '@/components/resueable/Carousel';
import useCollection from '@/hooks/useCollection';
import useGlobalContext from '@/hooks/useGlobalContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
const Villa = ({ villa }) => {
    const router = useRouter();

    const { setSelectedVilla } = useGlobalContext()

    useEffect(() => {
        setSelectedVilla(null)

    }, [])
    const handleBook = () => {
        setSelectedVilla(villa);

        router.push('/book?category=villa')
    }
    return <>
        <div className='border shadow-sm p-2 rounded-lg bg-gray-50'>
            <Carousel photos={villa?.images} />

            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <div>
                    <p className='uppercase font-black mt-5 font-italian lg:text-2xl'>{villa?.name}</p>
                    <p className='py-2'>
                        <span className='font-thin'>Price from {villa?.price}</span>
                    </p>
                </div>
                <div className=''>
                    <button onClick={() => handleBook()} className='text-xl hover:bg-gray-400 font-italian bg-gray-500 px-5 py-1 rounded-lg block mx-auto text-white'>Book Now</button>
                </div>
            </div>
        </div>

    </>
}
const Villas = () => {
    // const [collection, setCollection] = useCollection('/api/villas?populate=*')
    // const getVillaObject = (villa) => {
    //     return {
    //         name: villa.attributes.name, price: villa.attributes.price, images: villa.attributes.images.data.map((singelImage) => {
    //             return `http://localhost:1337${singelImage.attributes.url}`
    //         }), details: villa.attributes.details, specifications: villa.attributes.specifications
    //     }
    // }
    const villaCollection = [
        {
            name: 'VILLA LA QUINTA',
            price: '12,000€/week',
            images: ['/villas/villa_la_quint/villa_la_quinta1.jpg', '/villas/villa_la_quint/villa_la_quinta2.jpg', '/villas/villa_la_quint/villa_la_quinta3.jpg', '/villas/villa_la_quint/villa_la_quinta4.jpg', '/villas/villa_la_quint/villa_la_quinta5.jpg',],
            beds: 7,
            bathTube: 5,
            guests: 14,
            details: `Welcome to this newly built Villa with amazing architecture. Enjoy privacy in the luxurious El Herrojo
            and endure in this extravagant white Villa with majestic sea views from the hills. The Villa offers en-
            suite bedrooms, high glass ceilings for perfect indoor/outdoor living and spacious terraces area with a
            swimming pool and BBQ`

        },
        {
            name: 'Villa Esko',
            price: '8,000€/week',
            images: ['/villas/villa_esko/villa_esko1.jpg', '/villas/villa_esko/villa_esko2.jpg', '/villas/villa_esko/villa_esko3.jpg', '/villas/villa_esko/villa_esko4.jpg', '/villas/villa_esko/villa_esko.jpg',],
            beds: 7,
            bathTube: 5,
            guests: 14,
            details: `Welcome to this newly built Villa with amazing architecture. Enjoy privacy in the luxurious El Herrojo
            and endure in this extravagant white Villa with majestic sea views from the hills. The Villa offers en-
            suite bedrooms, high glass ceilings for perfect indoor/outdoor living and spacious terraces area with a
            swimming pool and BBQ`

        },
        {
            name: 'Villa Fiona',
            price: '8,000€/week',
            images: ['/villas/villa_fiona/villa_fiona1.jpg', '/villas/villa_fiona/villa_fiona2.jpg', '/villas/villa_fiona/villa_fiona3.jpg', '/villas/villa_fiona/villa_fiona4.jpg', '/villas/villa_fiona/villa_fiona.jpg',],
            beds: 7,
            bathTube: 5,
            guests: 14,
            details: `Welcome to this newly built Villa with amazing architecture. Enjoy privacy in the luxurious El Herrojo
            and endure in this extravagant white Villa with majestic sea views from the hills. The Villa offers en-
            suite bedrooms, high glass ceilings for perfect indoor/outdoor living and spacious terraces area with a
            swimming pool and BBQ`

        }
    ]
    return (
        <div className=' w-full h-full  px-3 lg:px-10 py-5' id='villas'>
            <div>
                <h1 className='text-5xl font-italian py-5'>Villas</h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-5'>
                {villaCollection && villaCollection.length > 0 ? <>
                    {
                        villaCollection.map((villa, indx) => {
                            // console.log(villa)

                            return <Villa key={`villa- ${indx}`} villa={villa} />
                        })
                    }
                </> : null}
            </div>

        </div>
    );
}
const page = () => {
    return <>
        <Villas />
    </>
};

export default page;