"use client"


import Link from 'next/link'

const Welcome = () => {
   
    return (
        <>
            <div className="content-body">
                <div
                    className="welcome-area bg-image"
                    style={{ backgroundImage: 'url("/images/onboarding/bg.jpg")' }}
                >
                    <div className="welcome-inner">
                        <div className="swiper get-started">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="slide-info">
                                        <div className="started">
                                            <h3 className="title font-w700">
                                                Welcome to Meat Shop Application
                                            </h3>
                                            <p>Revolutionize mobile meat shopping with our template</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="slide-info">
                                        <div className="started">
                                            <h3 className="title font-w700">
                                                Your Ultimate Meat Shop Destination
                                            </h3>
                                            <p>Transform your meat shop with our innovative template.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="slide-info">
                                        <div className="started">
                                            <h3 className="title font-w700">
                                                Step into Our Shop of Quality Meats
                                            </h3>
                                            <p>Your Trusted Source for Quality Meats Application</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-btn">
                                <div className="swiper-pagination style-1 flex-1" />
                            </div>
                        </div>
                    </div>
                    <div className="bottom-btn container">
                        <Link href="/account/login" className="btn btn-primary btn-block">
                            NEXT
                        </ Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome