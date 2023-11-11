"use client"
import React from 'react';
import Image from 'next/image';

// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { useEffect, useState } from 'react';

const Offers = () => {
    const [offerSliders, setOfferSliders] = useState([])

    useEffect(() => {
        setOfferSliders([
            {
                id: 1,
                image: "/images/banner/banner2.jpg"
            },
            {
                id: 2,
                image: "/images/banner/banner2.jpg"
            },
            {
                id: 3,
                image: "/images/banner/banner2.jpg"
            },
            {
                id: 4,
                image: "/images/banner/banner2.jpg"
            },
        ])
    }, [])
    return (
        <>
            <div className="title-bar">
                <span className="title mb-0">Offer for you</span>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Autoplay]}
                spaceBetween={15}
                slidesPerView={1.15}
                autoplay={{ delay: 5000 }}
            >
                {offerSliders.map((slide) => {
                    return (
                        <SwiperSlide key={slide.id}>
                            <div className="swiper-slide">
                                <div className="card add-banner2">
                                    <Image src={slide.image} alt="/" height={250} width={350} />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </>
    );
};

export default Offers