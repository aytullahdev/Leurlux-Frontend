'use client'
import Button from '@/components/resueable/Button';
import Carousel from '@/components/resueable/Carousel';
import useCollection from '@/hooks/useCollection';
import useGlobalContext from '@/hooks/useGlobalContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const apartments = [
    {
        name: 'Puerto Banus',
        price: 'Price from: 2,970€/Week',
        images: [
            "https://ws.icnea.net/img4/E2147/imgs/E1077F11x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F40x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F6x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F39x1400.jpg",
            "https://novumrentals.icnea.net/imgs/E1020F1x700.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F18x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F9x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F43x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F17x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F16x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F10x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1077F7x1400.jpg],",],
        beds: 2,
        bathTube: 2,
        area: 343,
        amenities: "/apartments/puertobanus_amen.png",
        details: ``
    },
    {
        name: 'Penthouse in Puerto Banus ',
        price: 'Price from 2,500€ / Week',
        images: ['/apartments/penthouse/penthouse1.jpg', '/apartments/penthouse/penthouse2.jpg', '/apartments/penthouse/penthouse3.jpg', '/apartments/penthouse/penthouse4.jpg', '/apartments/penthouse/penthouse5.jpg', '/apartments/penthouse/penthouse6.jpg', '/apartments/penthouse/penthouse7.jpg', '/apartments/penthouse/penthouse8.jpg', '/apartments/penthouse/penthouse9.jpg', '/apartments/penthouse/penthouse10.jpg'],
        beds: 2,
        bathTube: 2,
        area: 443,
        amenities: "/apartments/penthouse/amenities.png",
        link: 'https://drive.google.com/file/d/19Y3qf4b6hFSj0ijFkY70B0HjIlzTy-en/view',
        details: ``
    },
    {
        name: 'El Paraiso ',
        price: 'Price from 5,500€/ Week',
        images: ['/apartments/el_paraiso/el_paraiso1.jpg', '/apartments/el_paraiso/el_paraiso2.jpg', '/apartments/el_paraiso/el_paraiso3.jpg', '/apartments/el_paraiso/el_paraiso4.jpg', '/apartments/el_paraiso/el_paraiso5.jpg', '/apartments/el_paraiso/el_paraiso6.jpg', '/apartments/el_paraiso/el_paraiso7.jpg', '/apartments/el_paraiso/el_paraiso8.jpg', '/apartments/el_paraiso/el_paraiso9.jpg', '/apartments/el_paraiso/el_paraiso10.jpg'],
        beds: 2,
        bathTube: 2,
        area: 443,
        link: 'https://www.dropbox.com/sh/3g62jru2xx372kf/AAB4mfNsU1A6YaiYu0OzQFv9a?dl=0',
        details: ``,
        amenities: '/apartments/penthouse/amenities.png'
    },
    {
        name: 'Penthouse Aloha',
        price: 'Price from: 1,500€ / Week',
        images: [
            "https://ws.icnea.net/img4/E2147/imgs/E1179F1x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F2x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F3x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F4x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F5x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F6x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F7x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F8x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F9x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F10x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F11x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F12x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1179F13x1400.jpg",],
        beds: 2,
        bathTube: 2,
        area: 543,
        details: `Are you in search for a place that offers the best features, overlooks the whole city, and is close to all the famous restaurants, bars, and even Puerto Banus? Well, look no further! This is the perfect place for you. If you are a fun and an outgoing group, you will surely appreciate the aesthetic of this 2-bedroom penthouse and everything else about it. Including the outdoor BBQ, the pool, and 3 terraces! `,
        amenities: "/apartments/aloha.png"
    },
    {
        name: 'Luxury in Nueva Andalucia ',
        price: 'Price From: 2,790€ / Week',
        images: [
            "https://ws.icnea.net/img4/E2147/imgs/E1016F24x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F25x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F26x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F27x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F28x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F29x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F30x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F31x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F32x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F33x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F34x1400.jpg",
            "https://ws.icnea.net/img4/E2147/imgs/E1016F35x1400.jpg"],
        beds: 3,
        bathTube: 3,
        area: 543,
        details: `Heaven on Earth is what you will instantly feel as you greet this sunny entertainer’s oasis in the heart of Marbella, a 15-minute walk from iconic beaches and golf courses. Nothing screams fun and solace more than a place that features a tropical outdoor terrace, a private pool, sunbeds and a BBQ. If you are one to appreciate nature, you will surely enjoy the breathtaking mountain views as you take a 15-minute stroll towards the famous harbor of Puerto Banus. The apartment offers everything you need in an extravagant way for a comfortable stay including a fully-equipped designer kitchen, three sumptuous bedrooms, and three ensutite bathrooms.`,
        amenities: "/apartments/nueva.png"
    }
]

const Apartment = ({ apartment }) => {
    const router = useRouter();
    const { setSelectedApartment } = useGlobalContext()
    useEffect(() => {
        setSelectedApartment(null)
    }, [])
    const handleBook = () => {
        setSelectedApartment(apartment);

        router.push('/book?category=apartment')
    }
    return <>
        <div className='border  flex flex-col justify-between shadow-sm p-2 rounded-lg bg-gray-50'>
            <Carousel photos={apartment?.images} />

            <div className='flex flex-col lg:flex-row justify-between  items-center'>
                <div>
                    <p className='uppercase font-black mt-5 font-italian text-2xl'>{apartment?.name}</p>
                    <p className='py-2'>
                        <span className='font-thin'>Price From: {apartment?.price}€ / Week</span>
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
        name: singleObject.attributes.name, price: singleObject.attributes.price, details: singleObject.attributes.details, images: singleObject.attributes.images.data.map((singleImage) => {
            return `${singleImage.attributes.url}`
        }), beds: singleObject.attributes.beds,
        bathTube: singleObject.attributes.bathtub,
    };

}
const MainSection = () => {
    const [collection, setCollection] = useCollection('/api/apartments?populate=*')
    useEffect(() => {
        console.log(collection)
    }, [collection])
    return (
        <div className='px-2 lg:px-10 py-5' id='villas'>
            <div>
                <h1 className='text-5xl font-italian py-5'>Apartments</h1>
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

        </div>
    );
}
const page = () => {
    return <MainSection />
};

export default page;