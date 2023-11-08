import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function FavoritesContent() {
    return (
        <div className="page-content">
            <div className="container bottom-content">
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <Link href="/product/cart">Goat + Chicken Skinless + Cleaned Prawns</Link>
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
                        <Link href="/product/cart" className="dz-media media-100">
                            <Image
                                className="rounded-sm"
                                src="/images/product/1.jpg"
                                alt="image"
                                height={400} 
                                width ={600}
                            />
                        </Link>
                        <Link
                            href="/product/cart"
                            className="btn btn-sm btn-block btn-outline-primary"
                        >
                            ADD
                        </Link>
                    </div>
                </div>
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <Link href="/product/cart">Fish + Fish Skinless + Cleaned Prawns</Link>
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
                        <Link href="#" className="dz-media media-100">
                            <Image
                                className="rounded-sm"
                                src="/images/product/2.jpg"
                                alt="image"
                                height={400} 
                                width ={600}
                            />
                        </Link>
                        <Link
                            href="/product/cart"
                            className="btn btn-sm btn-block btn-outline-primary"
                        >
                            ADD
                        </Link>
                    </div>
                </div>
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <Link href="/product/cart">Meat + Chicken Skinless + Fish</Link>
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
                        <Link href="#" className="dz-media media-100">
                            <Image
                                className="rounded-sm"
                                src="/images/product/3.jpg"
                                alt="image"
                                height={400} 
                                width ={600}
                            />
                        </Link>
                        <Link
                            href="/product/cart"
                            className="btn btn-sm btn-block btn-outline-primary"
                        >
                            ADD
                        </Link>
                    </div>
                </div>
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <Link href="/product/cart">Chicken Skinless</Link>
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
                        <Link href="#" className="dz-media media-100">
                            <Image
                                className="rounded-sm"
                                src="/images/product/4.jpg"
                                alt="image"
                                height={400} 
                                width ={600}
                            />
                        </Link>
                        <Link
                            href="/product/cart"
                            className="btn btn-sm btn-block btn-outline-primary"
                        >
                            ADD
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritesContent