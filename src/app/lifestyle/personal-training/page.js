'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
const PersonalTrainingVideos = () => {
    const personalTrainingVideos = [
        '/personal-training/personal-training.mp4',
        '/personal-training/personal-training1.mp4',
        '/personal-training/personal-training3.mp4'
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
                        <source src={'/personal-training/personal-training2.mp4'} type="video/mp4" />
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
                <Link href="/book?category=personal-training" className='lg:text-3xl bg-black text-white px-5 lg:px-10 py-2 rounded-lg font-italian '>Book Now</Link>
            </div>
            <PersonalTrainingVideos />
            <div className='mt-10 pb-5 flex justify-center items-center'>
                <Link href="/book?category=personal-training" className='lg:text-3xl bg-black text-white px-5  lg:px-10 py-2 rounded-lg font-italian '>Book Now</Link>
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