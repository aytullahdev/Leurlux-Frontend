'use client'
import Carousel from '@/components/resueable/Carousel';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const BeachClub = () => {
    const beachclubList = [
        {
            name: 'naopoolclub',
            description: `Occo Marbella’s mystical experience and gastronomic concept does not end on the first floor. If you are looking for a casual setting for sunset cocktails and snacks, visit our unique open-air rooftop located on the second level.

            It's natural and beautiful setting, filled with elegant features and greenery, will take you right back to the Middle Eastern world, while overviewing. A hidden location overviewing La Concha Mountain, perfect for any occasion.`,
            images: [
                "https://naopoolclub.com/wp-content/uploads/2018/08/NAO_HOME-HOR-2.jpg",
                "https://naopoolclub.com/wp-content/uploads/2018/09/NAO_HOME-3.jpg",
                "https://naopoolclub.com/wp-content/uploads/2018/09/LA-MESA_HOME.jpg",
                "https://naopoolclub.com/wp-content/uploads/2018/09/LA-MESA_HOME-683x1024.jpg"
            ]
        },
        {
            name: 'opiumbeachmarbella',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://opiumbeachmarbella.com/wp-content/uploads/2022/08/0A5A3021.jpg",
                "https://opiumbeachmarbella.com/wp-content/uploads/2022/08/0A5A3497-1.jpg",
                "https://opiumbeachmarbella.com/wp-content/uploads/2022/08/0A5A3021-1536x1025.jpg",
                "https://opiumbeachmarbella.com/wp-content/uploads/2022/08/0A5A2847-1.jpg",
            ]
        },
        {
            name: 'MOGLI THE KING',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://moglimarbella.com/img/pool/img_pool_1.jpg",
                "https://moglimarbella.com/img/pool/carrusel/img_pool_carrusel1.jpg",
                "https://moglimarbella.com/img/pool/carrusel/img_pool_carrusel2.jpg",
                "https://moglimarbella.com/img/pool/carrusel/img_pool_carrusel3.jpg",
                "https://moglimarbella.com/img/pool/carrusel/img_pool_carrusel4.jpg",
                "https://moglimarbella.com/img/pool/carrusel/img_pool_carrusel5.jpg",
            ]
        },
        {
            name: 'nosso',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://nosso.es/wp-content/uploads/2022/06/nosso-home.jpg",
                "https://nosso.es/wp-content/uploads/2022/06/nosso-carta.jpg",
                "https://nosso.es/wp-content/uploads/2021/07/Nosso-Summer-Club-Shop.jpg",
                "https://nosso.es/wp-content/uploads/2022/08/home-beach-bg.jpg",
                "https://nosso.es/wp-content/uploads/2022/06/nosso-dj.jpg",
                "https://nosso.es/wp-content/uploads/2022/07/nosso-bar-restaurant.jpg",
                "https://nosso.es/wp-content/uploads/2021/07/Nosso-Summer-Club-Shop-768x960.jpg",
                "https://nosso.es/wp-content/uploads/2022/08/home-beach-bg-768x960.jpg",
                "https://nosso.es/wp-content/uploads/2021/07/Nosso-Summer-Club-Shop-700x875.jpg",
            ]
        },
        {
            name: 'oceanclub',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://oceanclub.es/app/uploads/2023/06/PEDROJAEN_CF168011-2-scaled.jpg",
                "https://oceanclub.es/app/uploads/2023/06/003_PEDROJAEN_364A6527-Pano-1-scaled.jpg",
                "https://oceanclub.es/app/uploads/2021/10/club_hero.jpeg",
                "https://oceanclub.es/app/uploads/2021/10/Club1.jpeg",
            ]
        },
        {
            name: 'marbella.nikkibeach',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://marbella.nikkibeach.com/wp-content/uploads/sites/9/2022/03/marbella-homepage-dine-image-02.jpg",
                "https://marbella.nikkibeach.com/wp-content/uploads/2020/01/santorini-homepage-2020.jpg",
                "https://marbella.nikkibeach.com/wp-content/uploads/2020/12/montenegro-hotel-thumb.jpg",
                "https://marbella.nikkibeach.com/wp-content/uploads/2023/09/Nikki-Beach-Christmas-Party-2022-9-scaled.jpg",
                "https://marbella.nikkibeach.com/wp-content/uploads/sites/9/2022/03/marbella-homepage-main-2200x1467.jpg",
            ]
        },
        {
            name: 'playapadre',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://playapadre.com/cms/uploads/1677750481-DJI_0874-1800-rqw0k6.jpg",
                "https://playapadre.com/cms/uploads/1663074132-7L0A7321-1600-ri5g7o.jpeg",
                "https://playapadre.com/cms/uploads/1663174366-31052020-_DSC0015-1600-ri7lk1.jpeg",
                "https://playapadre.com/cms/uploads/1663074224-7L0A7380-1600-ri5ga8.jpeg",
                "https://playapadre.com/cms/uploads/1677749835-7L0A1762-1400-rqw028.jpg"
            ]
        },

    ]
    const { setSelectedBeachClub } = useGlobalContext();
    useEffect(() => {
        setSelectedBeachClub(null)
    }, [])
    const router = useRouter();
    const handleSelect = (selecteClub) => {
        setSelectedBeachClub(selecteClub)
        router.push('/book?category=beachclub')
    }
    return (
        <div className='py-8 lg:px-0'>
            <h1 className='text-6xl font-italian' >Beach <span style={{ color: 'rgb(193, 182, 134)' }}>Club</span></h1>
            <div className='grid lg:grid-cols-3 gap-4 lg:gap-5 px-3 lg:px-0 my-10'>
                {
                    beachclubList.length ? beachclubList.map((singleBeachClub, indx) => {
                        return (
                            <div key={indx} className='flex flex-col gap-5 shadow-sm border rounded-lg'>

                                <div>
                                    <Carousel photos={singleBeachClub.images} />

                                </div>
                                <div className=' p-5 flex flex-col gap-5 lg:gap-0 lg:flex-row justify-around items-center'>
                                    <h1 className='text-xl font-italian uppercase'>{singleBeachClub.name}</h1>
                                    <button onClick={() => { handleSelect(singleBeachClub) }} className='text-white bg-black font-italian px-5 block py-2 rounded-lg'>Book Now</button>
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
    return (
        <BeachClub />
    );
};

export default page;