'use client'
import Carousel from '@/components/resueable/Carousel';
import GalleryCarousel from '@/components/resueable/GalleryCarousel';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const transportsPricing = [
    {
        "title": "Malaga Airport - Marbella",
        "price": "175€"
    },
    {
        "title": "Marbella - Malaga Airport",
        "price": "175€"
    },
    {
        "title": "Full day",
        "price": "9 Hours! 1,000€"
    },

]
const cars = [
    '/sterncar.jpeg',
    '/sterninteriro.jpeg',
    '/porsche3.jpeg',
    '/porsche2.jpeg',
    '/porsche4.jpeg',
    '/porsche5.jpeg',
    '/porsche6.jpeg',

];
const hongqi_photos = ['/sterncar.jpeg',
    '/sterninteriro.jpeg',


]
const porsche_photos = [
    '/porsche3.jpeg',
    '/porsche4.jpeg',
    '/porsche5.jpeg',

]
const page = () => {
    return (
        <div>
            <div className='relative w-full '>
                <div className="relative h-screen">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="/hongqi.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-10 py-5">

                        <div>
                            <h1 className='font-italian text-5xl xl:text-9xl py-2'>THE LUXURY
                                <span style={{ color: 'rgb(193, 182, 134)' }}> TRANSPORTATION</span></h1>

                            <p className='text-4xl xl:text-5xl py-10 font-italian text-center'>
                                MARBELLA
                            </p>
                            {/* <div className='my-10'>
                                <div class="animate-bounce flex justify-center items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                        <div className='my-10'>
                            <Link className='px-5  block text-xl font-italian py-1 rounded-full bg-gray-300 hover:bg-gray-200 text-black' href="#transports">Transport</Link>
                        </div>


                    </div>
                </div>

                <div className="inset-0  bg-black font-italian p-4 text-center">
                    <p className="text-6xl font-semibold text-white mb-2">
                        Environmentally Friendly Transportation
                    </p>
                    <p className="text-xl py-5 text-white">
                        We proudly use fully electric cars to reduce carbon emissions and protect the environment.
                    </p>
                </div>
                <div className='my-10  flex justify-center items-center'>
                    <Link href="/book?category=transport" className='text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Book Now</Link>
                </div>
                <section id="transports" className="bg-gray-100 py-5">
                    <div>
                        <div className=" py-5">
                            {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                    {transportsPricing.map((singleOption) => {
                                        return (<div onClick={() => {
                                            router.push('/book?category=transport')

                                        }} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg">
                                            <div className="px-6 py-4">
                                                <h3 className="text-2xl  font-semibold text-black mb-2">{singleOption.title}</h3>
                                                <p className="text-black text-lg mb-4">{singleOption.price}</p>
                                            </div>
                                        </div>
                                        )
                                    })}


                                </div>
                            </div> */}


                        </div>
                    </div>
                    <div className="container mx-auto">
                        <div className="text-center mb-10">
                            <h2 className=" text-5xl xl:text-7xl font-italian font-semibold text-black">
                                DRIVEN BY EXCELLENCE
                            </h2>
                            <p className="text-lg  xl:text-2xl my-5">DEFINED BY LUXURY</p>
                        </div>
                        {/* <div className=" mx-4 my-5">
                            <h1 className='text-3xl font-italian my-5'>Our Transport</h1>
                            <div className='w-full '>
                                <GalleryCarousel images={cars} />

                            </div>
                        </div> */}
                        <div className="flex flex-row flex-wrap mx-4 font-italian">

                            <div className="w-full   px-4 mb-8 flex flex-col gap-5 text-justify justify-center items-center">
                                <section className="bg-gray-100 py-5">
                                    <div className="container mx-auto px-4">
                                        <h2 className="text-3xl font-semibold text-black mb-6">Explore the Luxurious Hongqi E-HS9</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                            <div className="flex-row flex justify-center items-center ">
                                                <GalleryCarousel slidesPerView={1} images={hongqi_photos} />

                                            </div>
                                            <div className='flex flex-col gap-8'>

                                                <div className="bg-white rounded-lg shadow-lg p-6 ">
                                                    <h3 className="text-xl font-semibold text-black mb-4">Experience Unparalleled Comfort</h3>
                                                    <p className="text-black">
                                                        {`The Hongqi E-HS9 offers a luxurious and comfortable travel experience for all your transportation needs. With its spacious interior, premium materials, and advanced features, you'll enjoy every moment of your journey.`}
                                                    </p>
                                                </div>

                                                <div className="bg-white rounded-lg shadow-lg p-6">
                                                    <h3 className="text-xl font-semibold text-black mb-4">Environmentally Friendly Travel</h3>
                                                    <p className="text-black">
                                                        {`We are proud to use the Hongqi E-HS9, a fully electric car, for our transport services. This means you can travel in style while also contributing to a cleaner environment. Enjoy eco-friendly travel with us.`}
                                                    </p>
                                                </div>

                                                <div className="bg-white rounded-lg shadow-lg p-6">
                                                    <h3 className="text-xl font-semibold text-black mb-4">Tailored Transport Services</h3>
                                                    <p className="text-black">
                                                        {`Our transport services are designed to cater to your specific needs. Whether you're heading to the airport, attending business meetings, or exploring the city, the Hongqi E-HS9 ensures a comfortable and tailored experience.`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="text-black bg-gray-100 font-italian py-10 px-10">
                                    <p className="text-6xl font-bold py-10">Gyles Taylor</p>
                                    <div className='font-italian text-2xl flex flex-col gap-9'>
                                        <div className='flex flex-row gap-10'>
                                            <img src='/gyles-taylor.png' className='w-[200px] block mx-auto' />
                                            <div className='flex flex-col gap-10 font-italian font-bold'>
                                                <p className='text-4xl'>
                                                    {`“I am very much looking forward to embarking on an exciting new career path with FAW. Hongqi, as the
                                                    oldest and most famous Chinese car brand, carries with it a deeply significant and diverse cultural history,”
                                                    <br />`}

                                                </p>
                                                <p className='text-2xl'> {`Taylor said. “There are many inspirational elements surrounding the marque with which to create fresh,
                                                    modern vehicles for the new era,” he added.`}</p>

                                            </div>

                                        </div>

                                        <p>
                                            {`Gyles Taylor worked for Rolls-Royce for 13 years since 2005. During his time at Rolls-Royce, Taylor and his
                                            team contributed to the creation of iconic models such as the Dawn convertible, the second-generation
                                            Phantom, and the luxurious Cullinan SUV.`}
                                        </p>
                                        <p>
                                            {`  So why would a man with such an impressive resume join FAW? Leaving aside the financial incentive, which
                                            we assume is more than generous, turning Hongqi into a global luxury player is surely a greater challenge
                                            than keeping Rolls-Royce at the top of the game.`}
                                        </p>


                                        <p>
                                            {`  Hongqi, whose name means "Red Flag" in Mandarin, was founded in 1958. Originally, only high-ranking
                                            government officials were allowed to use Hongqi models. The brand was revived in the mid-1990s and
                                            started building cars for a wider audience. Hongqi’s owner FAW Group is one of China’s big three
                                            automakers.`}
                                        </p>
                                    </div>
                                </div>
                                {/* <div className=' w-full'>
                                    <h2 className="text-4xl font-bold">Hongqi</h2>

                                    <div className="text-black font-thin grid grid-cols-3 gap-10">

                                        <div className="mt-4 text-2xl flex flex-col justify-start items-center bg-white rounded p-5">
                                            <h3 className=" font-semibold flex flex-row w-full justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                            </svg>
                                                6 Passengers</h3>
                                            <p className=" font-semibold flex flex-row w-full justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                                5 Hand luggage</p>
                                        </div>

                                        <div className="mt-4 text-2xl flex flex-col justify-start items-center bg-white rounded p-5">
                                            <h3 className=" font-semibold flex flex-row w-full justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                            </svg>
                                                5 Passengers</h3>
                                            <p className=" font-semibold flex flex-row w-full justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                                5 Hand luggage</p>
                                        </div>
                                        <div className="mt-4 text-2xl flex flex-col justify-start items-center bg-white rounded p-5">
                                            <h3 className=" font-semibold flex flex-row w-full justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                            </svg>
                                                4 Passengers</h3>
                                            <p className=" font-semibold flex flex-row w-full justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                                5 Check-in Luggage (30-45kg)</p>
                                        </div>
                                    </div>

                                </div> */}
                                <div className='my-10  flex justify-center items-center'>
                                    <Link href="/book?category=transport" className='text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Book Now</Link>
                                </div>

                                <Link href="/about?category=hongqi" className=' text-blue-500 font-italian text-center mx-auto text-xl block hover:text-blue-600 py-5'>Read more...</Link>
                            </div>
                        </div>


                        <div className="flex flex-row flex-wrap mx-4 font-italian">

                            <div className="w-full   px-4 mb-8 flex flex-col gap-5 text-justify justify-center items-center">
                                <section className="bg-gray-100 py-5">
                                    <div className="container mx-auto px-4">

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                                            <section className="bg-gray-100 py-12">
                                                <div className="container mx-auto px-4">
                                                    <h2 className="text-3xl font-semibold text-black mb-6">Experience Luxury with Porsche</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                                            <h3 className="text-xl font-semibold text-black mb-4">Unparalleled Performance</h3>
                                                            <p className="text-black">
                                                                {` Our transport services feature the renowned Porsche, delivering exceptional performance and style. Whether it's a swift airport transfer or a luxurious city ride, Porsche ensures an unforgettable journey.`}
                                                            </p>
                                                        </div>

                                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                                            <h3 className="text-xl font-semibold text-black mb-4">Sleek and Elegant Design</h3>
                                                            <p className="text-black">
                                                                {` The Porsche's iconic design stands as a symbol of sophistication. With its sleek lines and elegant aesthetics, you'll make a statement as you travel in style with our Porsche transport services.`}
                                                            </p>
                                                        </div>

                                                        <div className="bg-white rounded-lg shadow-lg p-6">
                                                            <h3 className="text-xl font-semibold text-black mb-4">Tailored to Your Needs</h3>
                                                            <p className="text-black">
                                                                {` Our Porsche transport services are tailored to cater to your specific requirements. Whether you need a quick airport transfer, a chauffeur for city exploration, or a stylish ride for special events, Porsche delivers.`}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <div className="flex-row flex justify-center items-center ">
                                                <GalleryCarousel slidesPerView={1} images={porsche_photos} />

                                            </div>
                                        </div>

                                    </div>
                                </section>
                                {/* <div className=' w-full'>
                                    <h2 className="text-4xl font-bold">Porsche</h2>

                                    <div className="text-black font-thin grid grid-cols-3 justify-center items-center gap-10">

                                        <div className="col-start-1 mt-4 text-2xl flex flex-col justify-start items-center bg-white rounded p-5">
                                            <h3 className=" w-full font-semibold flex flex-row   justify-start items-center gap-5">
                                                <svg
                                                    aria-describedby="desc"
                                                    aria-labelledby="title"
                                                    role="img"
                                                    viewBox="0 0 64 64"
                                                    className='w-5 h-5'
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <title>
                                                        Plane
                                                    </title>
                                                    <desc>
                                                        A solid styled icon from Orion Icon Library.
                                                    </desc>
                                                    <path
                                                        d="M57.4 38.3L37 22.5v-15a5 5 0 0 0-10 0v15L6.6 38.3S5 39.4 5 40.5v4.2a1.3 1.3 0 0 0 .7 1.3c.5.3 1.9-.3 2.4-.5L27 39.4v11.1L19.7 56a1.6 1.6 0 0 0-.7 1.4v3.1c0 .4.1 1.3 1.4.8L32 56.5l11.6 4.8c1.4.5 1.4-.5 1.4-.8v-3.1a1.6 1.6 0 0 0-.7-1.4L37 50.5V39.4l18.9 6.2c.5.2 1.9.7 2.4.5a1.3 1.3 0 0 0 .7-1.3v-4.3c0-1.1-1.6-2.2-1.6-2.2z"
                                                        data-name="layer1"
                                                        fill="#202020"
                                                    />
                                                </svg>
                                                From Airport
                                            </h3>
                                            <h3 className=" w-full font-semibold flex flex-row   justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                            </svg>
                                                5 Passengers</h3>
                                            <p className=" font-semibold w-full flex flex-row justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                                2  luggage</p>
                                            <p className="w-full font-semibold flex flex-row justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                                2 Hand luggage</p>
                                        </div>
                                        <div className="col-start-2 mt-4 text-2xl flex flex-col justify-start items-center bg-white rounded p-5">
                                            <h3 className=" w-full font-semibold flex flex-row   justify-start items-center gap-5">
                                                Rent</h3>
                                            <h3 className=" w-full font-semibold flex flex-row   justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                            </svg>
                                                6 Passengers</h3>
                                            <p className=" font-semibold w-full flex flex-row justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                                2  luggage</p>
                                            <p className="w-full font-semibold flex flex-row justify-start items-center gap-5"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                                2 Hand luggage</p>
                                        </div>


                                    </div>


                                </div> */}
                                <div className='my-10  flex justify-center items-center'>
                                    <Link href="/book?category=transport" className='text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Book Now</Link>
                                </div>
                                <Link href="/about?category=porsche" className=' text-blue-500 font-italian text-center mx-auto text-xl block hover:text-blue-600 py-5'>Read more...</Link>
                            </div>
                        </div>

                        {/* Add more sections with text and images as needed */}

                    </div>
                </section>


                <div>
                    {/* <div className="bg-gray-100 py-8">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                {transportsPricing.map((singleOption) => {
                                    return (<div onClick={() => {
                                        router.push('/book?category=transport')

                                    }} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg">
                                        <div className="px-6 py-4">
                                            <h3 className="text-2xl  font-semibold text-black mb-2">{singleOption.title}</h3>
                                            <p className="text-black text-lg mb-4">{singleOption.price}</p>
                                        </div>
                                    </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default page;