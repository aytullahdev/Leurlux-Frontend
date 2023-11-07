'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import ArrowDown from '../../components/resueable/ArrowDown';
import GalleryCarousel from '../../components/resueable/GalleryCarousel';


const page = () => {
    return (
        <div>
            <div className='relative w-full '>
                <div className="relative h-[500px] lg:h-screen">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="https://cdn.globeair.com/website/m/globeair_website_header_2304_1920x1080.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-5 lg:px-10 py-5">

                        <div>
                            <h1 className='font-italian text-5xl lg:text-5xl xl:text-9xl py-2'> <span style={{ color: 'rgb(193, 182, 134)' }}> PRIVATE</span> JET
                            </h1>

                            {/* <p className='text-3xl lg:text-4xl xl:text-5xl py-5 lg:py-10 font-italian text-center'>
                                MARBELLA
                            </p> */}
                            {/* <div className='my-10'>
                                <div class="animate-bounce flex justify-center items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                        <div className='my-10'>
                            <Link className='px-5  block text-xl font-italian py-1 rounded-full bg-gray-300 hover:bg-gray-200 text-black' href="#privatejet">Private Jet</Link>
                        </div>
                        <Link href={'#privatejet'}>
                            <ArrowDown />
                        </Link>

                    </div>
                </div>

                <div className="inset-0  bg-black font-italian p-4 text-center">
                    <p className="text-3xl lg:text-6xl font-semibold text-white mb-2">
                        Unmatched Affordability
                    </p>
                </div>
                <div className='my-10  flex justify-center items-center'>
                    <Link href="/book?category=privatejet#bookprivatejet" className='text-xl lg:text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Get A Guote Now</Link>
                </div>





            </div>
            <div id='privatejet' className='py-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-4xl py-5'>Unmatched Affordability</h1>
                        <p className='text-justify text-sm lg:text-xl'> {`What sets LEURLUX apart is not just our commitment to luxury but also our dedication to affordability. We believe that top-tier private jet travel should be accessible to all, and we've achieved this by providing the most competitive prices in the world. Your journey is defined by luxury, not by cost, and we are delighted to make this vision a reality.`}</p>
                    </div>
                    <div className='bg-white text-black  p-5 '>
                        <h1 className='text-bold font-italian text-4xl py-5'>Your Journey, Your Way</h1>
                        <p className='text-justify text-sm lg:text-xl'>{`We understand that the needs of our discerning clientele vary. That's why LEURLUX ensures that your journey is as unique as you are. Whether you're traveling for business or pleasure, our expert concierge team tailors your experience to your preferences. No request is too extravagant no detail is too small.`}</p>
                    </div>
                    <div className='my-10  flex justify-center items-center lg:col-span-2'>
                        <Link href="/book?category=privatejet#bookprivatejet" className='text-xl lg:text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Get A Guote Now</Link>
                    </div>
                    <div className='bg-white text-black  p-5 lg:col-span-2 '>
                        <h1 className='text-bold font-italian text-4xl py-5 text-start lg:text-center'>Luxury Beyond the Skies</h1>
                        <p className='text-justify text-sm lg:text-xl'>{`While our private jet service elevates your travel, our commitment to luxury doesn't end upon landing. When you arrive at your destination, you'll be welcomed by our exceptional concierge services that redefine hospitality. From exclusive chauffeur-driven transfers to securing reservations at the world's finest restaurants, we ensure that every moment of your stay is extraordinary.`}
                            <span className='block py-5 bg-none'></span>
                            {` At LEURLUX, we invite you to embark on a journey where the sky is not the limit it's just the beginning. We are here to cater to your every need and desire, ensuring that your travel experience is nothing short of perfection.`}
                            <span className='block py-5 bg-none'></span>
                            {` Indulge in the luxury of seamless private jet travel with LEURLUX, and let us redefine the way you experience the world. Welcome to a world where luxury meets the skies and where your every travel dream becomes a reality.`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;