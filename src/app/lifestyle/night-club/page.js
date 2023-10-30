'use client'
import Carousel from '@/components/resueable/Carousel';
import GalleryCarousel from '@/components/resueable/GalleryCarousel';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import useCollection from '@/hooks/useCollection';
const NightClubs = () => {
    const { setSelectedNightClub } = useGlobalContext();
    useEffect(() => {
        setSelectedNightClub(null)
    }, [])
    const router = useRouter();
    const handleSelect = (selecteClub) => {
        setSelectedNightClub(selecteClub)
        router.push('/book?category=night-club')
    }
    const nightClubs = [




    ]
    const [collection, setCollection] = useCollection('/api/night-clubs?populate=*')
    useEffect(() => {
        console.log(collection)
    }, [collection])
    const getObject = (singleObject) => {
        const backend = `${process.env.NEXT_PUBLIC_API_URL}`
        return {
            name: singleObject.attributes.name, description: singleObject.attributes.description, images: singleObject.attributes.images.data?.map((singleImage) => {
                return `${singleImage.attributes.url}`
            }), location: singleObject.attributes.location,
        };

    }
    return (
        <div className='py-8 px-2 lg:px-5'>
            <h1 className='text-4xl lg:text-6xl font-italian' >Night <span style={{ color: 'rgb(193, 182, 134)' }}>Clubs</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5 my-10'>
                {
                    collection?.length ? collection?.map((singleClub, indx) => {
                        singleClub = getObject(singleClub)
                        return (
                            <div key={indx}>
                                <div className='flex flex-col gap-5 shadow-sm border rounded-lg'>

                                    <div className='p-1'>
                                        {/* <Carousel photos={singleClub.images} /> */}
                                        <GalleryCarousel slidesPerView={1} images={singleClub?.images} />

                                    </div>
                                    <div className=' p-5 flex gap-5 lg:gap-0 flex-col lg:flex-row justify-around items-center'>
                                        <h1 className='text-xl font-italian'>{singleClub.name}</h1>
                                        <button onClick={() => { handleSelect(singleClub) }} className='text-white bg-black font-italian px-5 block py-2 rounded-lg'>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>

        </div>
    );
}
const page = () => {
    return <NightClubs />
};

export default page;