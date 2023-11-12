'use client'
import Carousel from '@/components/resueable/Carousel';
import GalleryCarousel from '@/components/resueable/GalleryCarousel'
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import useCollection from '@/hooks/useCollection';
import React, { useEffect } from 'react';
const hotels = [





]



const Hotel = ({ hotel }) => {
    const router = useRouter();
    const { setSelectedHotel } = useGlobalContext()
    useEffect(() => {
        setSelectedHotel(null)
    }, [])
    const handleBook = () => {
        setSelectedHotel(hotel);

        router.push('/book?category=hotel#top')
    }
    return <>
        <div className='border    flex flex-col justify-between shadow-sm p-2 rounded-lg bg-gray-50'>
            {/* <div className='overflow-hidden'>
                <Carousel photos={hotel?.images} />
            </div> */}
            <div className=' '>
                <GalleryCarousel slidesPerView={1} images={hotel?.images} />
            </div>


            <div className='flex flex-col justify-between  items-center'>
                <div>
                    <p className='uppercase font-black mt-5 font-italian text-lg'>{hotel?.name}</p>
                    <p className='py-2'>
                        <span className='font-thin'>{hotel?.price}</span>
                    </p>
                </div>
                <div className=''>
                    <button onClick={() => handleBook()} className='text-xl hover:bg-gray-400 font-italian bg-gray-500 px-5 py-1 rounded-lg block mx-auto text-white'>Book Now</button>
                </div>
            </div>
        </div>

    </>
}
const HotelLanding = () => {
    const [collection, setCollection] = useCollection('/api/hotels?populate=*')
    useEffect(() => {
        // console.log(collection)
    }, [collection])
    const getObject = (singleObject) => {
        const backend = `${process.env.NEXT_PUBLIC_API_URL}`
        return {
            name: singleObject.attributes.name, price: singleObject.attributes.price, details: singleObject.attributes.details, images: singleObject.attributes.images.data.map((singleImage) => {
                return `${singleImage.attributes.url}`
            }), rating: singleObject.attributes.rating, location: singleObject.attributes.location, sustainabilityLevel: singleObject.attributes.sustainabilityLevel
        };

    }
    return (
        <div className='px-2 lg:px-10 py-5' id='hotel'>
            <div>
                <h1 className='text-5xl font-italian py-2'>Hotels</h1>
            </div>
            <div className='py-2 lg:py-5'>
                <h1 className='text-xl lg:text-3xl text-center font-italian'>{`If you can’t find the accommodation your looking for let us know and we will find it for you.`} </h1>
            </div>
            <div className='grid w-full grid-cols-1 md:grid-cols-2  xl:grid-cols-2 gap-5'>
                {collection && collection.length > 0 ? <>
                    {
                        collection?.map((hotel, indx) => {

                            return <Hotel key={`hotel- ${indx}`} hotel={getObject(hotel)} />
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
    return <HotelLanding />
};

export default page;