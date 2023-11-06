import React from 'react'
import Image from 'next/image'

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
                                <a href="product-detail.html" className="dz-media">
                                    <Image src="/images/product/5.jpg" alt="image" height={400} width ={600}/>
                                </a>
                                <div className="dz-content">
                                    <span className="product-title">1 pack</span>
                                    <h4 className="item-name">
                                        <a href="product-detail.html">Goat Meat</a>
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
                                        <a
                                            href="product-detail.html"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            ADD
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card-item style-6">
                                <a href="product-detail.html" className="dz-media">
                                    <Image src="/images/product/6.jpg" alt="image" height={400} width ={600} />
                                </a>
                                <div className="dz-content">
                                    <span className="product-title">1 pack</span>
                                    <h4 className="item-name">
                                        <a href="product-detail.html">Cleaned Prawns</a>
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
                                        <a
                                            href="product-detail.html"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            ADD
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card-item style-6">
                                <a href="product-detail.html" className="dz-media">
                                    <Image src="/images/product/4.jpg" alt="image" height={400} width ={600}/>
                                </a>
                                <div className="dz-content">
                                    <span className="product-title">1 pack</span>
                                    <h4 className="item-name">
                                        <a href="product-detail.html">Chicken Skinless</a>
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
                                        <a
                                            href="product-detail.html"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            ADD
                                        </a>
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