'use client'

import GalleryCarousel from '@/components/resueable/GalleryCarousel';
import useCollection from '@/hooks/useCollection';
import useGlobalContext from '@/hooks/useGlobalContext';
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
            {/* <Carousel photos={villa?.images} /> */}
            <div >
                <GalleryCarousel slidesPerView={1} images={villa?.images} />
            </div>

            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <div>
                    <p className='uppercase font-black mt-5 font-italian lg:text-2xl'>{villa?.name}</p>
                    <p className='py-2'>
                        <span className='font-thin'>Price from {villa?.price}{villa?.price_tag}</span>
                    </p>
                </div>
                <div className=''>
                    <button onClick={() => handleBook()} className='text-xl hover:bg-gray-400 font-italian bg-gray-500 px-5 py-1 rounded-lg block mx-auto text-white'>Book Now</button>
                </div>
            </div>
        </div >

    </>
}
const Villas = () => {
    const [collection, setCollection] = useCollection('/api/villas?populate=*')
    const getVillaObject = (villa) => {
        return {
            name: villa.attributes.name, price: villa.attributes.price, images: villa.attributes.images.data.map((singelImage) => {
                return `${singelImage.attributes.url}`
            }), details: villa.attributes.details, beds: villa.attributes.beds, bathTube: villa.attributes.bathtube, link: villa.attributes.pdf, guests: villa.attributes.guests, bedrooms: villa.attributes.bedrooms, bathrooms: villa.attributes.bathrooms, 'about_villa': villa.attributes.about_villa, 'about_neighborhood': villa.attributes.about_neighborhood, others: villa.attributes.others, price_tag: villa.attributes.price_tag
        }
    }
    // const villaCollection = [
    //     {
    //         name: 'VILLA LA QUINTA',
    //         price: '12,000€/week',
    //         images: ['/villas/villa_la_quint/villa_la_quinta1.jpg', '/villas/villa_la_quint/villa_la_quinta2.jpg', '/villas/villa_la_quint/villa_la_quinta3.jpg', '/villas/villa_la_quint/villa_la_quinta4.jpg', '/villas/villa_la_quint/villa_la_quinta5.jpg', '/villas/villa_la_quint/villa_la_quinta6.jpg', '/villas/villa_la_quint/villa_la_quinta7.jpg', '/villas/villa_la_quint/villa_la_quinta8.jpg', '/villas/villa_la_quint/villa_la_quinta9.jpg', '/villas/villa_la_quint/villa_la_quinta10.jpg', '/villas/villa_la_quint/villa_la_quinta11.jpg',],
    //         beds: 7,
    //         bathTube: 5,
    //         guests: 14,
    //         details: `Welcome to this newly built Villa with amazing architecture. Enjoy privacy in the luxurious El Herrojo
    //         and endure in this extravagant white Villa with majestic sea views from the hills. The Villa offers en-
    //         suite bedrooms, high glass ceilings for perfect indoor/outdoor living and spacious terraces area with a
    //         swimming pool and BBQ`,
    //         link: 'https://www.dropbox.com/scl/fo/1zmrxnqgsebem8cb872aw/h?rlkey=0rj6ong8sgmd69crh14bl0kgg&dl=0',

    //     }
    // ]
    return (
        <div className=' w-full h-full  px-3 lg:px-10 py-5' id='villas'>
            <div>
                <h1 className='text-5xl font-italian py-5'>Villas</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5'>
                {collection && collection.length > 0 ? <>
                    {
                        collection.map((villa, indx) => {


                            return <Villa key={`villa- ${indx}`} villa={getVillaObject(villa)} />
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