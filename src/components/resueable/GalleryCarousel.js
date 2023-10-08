import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Thumbs, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const GalleryCarousel = () => {
    const images = [
        '/sterncar.jpeg',
        '/sterninteriro.jpeg',
        '/porsche2.jpeg',
        '/porsche4.jpeg',
        '/porsche5.jpeg',
        '/porsche6.jpeg',
    ];
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': 'white',
                    '--swiper-pagination-color': '#fff',
                }}
                autoplay={{ delay: 2000 }}
                loop={true}
                modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
            //thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img style={{ width: '600px', height: '300px' }} className=' h-full w-full' src={image} alt={`Image ${index}`} />
                    </SwiperSlide>
                ))}

            </Swiper>
            {/* <Swiper

                className='my-5'
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={0}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Pagination, Navigation, Thumbs]}

            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className='object-cover'
                            src={image}
                            alt={`Image ${index}`}
                            style={{ width: '200px', height: '100px' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </>
    );
};

export default GalleryCarousel;