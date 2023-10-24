'use client'
import Carousel from '@/components/resueable/Carousel';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
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
        {
            name: 'MIRAGE | MARBELLA',
            description: `An experience like never before, bringing together the industries finest entertainment. World renowned DJ's, international artists, leading promotions, events and in-house visceral performances, delivering the highest levels of service.`,
            images: [

                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage7.jpg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage8.jpg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage9.jpg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage10.jpg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage1.webp',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage2.webp',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage3.webp',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage4.jpg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage5.jpg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/mirage6.jpg',

            ]
        },
        {
            name: 'MOMENTO | MARBELLA',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/momento1.jpeg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/momento2.jpeg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/momento4.jpg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/momento5.jpg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/momento6.jpg',

            ]
        },
        {
            name: 'TIBU BANUS',
            description: `TIBU will entertain you with the very best music and live performances from the top DJS and live acts from around the globe. TIBU nightclub boasts a huge open-air terrace, to party the night away beneath the stars, plus dine at our restaurant to start you evening, ending with an amazing inside nightclub, TIBU is a must visit for your stay in Marbella.`,
            images: [
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/tibubanus1.webp',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/tibubanus2.jpeg',
                'https://leurlux.blr1.cdn.digitaloceanspaces.com/tibubanus3.jpeg',
                "https://tibubanus.com/wp-content/uploads/2022/06/tibu10.jpg",
                "https://tibubanus.com/wp-content/uploads/2022/06/tibu6.jpg",
                "https://tibubanus.com/wp-content/uploads/2022/06/5bubble.jpg",
            ]
        },
        {
            name: 'Pangea',
            description: `TIBU will entertain you with the very best music and live performances from the top DJS and live acts from around the globe. TIBU nightclub boasts a huge open-air terrace, to party the night away beneath the stars, plus dine at our restaurant to start you evening, ending with an amazing inside nightclub, TIBU is a must visit for your stay in Marbella.`,
            images: [
                "https://pangea-club.com/wp-content/uploads/2019/12/redd-angelo-393003-unsplash.jpg",
                "https://pangea-club.com/wp-content/uploads/2023/09/flyer-closing-party-2023.jpg",
                "https://pangea-club.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-11-at-4.59.56-PM.jpeg",
                "https://pangea-club.com/wp-content/uploads/2019/12/pangea-puerto-banus-front.jpg",
                "https://pangea-club.com/wp-content/uploads/2020/10/WhatsApp-Image-2020-12-11-at-4.59.57-PM.jpeg",
                "https://pangea-club.com/wp-content/uploads/2023/02/image-5-600x600.jpeg",
                "https://pangea-club.com/wp-content/uploads/2023/02/image-6-600x600.jpeg",
                "https://pangea-club.com/wp-content/uploads/2023/02/image-6-300x300.jpeg",
            ]
        },
        {
            name: 'Dremers Merbella',
            description: `TIBU will entertain you with the very best music and live performances from the top DJS and live acts from around the globe. TIBU nightclub boasts a huge open-air terrace, to party the night away beneath the stars, plus dine at our restaurant to start you evening, ending with an amazing inside nightclub, TIBU is a must visit for your stay in Marbella.`,
            images: [
                "https://dreamersmarbella.club/wp-content/uploads/2023/06/DREAMERS-MARBELLA-HOME.jpg",
                "https://dreamersmarbella.club/wp-content/uploads/2023/06/DREAMERS-MARBELLA-GALLERY-2-1024x683.jpg",
                "https://dreamersmarbella.club/wp-content/uploads/2023/03/DREAMERS-MARBELLA-14-1024x683.jpg",
                "https://dreamersmarbella.club/wp-content/uploads/2023/06/DREAMERS-MARBELLA-GALLERY-5-1024x683.jpg",
                "https://dreamersmarbella.club/wp-content/uploads/2023/06/DREAMERS-MARBELLA-GALLERY-1024x683.jpg",
                "https://dreamersmarbella.club/wp-content/uploads/2023/06/DREAMERS-MARBELLA-GALLERY-3-1024x683.jpg",
                "https://dreamersmarbella.club/wp-content/uploads/2023/06/DREAMERS-MARBELLA-GALLERY-4-1024x683.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/CED0101-Pano-copia.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/4I9A0562.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/olivia-valere-club-3.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/4I9A0562-768x512.jpg",
            ]
        },
        {
            name: 'Olivia-valere',
            description: `TIBU will entertain you with the very best music and live performances from the top DJS and live acts from around the globe. TIBU nightclub boasts a huge open-air terrace, to party the night away beneath the stars, plus dine at our restaurant to start you evening, ending with an amazing inside nightclub, TIBU is a must visit for your stay in Marbella.`,
            images: [
                "https://olivia-valere.com/wp-content/uploads/2023/05/CED0101-Pano-copia.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/4I9A0562.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/LOV-marbella-1.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/olivia-valere-club-2.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/olivia-valere-club-3.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/Captura-de-pantalla-2023-05-24-a-las-17.30.49.png",
                "https://olivia-valere.com/wp-content/uploads/2023/05/4I9A0562-1024x682.jpg",
                "https://olivia-valere.com/wp-content/uploads/2023/05/4I9A0562-300x200.jpg",
            ]
        },
    ]
    return (
        <div className='py-8 px-2 lg:px-0'>
            <h1 className='text-4xl lg:text-6xl font-italian' >Night <span style={{ color: 'rgb(193, 182, 134)' }}>Clubs</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5 my-10'>
                {
                    nightClubs.length ? nightClubs.map((singleClub, indx) => {
                        return (
                            <div key={indx} className='flex flex-col gap-5 shadow-sm border rounded-lg'>

                                <div className='p-5'>
                                    <Carousel photos={singleClub.images} />

                                </div>
                                <div className=' p-5 flex gap-5 lg:gap-0 flex-col lg:flex-row justify-around items-center'>
                                    <h1 className='text-xl font-italian'>{singleClub.name}</h1>
                                    <button onClick={() => { handleSelect(singleClub) }} className='text-white bg-black font-italian px-5 block py-2 rounded-lg'>Book Now</button>
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