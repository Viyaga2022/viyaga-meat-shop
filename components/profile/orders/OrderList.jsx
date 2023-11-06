import React from 'react'
import Image from 'next/image'

const OrderList = () => {
    return (
        <div className="page-content">
            <div className="container pt-0">
                <div className="title-bar mt-0">
                    <span className="title mb-0">Today</span>
                </div>
                <div className="order-list">
                    <ul>
                        <li>
                            <div className="order-item mb-3">
                                <div className="media media-70 me-3">
                                    <Image
                                        className="rounded"
                                        src="/images/product/small/1.png"
                                        alt="/"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="content flex-1">
                                    <h6 className="dz-title mb-1">
                                        <a className="text-primary" href="product-detail.html">
                                            The Meat Shop
                                        </a>
                                    </h6>
                                    <h6 className="dz-title font-12">
                                        <a href="product-detail.html">
                                            Fish + Fish Skinless + Cleaned Prawns
                                        </a>
                                    </h6>
                                    <p className="mb-0">07 Items</p>
                                </div>
                                <div className="end-content">
                                    <span className="date">Jan 13</span>
                                    <a href="cart.html" className="btn btn-primary light btn-block">
                                        Reorder
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="title-bar">
                    <span className="title mb-0">This Month</span>
                </div>
                <div className="order-list">
                    <ul>
                        <li>
                            <div className="order-item mb-3">
                                <div className="media media-70 me-3">
                                    <Image
                                        className="rounded"
                                        src="/images/product/small/2.png"
                                        alt="/"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="content flex-1">
                                    <h6 className="dz-title mb-1">
                                        <a className="text-primary" href="product-detail.html">
                                            Panny's Meat Corner
                                        </a>
                                    </h6>
                                    <h6 className="dz-title font-12">
                                        <a href="product-detail.html">Meat + Chicken Skinless + Fish</a>
                                    </h6>
                                    <p className="mb-0">05 Items</p>
                                </div>
                                <div className="end-content">
                                    <span className="date">Jan 10</span>
                                    <a href="cart.html" className="btn btn-primary light btn-block">
                                        Reorder
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="order-item mb-3">
                                <div className="media media-70 me-3">
                                    <Image
                                        className="rounded"
                                        src="/images/product/small/4.png"
                                        alt="/"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="content flex-1">
                                    <h6 className="dz-title mb-1">
                                        <a className="text-primary" href="product-detail.html">
                                            Nonveg Hub
                                        </a>
                                    </h6>
                                    <h6 className="dz-title font-12">
                                        <a href="product-detail.html">Goat Meat + Cleaned Prawns</a>
                                    </h6>
                                    <p className="mb-0">12 Items</p>
                                </div>
                                <div className="end-content">
                                    <span className="date">Jan 07</span>
                                    <a href="cart.html" className="btn btn-primary light btn-block">
                                        Reorder
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="order-item mb-3">
                                <div className="media media-70 me-3">
                                    <Image
                                        className="rounded"
                                        src="/images/product/small/5.png"
                                        alt="/"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="content flex-1">
                                    <h6 className="dz-title mb-1">
                                        <a className="text-primary" href="product-detail.html">
                                            Meat Garage
                                        </a>
                                    </h6>
                                    <h6 className="dz-title font-12">
                                        <a href="product-detail.html">
                                            Chicken Skinless + Cleaned Prawns
                                        </a>
                                    </h6>
                                    <p className="mb-0">06 Items</p>
                                </div>
                                <div className="end-content">
                                    <span className="date">Jan 02</span>
                                    <a href="cart.html" className="btn btn-primary light btn-block">
                                        Reorder
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer fixed">
                <div className="container">
                    <a href="index.html" className="btn btn-primary btn-block">
                        Search More Products
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OrderList