'use client'
import Carousel from '@/components/resueable/Carousel';
import GalleryCarousel from '@/components/resueable/GalleryCarousel';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import useCollection from '@/hooks/useCollection';
const BeachClub = () => {
    const beachclubList = [

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
            name: 'nikki beach',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://storage.ghadiscovery.com/cdn-cgi/image/width=1920,f=auto,g=auto,fit=scale-down/img/images/3/1/3/0/790313-1-eng-GB/503c2cd5d6cd-Girl-watching-horizon-at-Nikki-Beach-Dubai.jpg",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/406507123.jpg?k=2d445dc6737871967fef7ab316c7596e0b3466cd152040bb3f04ded70f4eca99&o=&hp=1",
                "https://marbella.nikkibeach.com/wp-content/uploads/sites/9/2022/03/marbella-homepage-dine-image-02.jpg",
                "https://marbella.nikkibeach.com/wp-content/uploads/2020/01/santorini-homepage-2020.jpg",
                "https://marbella.nikkibeach.com/wp-content/uploads/2020/12/montenegro-hotel-thumb.jpg",
                "https://marbella.nikkibeach.com/wp-content/uploads/2023/09/Nikki-Beach-Christmas-Party-2022-9-scaled.jpg",
                "https://marbella.nikkibeach.com/wp-content/uploads/sites/9/2022/03/marbella-homepage-main-2200x1467.jpg",
            ]
        },
        {
            name: 'ocean club',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/0e/b0/34/breathtaking-views-and.jpg?w=1200&h=-1&s=1",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnr4F5fArLi1IR4pv2SaSRi6mTuNp9oClpO-i2Rg08Xp1xyyraQ3gSQbrqw5xXCFKriPg&usqp=CAU",
                "https://oceanclub.es/app/uploads/2023/06/PEDROJAEN_CF168011-2-scaled.jpg",
                "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/43460062.jpg?k=13daa2436ce9bfd2674a60d5928a1ca197d6d3f11928e22f4ebdd8e3d30cb570&o=",
                "https://oceanclub.es/app/uploads/2023/06/003_PEDROJAEN_364A6527-Pano-1-scaled.jpg",
                "https://oceanclub.es/app/uploads/2021/10/club_hero.jpeg",
                "https://oceanclub.es/app/uploads/2021/10/Club1.jpeg",
            ]
        },
        {
            name: 'playapadre',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://globeinfinite.com/wp-content/uploads/2023/08/playa-padre-443858.webp",
                "https://playapadre.com/cms/uploads/1677750481-DJI_0874-1800-rqw0k6.jpg",
                "https://playapadre.com/cms/uploads/1663074132-7L0A7321-1600-ri5g7o.jpeg",
                "https://playapadre.com/cms/uploads/1663174366-31052020-_DSC0015-1600-ri7lk1.jpeg",
                "https://playapadre.com/cms/uploads/1663074224-7L0A7380-1600-ri5ga8.jpeg",
                "https://playapadre.com/cms/uploads/1677749835-7L0A1762-1400-rqw028.jpg"
            ]
        },
        {
            name: 'opium beach marbella',
            description: `The elements of Momento music are pitch, rhythm, dynamics, and the sonic qualities of timbre and texture (which are sometimes termed the "color" of a musical sound). The Taste of our food, and essence of the environment makes of Momento a unique temple in Marbella.`,
            images: [
                "https://lh3.googleusercontent.com/p/AF1QipORmsosWgO2i7ya-NJseLLOwOsCKKYpiiBhStNU=s680-w680-h510",
                "https://opiumbeachmarbella.com/wp-content/uploads/2022/08/0A5A3021.jpg",
                "https://lh3.googleusercontent.com/p/AF1QipPgpXv6v6FPhrxwrva6kSENfSc-aAjFJOR_2CbR=s680-w680-h510",
                "https://opiumbeachmarbella.com/wp-content/uploads/2022/08/0A5A3497-1.jpg",
                "https://opiumbeachmarbella.com/wp-content/uploads/2022/08/0A5A3021-1536x1025.jpg",
                "https://opiumbeachmarbella.com/wp-content/uploads/2022/08/0A5A2847-1.jpg",
                "https://lh3.googleusercontent.com/p/AF1QipMSUtRrOiKtGMqSuaYCcsHkN5jUaAgR4mAPRHD_=s680-w680-h510",
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
            name: 'naopool club',
            description: `Occo Marbella’s mystical experience and gastronomic concept does not end on the first floor. If you are looking for a casual setting for sunset cocktails and snacks, visit our unique open-air rooftop located on the second level.

            It's natural and beautiful setting, filled with elegant features and greenery, will take you right back to the Middle Eastern world, while overviewing. A hidden location overviewing La Concha Mountain, perfect for any occasion.`,
            images: [

                "https://leurlux.blr1.cdn.digitaloceanspaces.com/naopoolclub1.jpg",
                "https://leurlux.blr1.cdn.digitaloceanspaces.com/naopoolclub2.jpg",
                "https://leurlux.blr1.cdn.digitaloceanspaces.com/naopoolclub3.jpg",
                "https://leurlux.blr1.cdn.digitaloceanspaces.com/naopoolclub4.jpg",
                "https://leurlux.blr1.cdn.digitaloceanspaces.com/naopoolclub5.jpg",
                "https://leurlux.blr1.cdn.digitaloceanspaces.com/naopoolclub6.jpg",
                "https://leurlux.blr1.cdn.digitaloceanspaces.com/naopoolclub7.jpg",
                "https://leurlux.blr1.cdn.digitaloceanspaces.com/naopoolclub8.jpg",
                "https://media-cdn.tripadvisor.com/media/photo-s/17/eb/83/b0/photo3jpg.jpg",

            ]
        },



    ]
    const { setSelectedBeachClub } = useGlobalContext();
    useEffect(() => {
        setSelectedBeachClub(null)
    }, [])
    const [collection, setCollection] = useCollection('/api/beach-clubs?populate=*')
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
    const router = useRouter();
    const handleSelect = (selecteClub) => {
        setSelectedBeachClub(selecteClub)
        router.push('/book?category=beachclub')
    }
    return (
        <div className='py-8 lg:px-0'>
            <h1 className='text-6xl font-italian' >Beach <span style={{ color: 'rgb(193, 182, 134)' }}>Club</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4  lg:gap-5 px-3 lg:px-0 my-10 '>
                {
                    collection?.length ? collection.map((singleBeachClub, indx) => {
                        singleBeachClub = getObject(singleBeachClub)
                        return (
                            <div key={indx}>
                                <div className='flex flex-col gap-5 shadow-sm border rounded-lg   '>

                                    <div>
                                        {/* <Carousel photos={singleBeachClub.images} /> */}

                                        <GalleryCarousel slidesPerView={1} images={singleBeachClub?.images} />


                                    </div>
                                    <div className=' p-5 flex flex-col gap-5 lg:gap-0 lg:flex-row justify-around items-center'>
                                        <h1 className='text-xl font-italian uppercase'>{singleBeachClub.name}</h1>
                                        <button onClick={() => { handleSelect(singleBeachClub) }} className='text-white bg-black font-italian px-5 block py-2 rounded-lg'>Book Now</button>
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
    return (
        <BeachClub />
    );
};

export default page;