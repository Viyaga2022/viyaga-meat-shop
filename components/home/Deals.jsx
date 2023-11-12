"use client"


import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";

const Deals = () => {
    const [deals, setDeals] = useState([])

    useEffect(() => {
        setDeals([
            { id: 1, image: '/images/product/2.jpg', title: 'Combo pack', name: 'Fish + Fish Skinless + Cleaned Prawns', offer: 'FLAT 40% off Code: 636G8P', currentPrice: 830, oldPrice: 1000 },
            { id: 2, image: '/images/product/2.jpg', title: 'Combo pack', name: 'Fish + Fish Skinless + Cleaned Prawns', offer: 'FLAT 40% off Code: 636G8P', currentPrice: 830, oldPrice: 1000 },
            { id: 3, image: '/images/product/2.jpg', title: 'Combo pack', name: 'Fish + Fish Skinless + Cleaned Prawns', offer: 'FLAT 40% off Code: 636G8P', currentPrice: 830, oldPrice: 1000 },
            { id: 4, image: '/images/product/2.jpg', title: 'Combo pack', name: 'Fish + Fish Skinless + Cleaned Prawns', offer: 'FLAT 40% off Code: 636G8P', currentPrice: 830, oldPrice: 1000 },
            { id: 5, image: '/images/product/2.jpg', title: 'Combo pack', name: 'Fish + Fish Skinless + Cleaned Prawns', offer: 'FLAT 40% off Code: 636G8P', currentPrice: 830, oldPrice: 1000 },
            { id: 6, image: '/images/product/2.jpg', title: 'Combo pack', name: 'Fish + Fish Skinless + Cleaned Prawns', offer: 'FLAT 40% off Code: 636G8P', currentPrice: 830, oldPrice: 1000 },
            { id: 7, image: '/images/product/2.jpg', title: 'Combo pack', name: 'Fish + Fish Skinless + Cleaned Prawns', offer: 'FLAT 40% off Code: 636G8P', currentPrice: 830, oldPrice: 1000 },
            { id: 8, image: '/images/product/2.jpg', title: 'Combo pack', name: 'Fish + Fish Skinless + Cleaned Prawns', offer: 'FLAT 40% off Code: 636G8P', currentPrice: 830, oldPrice: 1000 },
        ])
    })

    return (
        <>
            <div className="title-bar">
                <span className="title mb-0">Sale for you</span>
            </div>
            <Swiper
                slidesPerView='auto'
                spaceBetween={15}
            >
                {deals.map((deal) => {
                    return (
                        <SwiperSlide style={{ width: 'auto' }} key={deal.id}>
                            <div className="card-item style-6">
                                <Link href={`/product/details/${deal.id}`} className="dz-media">
                                    <Image src={deal.image} alt="image" height={400} width={600} />
                                </Link>
                                <div className="dz-content">
                                    <span className="product-title">{deal.title}</span>
                                    <h4 className="item-name">
                                        <Link href={`/product/details/${deal.id}`}>
                                            {deal.name}
                                        </Link>
                                    </h4>
                                    <div className="offer-code">{deal.offer}</div>
                                    <div className="footer-wrapper">
                                        <div className="price-wrapper">
                                            <h6 className="current-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                {deal.currentPrice}
                                            </h6>
                                            <span className="old-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                {deal.oldPrice}
                                            </span>
                                        </div>
                                        <Link
                                            href={`/product/details/${deal.id}`}
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

export default Deals