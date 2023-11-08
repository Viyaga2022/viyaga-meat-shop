import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function OnTrend() {
    return (
        <>
            <div className="title-bar">
                <span className="title mb-0">Product on trend</span>
            </div>
            <div className="swiper-btn-center-lr mt-0">
                <div className="swiper product-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="card-item style-6">
                                <Link href="" className="dz-media">
                                    <Image src="/images/product/5.jpg" alt="image" height={400} width ={600}/>
                                </Link>
                                <div className="dz-content">
                                    <span className="product-title">1 pack</span>
                                    <h4 className="item-name">
                                        <Link href="/product/details">Goat Meat</Link>
                                    </h4>
                                    <div className="footer-wrapper">
                                        <div className="price-wrapper">
                                            <h6 className="current-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                930
                                            </h6>
                                            <span className="old-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                1100
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
                        </div>
                        <div className="swiper-slide">
                            <div className="card-item style-6">
                                <Link href="/product/details" className="dz-media">
                                    <Image src="/images/product/6.jpg" alt="image" height={400} width ={600} />
                                </Link>
                                <div className="dz-content">
                                    <span className="product-title">1 pack</span>
                                    <h4 className="item-name">
                                        <Link href="/product/details">Cleaned Prawns</Link>
                                    </h4>
                                    <div className="footer-wrapper">
                                        <div className="price-wrapper">
                                            <h6 className="current-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                430
                                            </h6>
                                            <span className="old-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                800
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
                        </div>
                        <div className="swiper-slide">
                            <div className="card-item style-6">
                                <Link href="/product/details" className="dz-media">
                                    <Image src="/images/product/4.jpg" alt="image" height={400} width ={600}/>
                                </Link>
                                <div className="dz-content">
                                    <span className="product-title">1 pack</span>
                                    <h4 className="item-name">
                                        <Link href="/product/details">Chicken Skinless</Link>
                                    </h4>
                                    <div className="footer-wrapper">
                                        <div className="price-wrapper">
                                            <h6 className="current-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                600
                                            </h6>
                                            <span className="old-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                1000
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnTrend