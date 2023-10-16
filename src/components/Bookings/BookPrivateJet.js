import React, { useContext, useEffect, useState } from 'react';
const BookPrivateJet = () => {

    const countryes = ['Europe', ' New Zealand', 'Australia', 'The South Pacific']
    return <div className='relative w-full h-full' id='bookprivatejet'>
        {/* <video className='w-full h-full   z-40 ' autoPlay loop muted playsInline>
            <source src="https://cdn.globeair.com/website/m/globeair_website_header_2304_1920x1080.mp4" type="video/mp4" />

        </video> */}
        <div className='absolute inset-0 flex flex-col gap-10 items-center justify-start backdrop-blur-sm bg-white/60 py-10 px-5 rounded'>
            <div>
                <h1 className='text-3xl lg:text-6xl font-italian'>
                    Private Aircraft Charter
                </h1>
                <ul className='flex items-center justify-center flex-row  my-5 py-5 text-base'>
                    {
                        countryes.map((singleCountry) => {
                            return <li key={singleCountry} className=' font-italian text-sm lg:text-xl text-center mx-[2px] lg:mx-2'>{singleCountry} |</li>
                        })
                    }

                </ul>

            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>


            </div>
        </div>


    </div>

}

export default BookPrivateJet