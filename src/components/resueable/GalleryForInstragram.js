import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Thumbs, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
const GalleryForInstragram = ({ images, slidesPerView = 3 }) => {
    return (
        <>
            {images &&
                <Swiper
                    style={{
                        '--swiper-navigation-color': 'black',
                        '--swiper-pagination-color': '#fff',
                    }}
                    modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                    spaceBetween={10}
                    slidesPerView={slidesPerView}
                    navigation
                    pagination={{ clickable: true }}

                //thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                >
                    {images.slice(0, 10).map((image, index) => (
                        <SwiperSlide key={index}>
                            <img className='w-auto mx-auto h-auto max-h-[300px] max-w-full object-contain' loading='lazy' src={image} alt={`Image ${index}`} />
                        </SwiperSlide>
                    ))}

                </Swiper>

            }
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

export default GalleryForInstragram;