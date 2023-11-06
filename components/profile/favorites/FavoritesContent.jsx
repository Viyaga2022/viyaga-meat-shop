import React from 'react'
import Image from 'next/image'

function FavoritesContent() {
    return (
        <div className="page-content">
            <div className="container bottom-content">
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <a href="cart.html">Goat + Chicken Skinless + Cleaned Prawns</a>
                        </h4>
                        <div className="offer-code">FLAT 60% off Code: 636GCP</div>
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
                        <div className="footer-wrapper">
                            <span className="product-title">Combo pack</span>
                        </div>
                    </div>
                    <div className="text-end">
                        <a href="cart.html" className="dz-media media-100">
                            <Image
                                className="rounded-sm"
                                src="/images/product/1.jpg"
                                alt="image"
                                height={400} 
                                width ={600}
                            />
                        </a>
                        <a
                            href="cart.html"
                            className="btn btn-sm btn-block btn-outline-primary"
                        >
                            ADD
                        </a>
                    </div>
                </div>
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <a href="cart.html">Fish + Fish Skinless + Cleaned Prawns</a>
                        </h4>
                        <div className="offer-code">FLAT 60% off Code: 636GCP</div>
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
                        <div className="footer-wrapper">
                            <span className="product-title">Combo pack</span>
                        </div>
                    </div>
                    <div className="text-end">
                        {/* javascript:void(0); */}
                        <a href="#" className="dz-media media-100">
                            <Image
                                className="rounded-sm"
                                src="/images/product/2.jpg"
                                alt="image"
                                height={400} 
                                width ={600}
                            />
                        </a>
                        <a
                            href="cart.html"
                            className="btn btn-sm btn-block btn-outline-primary"
                        >
                            ADD
                        </a>
                    </div>
                </div>
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <a href="cart.html">Meat + Chicken Skinless + Fish</a>
                        </h4>
                        <div className="offer-code">FLAT 60% off Code: 636GCP</div>
                        <div className="price-wrapper">
                            <h6 className="current-price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                780
                            </h6>
                            <span className="old-price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                1000
                            </span>
                        </div>
                        <div className="footer-wrapper">
                            <span className="product-title">Combo pack</span>
                        </div>
                    </div>
                    <div className="text-end">
                        {/* javascript:void(0); */}
                        <a href="#" className="dz-media media-100">
                            <Image
                                className="rounded-sm"
                                src="/images/product/3.jpg"
                                alt="image"
                                height={400} 
                                width ={600}
                            />
                        </a>
                        <a
                            href="cart.html"
                            className="btn btn-sm btn-block btn-outline-primary"
                        >
                            ADD
                        </a>
                    </div>
                </div>
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <a href="cart.html">Chicken Skinless</a>
                        </h4>
                        <div className="offer-code">FLAT 60% off Code: 636GCP</div>
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
                        <div className="footer-wrapper">
                            <span className="product-title">Combo pack</span>
                        </div>
                    </div>
                    <div className="text-end">
                        {/* javascript:void(0); */}
                        <a href="#" className="dz-media media-100">
                            <Image
                                className="rounded-sm"
                                src="/images/product/4.jpg"
                                alt="image"
                                height={400} 
                                width ={600}
                            />
                        </a>
                        <a
                            href="cart.html"
                            className="btn btn-sm btn-block btn-outline-primary"
                        >
                            ADD
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritesContent