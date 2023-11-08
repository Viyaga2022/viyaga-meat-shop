import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CartContent() {
    return (
        <div className="page-content">
            <div className="container fb">
                <div className="promo-box">
                    <span>CODE: 985AT5,</span>
                </div>
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <Link href="/product/details">
                                Goat + Chicken Skinless + Cleaned Prawns
                            </Link>
                        </h4>
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
                            <span className="product-title">1 pack</span>
                        </div>
                    </div>
                    <div className="text-end">
                        {/* javascript:void(0); */}
                        <Link href="#" className="dz-media media-100">
                            <Image
                                className="rounded-sm"
                                src="/images/product/1.jpg"
                                alt="image"
                                height={400}
                                width ={600}
                            />
                        </Link>
                        <div className="dz-stepper style-5 border-1 rounded-stepper">
                            <input
                                readOnly=""
                                className="stepper form-control"
                                type="text"
                                defaultValue={2}
                                name="demo3"
                            />
                        </div>
                    </div>
                    <div className="icon-box-4">
                        <i className="fa-solid fa-trash" />
                    </div>
                </div>
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <Link href="/product/details">
                                Fish + Fish Skinless + Cleaned Prawns
                            </Link>
                        </h4>
                        <div className="price-wrapper">
                            <h6 className="current-price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                720
                            </h6>
                            <span className="old-price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                1000
                            </span>
                        </div>
                        <div className="footer-wrapper">
                            <span className="product-title">1 pack</span>
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
                        <div className="dz-stepper style-5 border-1 rounded-stepper">
                            <input
                                readOnly=""
                                className="stepper form-control"
                                type="text"
                                defaultValue={1}
                                name="demo3"
                            />
                        </div>
                    </div>
                    <div className="icon-box-4">
                        <i className="fa-solid fa-trash" />
                    </div>
                </div>
                <div className="product-list">
                    <div className="dz-content">
                        <h4 className="item-name">
                            <Link href="/product/details">Meat + Chicken Skinless + Fish</Link>
                        </h4>
                        <div className="price-wrapper">
                            <h6 className="current-price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                930
                            </h6>
                            <span className="old-price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                1000
                            </span>
                        </div>
                        <div className="footer-wrapper">
                            <span className="product-title">1 pack</span>
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
                        <div className="dz-stepper style-5 border-1 rounded-stepper">
                            <input
                                readOnly=""
                                className="stepper form-control"
                                type="text"
                                defaultValue={1}
                                name="demo3"
                            />
                        </div>
                    </div>
                    <div className="icon-box-4">
                        <i className="fa-solid fa-trash" />
                    </div>
                </div>
                <div className="bill-detail">
                    <h6>Bill Details</h6>
                    <ul>
                        <li>
                            <span>Subtotal</span>
                            <span className="price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                930
                            </span>
                        </li>
                        <li className="mb-2 pb-2">
                            <span>Delivery Charge</span>
                            <span className="price">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                0.0
                            </span>
                        </li>
                        <li>
                            <h6 className="mb-0">Total</h6>
                            <span className="text-danger">
                                <i className="fa-solid fa-indian-rupee-sign" />
                                930
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CartContent