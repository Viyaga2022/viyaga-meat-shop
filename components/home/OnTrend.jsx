"use client"


import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

const OnTrend = () => {
    const [onTrend, setOnTrend] = useState([])

    useEffect(() => {
        setOnTrend([
            { id: 1, image: '/images/product/5.jpg', size: '1 pack', name: 'Goat Meat', currentPrice: 830, oldPrice: 1000 },
            { id: 2, image: '/images/product/5.jpg', size: '1 pack', name: 'Goat Meat', currentPrice: 830, oldPrice: 1000 },
            { id: 3, image: '/images/product/5.jpg', size: '1 pack', name: 'Goat Meat', currentPrice: 830, oldPrice: 1000 },
            { id: 4, image: '/images/product/5.jpg', size: '1 pack', name: 'Goat Meat', currentPrice: 830, oldPrice: 1000 },
            { id: 5, image: '/images/product/5.jpg', size: '1 pack', name: 'Goat Meat', currentPrice: 830, oldPrice: 1000 },
            { id: 6, image: '/images/product/5.jpg', size: '1 pack', name: 'Goat Meat', currentPrice: 830, oldPrice: 1000 },
            { id: 7, image: '/images/product/5.jpg', size: '1 pack', name: 'Goat Meat', currentPrice: 830, oldPrice: 1000 },
            { id: 8, image: '/images/product/5.jpg', size: '1 pack', name: 'Goat Meat', currentPrice: 830, oldPrice: 1000 },
        ])
    }, [])

    return (
        <>
            <div className="title-bar">
                <span className="title mb-0">Product on trend</span>
            </div>
            <Swiper
                slidesPerView='auto'
                spaceBetween={15}
            >
                {onTrend.map((trend) => {
                    return (
                        <SwiperSlide style={{ width:'auto' }}>
                            <div className="card-item style-6">
                                <Link href="" className="dz-media">
                                    <Image src={trend.image} alt="image" height={400} width={600} />
                                </Link>
                                <div className="dz-content">
                                    <span className="product-title">{trend.size}</span>
                                    <h4 className="item-name">
                                        <Link href="/product/details">{trend.name}</Link>
                                    </h4>
                                    <div className="footer-wrapper">
                                        <div className="price-wrapper">
                                            <h6 className="current-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                {trend.currentPrice}
                                            </h6>
                                            <span className="old-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                {trend.oldPrice}
                                            </span>
                                        </div>
                                        <Link
                                            href="/product/details"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            ADD
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default OnTrend