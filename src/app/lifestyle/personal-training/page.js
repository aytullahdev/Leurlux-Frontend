'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
const TrainingPricing = () => {
    const personalTrainingPackage = [
        {
            tittle: "Single Person",
            sessions: [
                {
                    type: '1 session',
                    price: '100€',
                    pricetag: '',
                    session: ''
                },
                {
                    type: '10 sessions',
                    price: '775€',
                    pricetag: '',
                    session: ''
                },
                {
                    type: '20 sessions',
                    price: '1,350€',
                    pricetag: '',
                    session: ''
                }
            ]
        },
        {
            tittle: "Couple Training",
            sessions: [
                {
                    type: '1 session',
                    price: '75€',
                    pricetag: 'Per Person',
                    session: ''
                },
                {
                    type: '10 sessions',
                    price: '600€',
                    pricetag: 'Per Person',
                    session: ''
                },
                {
                    type: '20 sessions',
                    price: '1,000€',
                    pricetag: 'Per person',
                    session: ''
                }
            ]
        },
        {
            tittle: "3+ Person",
            sessions: [
                {
                    type: '1 session',
                    price: '60€',
                    pricetag: 'per person',
                    session: ''
                },
                {
                    type: '10 sessions',
                    price: '450€',
                    pricetag: 'per person',
                    session: ''
                },
                {
                    type: '20 sessions',
                    price: '800€',
                    pricetag: 'per person',
                    session: ''
                }
            ]
        }

    ]
    const proPlayerTrainingPackage = [
        {
            tittle: "1 Player Package",
            sessions: [
                {
                    type: '1-5 sessions',
                    price: '450€ - 1000€',
                    pricetag: 'per player',
                    session: 'per session'
                },
                {
                    type: '5+ sessions',
                    price: '350€ - 700€',
                    pricetag: 'per player',
                    session: 'per session'
                }
            ]
        },
        {
            tittle: "2+ Player Package",
            sessions: [
                {
                    type: '1-5 sessions',
                    price: '375€ - 700€',
                    pricetag: 'per player',
                    session: 'per session'
                },
                {
                    type: '5+ sessions',
                    price: '275€ - 500€',
                    pricetag: 'per player',
                    session: 'per session'
                }
            ]
        },

    ]
    return (<div className='font-italian py-5 bg-white text-black px-5 lg:px-5 '>
        <div >
            <div>
                <h1 className='text-4xl'>PERSONAL <span style={{ color: 'rgb(193, 182, 134)' }}>TRAINING</span></h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
                    {personalTrainingPackage.map((singlePackage, indx) => {
                        return (
                            <div key={`package${indx}`} className='uppercase font-mono  text-black shadow-sm p-5 border rounded '>
                                <h1 className=' text-white bg-black py-2 rounded-lg text-xl lg:text-2xl text-center'>{singlePackage.tittle}</h1>
                                <div className='flex flex-row gap-2 lg:gap-10 py-5 justify-center items-center '>
                                    {
                                        singlePackage.sessions.map((singleSession, indx) => {
                                            return (
                                                <div key={`session-${indx}`} className='text-center lg:text-xl flex flex-col gap-1 justify-start'>
                                                    <h1 className='font-mono text-base lg:text-base'>{singleSession.type}</h1>
                                                    <h2 className=' text-base lg:text-base font-serif'>{singleSession.price}</h2>
                                                    <h3 className='text-xs lg:text-base'>{singleSession.pricetag}</h3>
                                                    <h4 className='text-xs lg:text-base'>{singleSession.session}</h4>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className='py-10'>
                    <h1 className='text-4xl'>PROFFESIONAL FOOTBALL <span style={{ color: 'rgb(193, 182, 134)' }}>TRAINING</span></h1>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
                        {proPlayerTrainingPackage.map((singlePackage, indx) => {
                            return (
                                <div key={`package${indx}`} className='uppercase  text-black shadow-sm p-5 border rounded '>
                                    <h1 className=' text-white bg-black font-mono py-2 rounded-lg text-xl lg:text-2xl text-center'>{singlePackage.tittle}</h1>
                                    <div className='flex flex-row gap-2 lg:gap-10 py-5 font-mono justify-center items-center '>
                                        {
                                            singlePackage.sessions.map((singleSession, indx) => {
                                                return (
                                                    <div key={`session-${indx}`} className='text-center lg:text-xl flex flex-col gap-1 justify-start'>
                                                        <h1 className='font-mono text-base lg:text-base'>{singleSession.type}</h1>
                                                        <h2 className=' text-base lg:text-base font-serif'>{singleSession.price}</h2>
                                                        <h3 className='text-xs lg:text-base'>{singleSession.pricetag}</h3>
                                                        <h4 className='text-xs lg:text-base'>{singleSession.session}</h4>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>

    </div>)
}
const PersonalTrainingVideos = () => {
    const personalTrainingVideos = [
        '/personal-training/personal-training.mp4',
        '/personal-training/player.mp4',
        '/personal-training/personal-training1.mp4',

    ];
    const [isPlaying, setIsPlaying] = useState(Array(personalTrainingVideos.length).fill(false));

    const handleVideoHover = (index) => {
        const newIsPlaying = [...isPlaying];
        newIsPlaying[index] = true;
        setIsPlaying(newIsPlaying);
    };

    const handleVideoLeave = (index) => {
        const newIsPlaying = [...isPlaying];
        newIsPlaying[index] = false;
        setIsPlaying(newIsPlaying);
    };

    return (


        <div className='grid grid-cols-3 my-5' id='personal-training'>
            {personalTrainingVideos.map((singleVideo, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleVideoHover(index)}
                    onMouseLeave={() => handleVideoLeave(index)}
                    className='relative'
                >
                    <video
                        autoPlay={true} // Auto-play based on isPlaying state
                        loop
                        muted
                        className='w-full h-[300px] lg:h-full object-cover'
                    >
                        <source src={singleVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>



    );
}
const PersonalTraining = () => {



    return (
        <div className='bg-white'>

            <div className='bg-white'>
                <div

                    className='relative h-[300px] lg:h-auto'
                >
                    <video
                        autoPlay
                        loop
                        muted
                        className='w-full h-full object-cover'
                    >
                        <source src={'/personal-training/training.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                    <div class="absolute inset-0 flex flex-col items-start justify-center text-white px-10 py-5">

                        <div>

                            <h1 className='text-3xl lg:text-8xl font-italian'>Personal <span style={{ color: 'rgb(193, 182, 134)' }}>Training</span></h1>
                            <p className='text-base lg:text-4xl font-italian py-5'>Achieve Your Fitness Goals with Personal Training</p>
                        </div>
                        <div className='my-10 '>
                            <Link className='px-2 lg:px-5   block lg:text-xl font-italian py-1 rounded-full bg-gray-300 hover:bg-gray-200 text-black' href="#personal-training">Personal Training</Link>
                        </div>


                    </div>

                </div>
            </div>
            <div className='my-10  flex justify-center items-center'>
                <Link href="/book?category=personal-training#top" className='lg:text-3xl bg-black text-white px-5 lg:px-10 py-2 rounded-lg font-italian '>Book Now</Link>
            </div>
            <div>
                <TrainingPricing />
            </div>
            <PersonalTrainingVideos />
            <div className='mt-10 pb-5 flex justify-center items-center'>
                <Link href="/book?category=personal-training#top" className='lg:text-3xl bg-black text-white px-5  lg:px-10 py-2 rounded-lg font-italian '>Book Now</Link>
            </div>
        </div>
    );
}
const Page = () => {
    return <>
        <PersonalTraining />
    </>
};

export default Page;