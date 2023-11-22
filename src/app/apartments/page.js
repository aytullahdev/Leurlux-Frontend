'use client'
import Button from '@/components/resueable/Button';
import Carousel from '@/components/resueable/Carousel';
import GalleryCarousel from '@/components/resueable/GalleryCarousel';
import useCollection from '@/hooks/useCollection';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Apartment = ({ apartment }) => {
    const router = useRouter();
    const { setSelectedApartment } = useGlobalContext()
    useEffect(() => {
        setSelectedApartment(null)
    }, [])
    const handleBook = () => {
        setSelectedApartment(apartment);

        router.push(`/book?category=apartment&id=${apartment.id}#top`)
    }
    return <>
        <div className='border  flex flex-col justify-between shadow-sm p-2 rounded-lg bg-gray-50'>
            {/* <Carousel photos={apartment?.images} /> */}
            <div >
                <GalleryCarousel slidesPerView={1} images={apartment?.images} />
            </div>

            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <div>
                    <p className='uppercase font-black mt-5 font-italian text-xl'>{apartment?.name}</p>
                    <p className='py-0'>
                        <span className='font-thin'>{apartment?.beds} Bed</span>
                    </p>
                    <p className='py-0'>
                        <span className='font-thin'>Price From: {apartment?.price} {apartment?.price_tag}</span>
                    </p>
                </div>
                <div className=''>
                    <button onClick={() => handleBook()} className='text-xl hover:bg-gray-400 font-italian bg-gray-500 px-5 py-1 rounded-lg block mx-auto text-white'>Book Now</button>
                </div>
            </div>
        </div>

    </>
}
const getObject = (singleObject) => {
    const backend = `${process.env.NEXT_PUBLIC_API_URL}`
    return {
        id: singleObject.id,
        name: singleObject.attributes.name, price: singleObject.attributes.price, details: singleObject.attributes.details, images: singleObject.attributes.images.data.map((singleImage) => {
            return `${singleImage.attributes.url}`
        }), beds: singleObject.attributes.beds,
        link: singleObject.attributes.pdf, guests: singleObject.attributes.guests, bedrooms: singleObject.attributes.bedrooms, bathrooms: singleObject.attributes.bathrooms, 'about_penthouse': singleObject.attributes.about_penthouse, 'about_neighborhood': singleObject.attributes.about_neighborhood, others: singleObject.attributes.others, price_tag: singleObject.attributes.price_tag
    };

}
const MainSection = () => {
    const [collection, setCollection] = useCollection('/api/apartments?populate=*')
    useEffect(() => {
        // console.log(collection)
    }, [collection])
    return (
        <div className='px-2 lg:px-10 py-5' id='villas'>
            <div>
                <h1 className='text-5xl font-italian py-2'>Apartments</h1>
            </div>
            <div className='py-2 lg:py-5'>
                <h1 className='text-xl lg:text-3xl text-center font-italian'>{`If you can’t find the accommodation your looking for let us know and we will find it for you.`} </h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 gap-5'>
                {collection && collection.length > 0 ? <>
                    {
                        collection.map((apartment, indx) => {
                            return <Apartment key={`villa- ${indx}`} apartment={getObject(apartment)} />
                        })
                    }
                </> : null}
            </div>
            <div className='py-2 lg:py-5'>
                <h1 className='text-xl lg:text-3xl text-center font-italian'>{`If you can’t find the accommodation your looking for let us know and we will find it for you.`} </h1>
            </div>

        </div>
    );
}
const page = () => {
    return <MainSection />
};

export default page;