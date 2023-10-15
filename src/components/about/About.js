'use client'
import React, { useState } from 'react';

const About = () => {
    const [isHover, setIsHover] = useState(false)
    return (
        <>
            <div id='about' className='w-full py-20 lg:py-60 bg-cover bg-center  ' onMouseLeave={() => {
                setIsHover(false)
            }} onMouseOver={() => {
                setIsHover(true)
            }} style={{
                backgroundImage: !isHover ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${require('@/assets/images/yacht.jpeg').default.src
                    })` : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${require('@/assets/images/yacht.jpeg').default.src
                    })`,
            }} >
                <h1 className='font-italian text-2xl lg:text-5xl text-center p-5' style={{ color: 'rgb(242, 245, 220)' }}>
                    <p> {`"THE ART OF LIVING IS THE ART OF BRINGING`}</p>
                    <p className='mt-5'>{`DREAMS AND REALITY TOGETHER"`}</p>
                </h1>

            </div >
            <div className=''>
                <div className='text-white bg-[#232222] py-20 p-5 ' >
                    <h1 className='font-italian text-5xl py-5'>Our network</h1>
                    <div className='flex flex-col  mt-10 text-base text-justify lg:text-left lg:text-3xl font-thin'>
                        <p >
                            {` We’re proud to offer our luxury concierge services in some of the world’s most vibrant and exciting cities. From New York to Paris, Marbella to Dubai, our team of experienced concierge profession- als is here to provide you with the highest level of service and attention to detail.
`}

                        </p>
                        <p className='mt-5'>
                            {`No matter where your travels take you, our luxury concierge ser- vice is here to help you feel at home. From transportation to accommodations, dining reservations to event planning, we take care of everything so that you can focus on enjoying your trip.`}
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default About;