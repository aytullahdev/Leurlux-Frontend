import React from 'react';

const page = () => {
    return (
        <div className='py-0 bg-[#232222] h-screen flex flex-col justify-around'>
            <div className=''>
                <div className='text-white bg-[#232222] py-1 p-5 ' >
                    <h1 className='font-italian text-4xl py-1'>Welcome to LeurLux, your gateway to luxury experiences. Our home base is in Lisbon, Portugal, and we specialize in creating unforgettable moments for you.</h1>


                </div>
            </div>
            <div className='text-white bg-[#232222] py-1 p-5 ' >
                <h1 className='font-italian text-4xl py-1'>{` Our Founder's Story`}</h1>
                <div className='flex flex-col  mt-4 text-base text-justify lg:text-left lg:text-xl font-thin'>
                    <p >
                        {`Our journey began when our founder started helping people like athletes, musicians, investors, diplomats, and even royal families. Their experience guides our dedication to making your experience exceptional.`}


                    </p>

                </div>

            </div>
            <div className='text-white bg-[#232222] py-1 p-5 ' >
                <h1 className='font-italian text-4xl py-1'>{`What We Do`}</h1>
                <div className='flex flex-col  mt-4 text-base text-justify lg:text-left lg:text-xl font-thin'>
                    <p >
                        {` LeurLux takes care of you from the moment you think about your trip until you return. We make your dreams come true during your stay.`}

                    </p>

                </div>

            </div>
            <div className='text-white bg-[#232222] py-1 p-5 ' >
                <h1 className='font-italian text-4xl py-1'>{` Where We Operate`}</h1>
                <div className='flex flex-col  mt-4 text-base text-justify lg:text-left lg:text-xl font-thin'>
                    <p >
                        {`Marbella, Ibiza, Mallorca, Madrid, Barcelona, Stockholm, Lisbon, London, Amsterdam, Paris, Mykonos, Santorini, Dubai, Qatar, Los Angeles, New York, Las Vegas, and Miami`}

                    </p>

                </div>

            </div>
            <div className='text-white bg-[#232222] py-1 p-5 ' >
                <h1 className='font-italian text-4xl py-1'>{`Great Service`}</h1>
                <div className='flex flex-col  mt-4 text-base text-justify lg:text-left lg:text-xl font-thin'>
                    <p >
                        {` Our top priority is taking good care of you. We want to make sure we don't just meet but exceed your expectations.`}

                    </p>

                </div>

            </div>
            <div className='text-white bg-[#232222] py-1 p-5 ' >
                <h1 className='font-italian text-4xl py-1'>{`Your Dreams, Our Mission`}</h1>
                <div className='flex flex-col  mt-4 text-base text-justify lg:text-left lg:text-xl font-thin'>
                    <p >
                        {` With LeurLux, anything you dream of is possible. We're here to make your dreams a reality.`}

                    </p>

                </div>
                <div className=' py-1 pt-5' >
                    <h1 className='font-italian text-4xl py-1'>{`Welcome to LEURLUX`}</h1>
                    <p className='text-xl font-italian'>{`  Enter the world of LeurLux, where luxury, elegance, and fantastic experiences come together to create memories you'll cherish.

`}</p>
                </div>

            </div>

        </div>
    );
};

export default page;