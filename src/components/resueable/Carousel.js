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
        <div className="">
            <div className="relative">
                <button
                    onClick={prevPhoto}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white font-bold py-2 px-4 rounded-full"
                >
                    &lt;
                </button>
                <button
                    onClick={nextPhoto}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white font-bold py-2 px-4 rounded-full"
                >
                    &gt;
                </button>
                <img
                    src={photos[activeIndex]}
                    alt="Main Photo"
                    className="w-full h-auto rounded-lg"
                />
                <div className="w-full flex my-2 items-start justify-stitems-start">
                    <div className="flex overflow-scroll flex-row justify-start gap-4">
                        {photos.map((photo, index) => (
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
        </div>
    );
};
export default Carousel