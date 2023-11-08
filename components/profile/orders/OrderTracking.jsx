import Link from 'next/link'
import React from 'react'

const OrderTracking = () => {
    return (
        <div className="page-content">
            <div className="container bottom-content">
                <div className="location-area">
                    <div className="d-flex align-items-center">
                        <a href="#" className="location-mark">
                            <i className="fa-solid fa-location-dot" />
                        </a>
                        <div className="ms-3">
                            <h6 className="title">Delhi/India</h6>
                            <span className="font-14 font-w600">3252 Shakti Nagar</span>
                        </div>
                    </div>
                    <div className="text-end">
                        <div className="d-flex align-items-center">
                            <i className="me-2 fa-solid faassets/images-clock" />
                            <small className="font-w600">Arrive time</small>
                        </div>
                        <span className="font-w900 font-14 text-dark d-block">15-20 min</span>
                    </div>
                </div>
                <a href="tracking-order.html" className="short-map">
                    <div className="zone">
                        <p className="mb-0 text-dark">Estimated Time</p>
                        <div className="time">5-10 min</div>
                    </div>
                    <img src="/images/map.png" alt="" />
                </a>
                <div className="order-status">
                    <h6 className="title">Order Status</h6>
                    <ul className="dz-timeline style-2">
                        <li className="timeline-item active">
                            <h6 className="timeline-tilte">Delivered</h6>
                            <p className="timeline-date">Aug 8,2022-12:20pm</p>
                        </li>
                        <li className="timeline-item process">
                            <h6 className="timeline-tilte">Order Recived</h6>
                            <p className="timeline-date">Aug 8,2022-12:20pm</p>
                        </li>
                        <li className="timeline-item">
                            <h6 className="timeline-tilte">Order Confirmed</h6>
                            <p className="timeline-date">Aug 8,2022-12:20pm</p>
                        </li>
                        <li className="timeline-item">
                            <h6 className="timeline-tilte">Order Processed</h6>
                            <p className="timeline-date">Aug 8,2022-12:20pm</p>
                        </li>
                        <li className="timeline-item">
                            <h6 className="timeline-tilte">Order Delivered</h6>
                            <p className="timeline-date">Aug 8,2022-12:20pm</p>
                        </li>
                    </ul>
                </div>
                <div className="footer fixed ">
                    <div className="container">
                        <div className="footer-btn d-flex align-items-center">
                            <Link href="/profile/orders" className="btn btn-primary btn-block">
                                CONFIRM DELIVERY
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderTracking