import React from 'react';

const page = () => {
    return (
        <div className='py-3'>
            <h1 className='text-xl lg:text-4xl font-italian py-5 font-bold text-center'>Welcome to LeurLux, your gateway to luxury experiences. Our home base is in Lisbon, Portugal, and we specialize in creating unforgettable moments for you.
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-10 text-center py-10 px-5 lg:px-0'>
                <div className=''>
                    <h1 className='text-3xl font-bold font-serif py-2'>{` Our Founder's Story`}</h1>
                    <p className='text-xl font-italian text-left'>{`Our journey began when our founder started helping people like athletes, musicians, investors, diplomats, and even royal families. Their experience guides our dedication to making your experience exceptional.`}</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold font-serif py-2'>{`What We Do`}</h1>
                    <p className='text-xl font-italian text-left'>{` LeurLux takes care of you from the moment you think about your trip until you return. We make your dreams come true during your stay.
`}</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold font-serif py-2'>{`  Where We Operate`}</h1>
                    <p className='text-xl font-italian text-left'>{`You can find us in amazing places like Marbella, Ibiza, Mallorca, Madrid, Barcelona, Algarve, Lisbon, Mykonos, Dubai, Qatar, Los Angeles, New York, Las Vegas, London, and Miami.
`}</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold font-serif py-2'>{`Great Service`}</h1>
                    <p className='text-xl font-italian text-left'>{` Our top priority is taking good care of you. We want to make sure we don't just meet but exceed your expectations.

`}</p>
                </div>
                <div className='lg:col-span-2'>
                    <h1 className='text-3xl font-bold font-serif py-2'>{`Your Dreams, Our Mission`}</h1>
                    <p className='text-xl font-italian'>{` With LeurLux, anything you dream of is possible. We're here to make your dreams a reality.

`}</p>
                </div>


            </div>
            <div className='px-5 lg:px-0' >
                <h1 className='text-3xl lg:text-3xl  font-serif py-2'>{`Welcome to LEURLUX`}</h1>
                <p className='text-xl font-italian'>{`  Enter the world of LeurLux, where luxury, elegance, and fantastic experiences come together to create memories you'll cherish.

`}</p>
            </div>
        </div>
    );
};

export default page;