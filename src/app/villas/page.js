'use client'
import Button from '@/components/resueable/Button';
import Carousel from '@/components/resueable/Carousel';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const villas = [
    {
        name: 'VILLA LA QUINTA ',
        price: 'Price from 12,000€ / week',
        images: ['/villa_la_quinta/villa_la_quinta1.jpg', '/villa_la_quinta/villa_la_quinta2.jpg', '/villa_la_quinta/villa_la_quinta3.jpg'],
        beds: 4,
        bathTube: 3,
        area: 343,
        details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software lik`
    },
    {
        name: 'Villa Esko',
        price: 'Price from 8,000€/ week',
        images: ['/villa_esko/villa_esko1.jpg', '/villa_esko/villa_esko2.jpg', '/villa_esko/villa_esko3.jpg'],
        beds: 4,
        bathTube: 3,
        area: 443,
        details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software lik`
    },
    {
        name: 'Villa Fiona',
        price: 'Price from 8,000€/ week',
        images: ['/villa_fiona/villa_fiona1.jpg', '/villa_fiona/villa_fiona2.jpg', '/villa_fiona/villa_fiona3.jpg'],
        beds: 4,
        bathTube: 3,
        area: 543,
        details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software lik`
    }
]

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
                        <span className='font-thin'>{villa?.price}</span>
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
        <div className='px-10 py-5' id='villas'>
            <div>
                <h1 className='text-5xl font-italian py-5'>Villas</h1>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {villas && villas.length > 0 ? <>
                    {
                        villas.map((villa, indx) => {
                            return <Villa key={`villa- ${indx}`} villa={villa} />
                        })
                    }
                </> : null}
            </div>

        </div>
    );
};

export default page;