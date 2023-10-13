'use client'
import GalleryCarousel from '@/components/resueable/GalleryCarousel';
import React from 'react';
const nightClubs = [
    {
        name: 'MIRAGE | MARBELLA',
        description: `An experience like never before, bringing together the industries finest entertainment. World renowned DJ's, international artists, leading promotions, events and in-house visceral performances, delivering the highest levels of service.`,
        images: [
            '/mirage/mirage1.webp',
            '/mirage/mirage2.webp',
            '/mirage/mirage3.webp'
        ]
    },
    {
        name: 'MOMENTO | MARBELLA',
        description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
        images: [
            '/momento/momento1.jpeg',
            '/momento/momento2.jpeg',
            '/momento/momento3.jpeg'
        ]
    },
    {
        name: 'TIBU BANUS',
        description: `TIBU will entertain you with the very best music and live performances from the top DJS and live acts from around the globe. TIBU nightclub boasts a huge open-air terrace, to party the night away beneath the stars, plus dine at our restaurant to start you evening, ending with an amazing inside nightclub, TIBU is a must visit for your stay in Marbella.`,
        images: [
            '/tibubanus/tibubanus1.webp',
            '/tibubanus/tibubanus2.jpeg',
            '/tibubanus/tibubanus3.jpeg'
        ]
    }
]
const page = () => {
    return (
        <div className='py-8'>
            <h1 className='text-6xl font-italian' >Night <span style={{ color: 'rgb(193, 182, 134)' }}>Clubs</span></h1>
            <div className='grid grid-cols-2 gap-5 my-10'>
                {
                    nightClubs.length ? nightClubs.map((singleClub,indx) => {
                        return (
                            <div key={indx}  className='flex flex-col gap-5 shadow-sm border rounded-lg'>

                                <div>
                                    <GalleryCarousel slidesPerView={1} images={singleClub.images} />
                                </div>
                                <div className=' p-5 flex flex-row justify-around items-center'>
                                    <h1 className='text-xl font-italian'>{singleClub.name}</h1>
                                    <button className='text-white bg-black font-italian px-5 block py-2 rounded-lg'>Book Now</button>
                                </div>
                            </div>
                        )
                    }) : null
                }
            </div>

        </div>
    );
};

export default page;