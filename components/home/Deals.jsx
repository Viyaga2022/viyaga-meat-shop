import React from 'react'

function Deals() {
    return (
        <>
            <div className="title-bar">
                <span className="title mb-0">Sale for you</span>
            </div>
            <div className="swiper-btn-center-lr mt-0">
                <div className="swiper product-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="card-item style-6">
                                <a href="product-detail.html" className="dz-media">
                                    <img src="images/product/2.jpg" alt="image" />
                                </a>
                                <div className="dz-content">
                                    <span className="product-title">Combo pack</span>
                                    <h4 className="item-name">
                                        <a href="product-detail.html">
                                            Fish + Fish Skinless + Cleaned Prawns
                                        </a>
                                    </h4>
                                    <div className="offer-code">FLAT 40% off Code: 636G8P</div>
                                    <div className="footer-wrapper">
                                        <div className="price-wrapper">
                                            <h6 className="current-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                830
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
                        <div className="swiper-slide">
                            <div className="card-item style-6">
                                <a href="product-detail.html" className="dz-media">
                                    <img src="images/product/3.jpg" alt="image" />
                                </a>
                                <div className="dz-content">
                                    <span className="product-title">Combo pack</span>
                                    <h4 className="item-name">
                                        <a href="product-detail.html">Meat + Chicken Skinless + Fish</a>
                                    </h4>
                                    <div className="offer-code">FLAT 50% off Code: 636GCP</div>
                                    <div className="footer-wrapper">
                                        <div className="price-wrapper">
                                            <h6 className="current-price">
                                                <i className="fa-solid fa-indian-rupee-sign" />
                                                500
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
                        <div className="swiper-slide">
                            <div className="card-item style-6">
                                <a href="product-detail.html" className="dz-media">
                                    <img src="images/product/1.jpg" alt="image" />
                                </a>
                                <div className="dz-content">
                                    <span className="product-title">Combo pack</span>
                                    <h4 className="item-name">
                                        <a href="product-detail.html">
                                            Goat + Chicken Skinless + Cleaned Prawns
                                        </a>
                                    </h4>
                                    <div className="offer-code">FLAT 60% off Code: 636GCP</div>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deals