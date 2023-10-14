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

            <div className='flex flex-row justify-between  items-center'>
                <div>
                    <p className='uppercase font-black mt-5 font-italian text-2xl'>{villa?.name}</p>
                    <p className='py-2'>
                        <span className='font-thin'>Price from {villa?.price} / week</span>
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
    const [collection, setCollection] = useCollection('/api/villas?populate=*')
    const getVillaObject = (villa) => {
        return {
            name: villa.attributes.name, price: villa.attributes.price, images: villa.attributes.images.data.map((singelImage) => {
                return `http://localhost:1337${singelImage.attributes.url}`
            }), details: villa.attributes.details, specifications: villa.attributes.specifications
        }
    }
    return (
        <div className='px-10 py-5' id='villas'>
            <div>
                <h1 className='text-5xl font-italian py-5'>Villas</h1>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {collection && collection.length > 0 ? <>
                    {
                        collection.map((villa, indx) => {
                           // console.log(villa)
                            villa = getVillaObject(villa)
                            return <Villa key={`villa- ${indx}`} villa={villa} />
                        })
                    }
                </> : null}
            </div>

        </div>
    );
}
const page = () => {
    return <Villas />
};

export default page;