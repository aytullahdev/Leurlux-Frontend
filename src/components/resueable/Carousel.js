'use client'
import { useState } from "react";

const Carousel = ({ photos }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const changeActivePhoto = (index) => {
        setActiveIndex(index);
    };

    const nextPhoto = () => {
        const newIndex = (activeIndex + 1) % photos.length;
        setActiveIndex(newIndex);
    };

    const prevPhoto = () => {
        const newIndex = (activeIndex - 1 + photos.length) % photos.length;
        setActiveIndex(newIndex);
    };

    return (
        <>
            {photos && photos.length > 0 ?
                <div onClick={(e) => e.stopPropagation()} className="">
                    <div className="relative">
                        <button
                            onClick={prevPhoto}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white font-bold py-2 px-4 rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>


                        </button>
                        <button
                            onClick={nextPhoto}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white font-bold py-2 px-4 rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                        <img
                            src={photos[activeIndex]}
                            alt="Main Photo"
                            className="lg:w-full h-[300px] rounded-lg"
                        />
                        <div className="w-full flex my-2 items-start justify-stitems-start">
                            <div className="flex overflow-scroll flex-row justify-start gap-4">
                                {photos.slice(0, 10).map((photo, index) => (

                                    <img
                                        key={index}
                                        src={photo}
                                        alt={`Thumbnail ${index}`}
                                        className={`h-20 w-20 rounded-lg cursor-pointer ${index === activeIndex ? 'border-2 border-blue-500' : ''
                                            }`}
                                        onClick={() => changeActivePhoto(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </>
    );
};
export default Carousel