'use client'
import Carousel from '@/components/resueable/Carousel';
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
    '/porsche1.jpeg',
    '/porsche2.jpeg',
    '/porsche3.jpeg',
    '/porsche4.jpeg',
    '/porsche5.jpeg',
    '/porsche6.jpeg',
]

const page = () => {
    const router = useRouter();
    return (
        <div>
            <div className='relative w-full '>
                <div class="relative h-screen">
                    <video autoPlay loop muted class="w-full h-full object-cover">
                        <source src="/transport.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div class="absolute inset-0 bg-black opacity-70"></div>
                    <div class="absolute inset-0 flex flex-col items-center justify-center text-white px-10 py-5">

                        <div>
                            <h1 className='font-italian text-5xl xl:text-9xl py-2'>THE LUXURY
                                TRANSPORTATION </h1>

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
                <section id="transports" className="bg-gray-100 py-16">
                    <div>
                        <div className=" py-5">
                            {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                    {transportsPricing.map((singleOption) => {
                                        return (<div onClick={() => {
                                            router.push('/book?category=transport')

                                        }} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg">
                                            <div className="px-6 py-4">
                                                <h3 className="text-2xl  font-semibold text-gray-800 mb-2">{singleOption.title}</h3>
                                                <p className="text-gray-600 text-lg mb-4">{singleOption.price}</p>
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

                        <div className="flex flex-wrap mx-4">
                            <div className="w-full lg:w-1/2 px-4 mb-8">
                                <img
                                    src="/sterncar.jpeg"
                                    alt="Luxury Transportation 1"
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                            <div className="w-full  lg:w-1/2 px-4 mb-8 flex flex-col gap-5 text-justify justify-center items-center">
                                <p className="text-lg p-5 font-thin xl:text-2xl ">
                                    We at LEURLUX understand that every journey should be a luxurious
                                    and stress-free experience, and that's precisely what we aim to
                                    provide for each and every one of our esteemed clients. Our core
                                    focus lies in delivering top-notch Airport transportation and
                                    private chauffeur services that are tailored to your specific
                                    needs.
                                </p>
                                <Link href="/book?category=transport" className='text-2xl bg-black text-white  px-10 py-1 rounded-lg font-italian'>Book Now</Link>
                            </div>
                        </div>
                        <div className=" mx-4 my-5">
                            <h1 className='text-3xl font-italian my-5'>Our Transport</h1>
                            <div className='grid grid-cols-3 gap-5'>
                                <img className='rounded-lg' src='/sterncar.jpeg' />
                                <img className='rounded-lg' src='/sterninteriro.jpeg' />
                                <img className='rounded-lg' src='/porsche2.jpeg' />
                                <img className='rounded-lg' src='/porsche3.jpeg' />
                                <img className='rounded-lg' src='/porsche4.jpeg' />
                                <img className='rounded-lg' src='/porsche5.jpeg' />
                                <img className='rounded-lg' src='/porsche6.jpeg' />

                            </div>
                        </div>

                        <div className="flex flex-wrap ">
                            <div className="w-full lg:w-1/2 px-4 mb-8 flex flex-col gap-5 text-justify justify-center items-center">
                                <p className="text-lg  p-5 font-thin xl:text-2xl">
                                    Unparalleled Airport Transportation: When it comes to airport
                                    transfers, We stand out as your reliable partner. Whether you are
                                    arriving in Marbella or departing for another destination, we
                                    ensure a seamless and comfortable journey. Our professional
                                    chauffeurs will greet you at the airport, assist with your
                                    luggage, and escort you to your chosen vehicle – ensuring you
                                    start or end your journey in the utmost style and relaxation.
                                </p>
                                <Link href="/book?category=transport" className='text-2xl bg-black text-white  px-10 py-1 rounded-lg font-italian'>Book Now</Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8">
                                <img
                                    src="/sterninteriro.jpeg"
                                    alt="Luxury Transportation 2"
                                    className="rounded-lg shadow-md"
                                />
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
                                            <h3 className="text-2xl  font-semibold text-gray-800 mb-2">{singleOption.title}</h3>
                                            <p className="text-gray-600 text-lg mb-4">{singleOption.price}</p>
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