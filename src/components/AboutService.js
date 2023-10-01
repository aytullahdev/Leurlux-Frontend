import Link from 'next/link';
import React from 'react';

const AboutService = ({ handleAbout, aboutData }) => {
    return (
        <>
            {
                aboutData &&
                <div className='relative w-full h-full overflow-hidden'>
                    <button onClick={() => handleAbout()} className='cursor-pointer absolute top-5 left-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                    </button>
                    <div className='grid grid-cols-2 '>
                        <div className='w-full h-[900px] bg-cover  bg-center' style={
                            {
                                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)),url(${aboutData.img})`,

                            }

                        }>

                        </div>
                        <div className='flex flex-col gap-10 justify-center text-center items-center'>
                            <h1 className='text-5xl font-bold font-italian '>
                                {aboutData.title}
                            </h1>
                            <p className='text-black px-10 text-justify  font-thin  '>
                                {aboutData.about}
                            </p>
                            <div>
                                <Link href={aboutData.to} className='bg-black text-white px-5 py-1 rounded-xl font-thin text-xl'>BOOK NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default AboutService;