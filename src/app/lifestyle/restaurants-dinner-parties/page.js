'use client'
import Carousel from '@/components/resueable/Carousel';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const RestaurantsDinner = () => {
    const restaurantList = [
        {
            name: 'MOSHFUNKITCHEN',
            description: `Occo Marbella’s mystical experience and gastronomic concept does not end on the first floor. If you are looking for a casual setting for sunset cocktails and snacks, visit our unique open-air rooftop located on the second level.

            It's natural and beautiful setting, filled with elegant features and greenery, will take you right back to the Middle Eastern world, while overviewing. A hidden location overviewing La Concha Mountain, perfect for any occasion.`,
            images: [
                '/restaurants/moshfunkitchen/moshfunkitchen1.jpeg',
                '/restaurants/moshfunkitchen/moshfunkitchen2.jpeg',
                '/restaurants/moshfunkitchen/moshfunkitchen3.jpeg',
                '/restaurants/moshfunkitchen/moshfunkitchen4.jpeg',
            ]
        },
        {
            name: 'OCCORESTAURANT',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                '/restaurants/occorestaurant/occorestaurant1.jpeg',
                '/restaurants/occorestaurant/occorestaurant2.jpeg',
                '/restaurants/occorestaurant/occorestaurant3.jpeg',
                '/restaurants/occorestaurant/occorestaurant4.jpeg',
                '/restaurants/occorestaurant/occorestaurant5.jpeg',
                '/restaurants/occorestaurant/occorestaurant6.jpeg',
            ]
        },
        {
            name: 'BREATHE',
            description: `BREATHE is a multifaceted gastronomic concept dedicated to connecting people,
            nature and fresh-thinking gastronomy.This multifaceted gastronomic concept offers a place in Marbella where you can relax, dine, meet, socialise, enjoy a cocktail and be inspired by quality food made with care. A way of life that adds another dimension to breakfast, lunch, dinner and drinks in Marbella. BREATHE OPENING HOURS:
            Every Day from 18:00 `,
            images: [
                '/restaurants/breathe/breath1.jpg',
                '/restaurants/breathe/breath2.jpg',
                '/restaurants/breathe/breath3.jpg',
                '/restaurants/breathe/breath4.jpg',
                '/restaurants/breathe/breath5.jpg',
                '/restaurants/breathe/breath6.jpg',
            ]
        },
        {
            name: 'PUENTEROMANO',
            description: `Taking guests on an immersive journey for the senses, COYA Marbella prides itself on its innovative menus which fuse traditional Peruvian dishes with Japanese, Chinese and Spanish cooking techniques. Showcasing complexity and intensity in its flavours, yet simplicity in its execution and presentation.

            Drawing inspiration from the oldest bars in Lima, the COYA Marbella Pisco Bar provides a luxurious and zestful setting for any occasion. When visiting, you'll find a vast selection of COYA signature homemade infusions, Peruvian classics & localised specials.
            
            Guests joining us at COYA Marbella will enjoy the unique sounds of COYA Music. Discover the entrancing beats of our resident DJs who play nightly, as well as the frequent music events taking place across the year with special guest DJs.`,
            images: [
                '/restaurants/puenteromano/puenteromano1.jpg',
                '/restaurants/puenteromano/puenteromano2.jpg',
                '/restaurants/puenteromano/puenteromano3.jpg',
                '/restaurants/puenteromano/puenteromano4.jpg',
            ]
        },
        {
            name: 'NOBUHOTELS',
            description: `Designed for the trendsetters. Curated for the playful. Join us at Nobu Hotel Marbella, a destination for entertainment, food and indulgence.  Located on the swish ‘Golden Mile’ in Southern Spain, you are just steps from the sandy beaches and turquoise waters of the Mediterranean.
            ​
            Check into one of our sleek open plan guestrooms, with expansive terraces overlooking La Plaza, Marbella’s social and epicurean hotspot.  Creamy tones, light wood and a hint of contemporary coastal cool make each room a chic space in which to enjoy the subtropical surroundings. Our hotel is located a few meters away from the beach.`,
            images: [
                '/restaurants/nobuhotels/nobuhotels1.jpg',
                '/restaurants/nobuhotels/nobuhotels2.jpg',
                '/restaurants/nobuhotels/nobuhotels3.jpg',
                '/restaurants/nobuhotels/nobuhotels5.jpg',
            ]
        },
        {
            name: 'NOMADMARBELLA',
            description: `Nomad Restaurant & Club opened March 2023 in the village of Aloha, Nueva Andalucia, Marbella.
            An impressive renovation has taken place with interior design by Studio Hick.
            
            Open for dinner everyday 18:00- 24:00
            
            (kitchen last orders 23:30)`,
            images: [
                '/restaurants/nomadmarbella/nomadmarbella4.jpg',
                '/restaurants/nomadmarbella/nomadmarbella1.webp',
                '/restaurants/nomadmarbella/nomadmarbella2.jpg',
                '/restaurants/nomadmarbella/nomadmarbella5.webp',
            ]
        }
    ]
    const { setSelectedRestaurant } = useGlobalContext();
    useEffect(() => {
        setSelectedRestaurant(null)
    }, [])
    const router = useRouter();
    const handleSelect = (selecteClub) => {
        setSelectedRestaurant(selecteClub)
        router.push('/book?category=restaurant')
    }
    return (
        <div className='py-8'>
            <h1 className='text-6xl font-italian' >Restaurants <span style={{ color: 'rgb(193, 182, 134)' }}>Dinner</span> Parties</h1>
            <div className='grid lg:grid-cols-3 gap-5 my-10'>
                {
                    restaurantList.length ? restaurantList.map((singleRestaurant, indx) => {
                        return (
                            <div key={indx} className='flex flex-col gap-5 shadow-sm border rounded-lg'>

                                <div>
                                    <Carousel photos={singleRestaurant.images} />

                                </div>
                                <div className=' p-5 flex flex-row justify-around items-center'>
                                    <h1 className='text-xl font-italian'>{singleRestaurant.name}</h1>
                                    <button onClick={() => { handleSelect(singleRestaurant) }} className='text-white bg-black font-italian px-5 block py-2 rounded-lg'>Book Now</button>
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
    return < RestaurantsDinner />

};

export default page;