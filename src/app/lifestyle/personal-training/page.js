'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const personalTrainingVideos = [
    '/personal-training/personal-training.mp4',
    '/personal-training/personal-training1.mp4',
    '/personal-training/personal-training3.mp4'
];
const Page = () => {
    const [isPlaying, setIsPlaying] = useState(Array(personalTrainingVideos.length).fill(false));
    const videoRefs = personalTrainingVideos.map(() => useRef(null));


    const handleVideoHover = (index) => {
        const newIsPlaying = [...isPlaying];
        newIsPlaying[index] = true;
        setIsPlaying(newIsPlaying);
        videoRefs[index].current.play();
    };

    const handleVideoLeave = (index) => {
        const newIsPlaying = [...isPlaying];
        newIsPlaying[index] = false;
        setIsPlaying(newIsPlaying);
        videoRefs[index].current.pause();
    };

    return (
        <div className=''>

            <div className='  py-2s'>
                <div

                    className='relative'
                >
                    <video
                        autoPlay
                        loop
                        muted
                        className='w-full h-full object-cover'
                    >
                        <source src={'/personal-training/personal-training2.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                    <div class="absolute inset-0 flex flex-col items-start justify-center text-white px-10 py-5">

                        <div>

                            <h1 className='text-8xl font-italian'>Personal <span style={{ color: 'rgb(193, 182, 134)' }}>Training</span></h1>
                            <p className='text-4xl font-italian py-5'>Achieve Your Fitness Goals with Personal Training</p>
                        </div>
                        <div className='my-10 '>
                            <Link className='px-5   block text-xl font-italian py-1 rounded-full bg-gray-300 hover:bg-gray-200 text-black' href="#personal-training">Personal Training</Link>
                        </div>


                    </div>

                </div>
            </div>
            <div className='my-10  flex justify-center items-center'>
                <Link href="/book?category=personal-training" className='text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Book Now</Link>
            </div>
            <div className='grid grid-cols-3 my-5' id='personal-training'>
                {personalTrainingVideos.map((singleVideo, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleVideoHover(index)}
                        onMouseLeave={() => handleVideoLeave(index)}
                        className='relative'
                    >
                        <video
                            ref={videoRefs[index]}
                            loop
                            muted
                            className='w-full h-full object-cover'
                        >
                            <source src={singleVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                ))}
            </div>
            <div className='my-10  flex justify-center items-center'>
                <Link href="/book?category=personal-training" className='text-3xl bg-black text-white  px-10 py-2 rounded-lg font-italian '>Book Now</Link>
            </div>
        </div>
    );
};

export default Page;