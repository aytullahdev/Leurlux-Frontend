'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
const services = [
    {
        title: "Rentals",
        list: ['Private jets', 'Yachts', 'Elite Cars'],
        img: require('@/assets/images/private-jet.jpeg').default.src,
        to: 'rentals#top'

    },
    {
        title: "Transfer",
        list: ['From/To Airport', 'Private chauffer'],
        img: require('@/assets/images/car.jpeg').default.src,
        to: 'transfer#top'
    },
    {
        title: "Property",
        list: ['Villas for rent', 'Apartment for rent', 'Hotels'],
        img: require('@/assets/images/villa.jpeg').default.src,
        to: 'property#top'
    },
    {
        title: "Lifestyle",
        list: ['Event/Beach & night clubs', 'Restaurants', 'Personal training'],
        img: require('@/assets/images/lifestyle.jpeg').default.src,
        to: 'lifestyle#top'
    }
]
const SingleServices = ({ service }) => {
    const { title, list, img, to } = service || {}
    const [isHover, setIsHover] = useState(false)
    const router = useRouter();
    return <>{
        service && title && list &&

        <div onClick={() => { router.push(to) }} className='  text-white relative h-[400px] lg:min-h-screen bg-cover  origin-center bg-center cursor-pointer' onMouseLeave={() => {
            setIsHover(false)
        }} onMouseOver={() => {
            setIsHover(true)
        }} style={
            {
                backgroundImage: !isHover ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${img})` : `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),url(${img})`,
                backgroundSize: 'fit',


            }

        }>
            <div className='absolute bottom-0 left-0 px-5 lg:px-10 h-[200px]'>
                <h1 className=' font-italian text-xl lg:text-3xl'>
                    {title}
                </h1>
                <ul className='text-xs lg:text-base font-thin flex flex-col gap-2 my-10'>
                    {list && list.map((singleItem, indx) => {
                        return <li key={`servicelist${indx}`}>{singleItem}</li>
                    })}
                </ul>
            </div>
        </div>
    }
    </>
}
const Services = () => {
    return (
        <div id='services' className='w-full grid-cols-2 grid lg:grid-cols-4' >
            {
                services.map((singleServices, indx) => {
                    return <SingleServices key={`service${indx}`} service={singleServices} />
                })
            }
        </div>
    );
};

export default Services;