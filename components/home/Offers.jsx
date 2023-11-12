"use client"
import React from 'react';
import Image from 'next/image';

// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useState } from 'react';

const Offers = () => {
    const [offerSliders, setOfferSliders] = useState([])

    useEffect(() => {
        setOfferSliders([
            { id: 1, image: "/images/banner/banner2.jpg" },
            { id: 2, image: "/images/banner/banner2.jpg" },
            { id: 3, image: "/images/banner/banner2.jpg" },
            { id: 4, image: "/images/banner/banner2.jpg" },
            { id: 5, image: "/images/banner/banner2.jpg" },
            { id: 6, image: "/images/banner/banner2.jpg" },
            { id: 7, image: "/images/banner/banner2.jpg" },
            { id: 8, image: "/images/banner/banner2.jpg" },
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
                slidesPerView='auto'
                autoplay={{ delay: 4000 }}
            >
                {offerSliders.map((slide) => {
                    return (
                        <SwiperSlide style={{width:'auto'}} key={slide.id}>
                            <div style={{}} >
                                <Image style={{borderRadius:10}} src={slide.image} alt="/" height={197} width={350} />
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </>
    );
};

export default Offers