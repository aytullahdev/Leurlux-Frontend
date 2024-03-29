'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import AboutService from '../AboutService';
import ArrowDown from '../resueable/ArrowDown';
import Link from 'next/link';
const services = [
    {
        title: "Private jets",
        img: require('@/assets/images/private-jet.jpeg').default.src,
        to: '/privatejet#top',
        book: '/book?category=privatejet#bookprivatejet',
        about: `Our luxury transfer service provides a seamless and sophisticated
        transportation experience, designed to meet the needs of the most
        
        discerning travelers. From the moment you arrive, our team of ex-
        perienced professionals will ensure that every detail of your transfer
        
        is executed flawlessly, from the comfort of our luxury vehicles to the
        
        personalized amenities and services we offer. Whether you’re ar-
        riving at the airport, departing for a special event, or simply need to
        
        get around town in style, our transfer service is designed to exceed
        your expectations and provide an unparalleled level of comfort,
        convenience, and luxury.`,
        next: '#Yachts'

    },
    {
        title: "Yachts",
        img: require('@/assets/images/yacht.jpeg').default.src,
        to: '/yachts#top',
        about: `Our luxury transfer service provides a seamless and sophisticated
        transportation experience, designed to meet the needs of the most
        
        discerning travelers. From the moment you arrive, our team of ex-
        perienced professionals will ensure that every detail of your transfer
        
        is executed flawlessly, from the comfort of our luxury vehicles to the
        
        personalized amenities and services we offer. Whether you’re ar-
        riving at the airport, departing for a special event, or simply need to
        
        get around town in style, our transfer service is designed to exceed
        your expectations and provide an unparalleled level of comfort,
        convenience, and luxury.`,
        next: '#Supercars'
    },
    {
        title: "Elite Cars",
        img: require('@/assets/images/supercar.png').default.src,
        to: '/supercars#top',
        about: `Our luxury transfer service provides a seamless and sophisticated
        transportation experience, designed to meet the needs of the most
        
        discerning travelers. From the moment you arrive, our team of ex-
        perienced professionals will ensure that every detail of your transfer
        
        is executed flawlessly, from the comfort of our luxury vehicles to the
        
        personalized amenities and services we offer. Whether you’re ar-
        riving at the airport, departing for a special event, or simply need to
        
        get around town in style, our transfer service is designed to exceed
        your expectations and provide an unparalleled level of comfort,
        convenience, and luxury.`
    },
]
const SingleServices = ({ service, handleAbout }) => {
    const { title, list, img, to, next } = service || {}
    const [isHover, setIsHover] = useState(false)
    const router = useRouter();
    return <>{
        service && title &&

        <div id={title} onClick={(e) => { e.preventDefault(); router.push(to) }} className='  text-white relative min-h-screen bg-cover origin-center bg-center cursor-pointer flex justify-center items-center' onMouseLeave={() => {
            setIsHover(false)
        }} onMouseOver={() => {
            setIsHover(true)
        }} style={
            {
                backgroundImage: !isHover ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${img})` : `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),url(${img})`,


            }

        }>
            <div className=' px-10  cursor-pointer relative w-full'>
                <h1 className=' font-italian text-5xl  items-center flex flex-row'>
                    {title}

                </h1>
                <div className='my-10 flex flex-row gap-5'>
                    <button onClick={(e) => { e.preventDefault(); router.push(to) }} className='bg-black px-5 py-1 rounded-xl font-thin text-xl'>BOOK NOW</button>
                    <button onClick={() => {
                        router.push(to)
                        // handleAbout(service)
                    }} className='text-white ml-auto cursor-pointer '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>


                </div>
                {title !== "Elite Cars" && <Link onClick={(e) => e.stopPropagation()} href={next} className={`block lg:hidden `}>
                    <ArrowDown />
                </Link>
                }
            </div>
        </div>
    }
    </>
}

const Rentals = () => {
    const [openAbout, setOpenAbout] = useState(false)
    const [aboutData, setAboutData] = useState(null)
    const handleAbout = (data) => {
        if (data) {
            setAboutData(data)
        }
        setOpenAbout((prev) => !prev)
    }
    return (
        <div className='w-full relative overflow-hidden h-[calc(100%-63px)]'>


            <div id='services' className='w-full  grid   grid-cols-1  md:grid-cols-2 lg:grid-cols-3' >
                {
                    services.map((singleServices, indx) => {
                        return <SingleServices aboutData={aboutData} handleAbout={handleAbout} key={`service${indx}`} service={singleServices} />
                    })
                }
            </div>
            <div className={`w-full  absolute top-0 duration-300 bg-gray-100  h-full  overflow-hidden  ${openAbout ? 'left-0' : 'left-[300%]'}`}>
                <AboutService handleAbout={handleAbout} aboutData={aboutData} service={"service"} />
            </div>
        </div>
    );
};




export default Rentals;