import React from 'react'
import Script from 'next/script'

const Welcome = () => {
    return (
        <>
            <div className="page-wraper">
                {/* splash */}
                <div className="loader-screen" id="splashscreen">
                    <div className="main-screen">
                        <div className="loader">
                            <img
                                src="/images/preloader/knife1.svg"
                                className="wow bounceInRight knife-1"
                                alt=""
                            />
                            <img
                                src="/images/preloader/meat.svg"
                                className="wow zoomInDown meat-center"
                                alt=""
                            />
                            <img
                                src="/images/preloader/knife2.svg"
                                className="wow bounceInLeft knife-2"
                                alt=""
                            />
                        </div>
                        <div className="title">
                            <span
                                className="wow zoomInUp"
                                data-wow-duration="0.2s"
                                data-wow-delay="1s"
                            >
                                W
                            </span>
                            <span
                                className="wow zoomInUp"
                                data-wow-duration="0.3s"
                                data-wow-delay="1s"
                            >
                                3
                            </span>
                            <span
                                className="wow zoomInUp"
                                data-wow-duration="0.4s"
                                data-wow-delay="1s"
                            >
                                M
                            </span>
                            <span
                                className="wow zoomInUp"
                                data-wow-duration="0.5s"
                                data-wow-delay="1s"
                            >
                                E
                            </span>
                            <span
                                className="wow zoomInUp"
                                data-wow-duration="0.6s"
                                data-wow-delay="1s"
                            >
                                A
                            </span>
                            <span
                                className="wow zoomInUp"
                                data-wow-duration="0.7s"
                                data-wow-delay="1s"
                            >
                                T
                            </span>
                        </div>
                    </div>
                </div>
                {/* splash*/}
                {/* Welcome Start */}
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
                            <a href="/account/login" className="btn btn-primary btn-block">
                                NEXT
                            </a>
                        </div>
                    </div>
                </div>
                {/* Welcome End */}
            </div>
            <Script src='/assets/vendor/wow/dist/wow.min.js' />
            <Script src="/assets/js/welcome.js"></Script>
        </>
    )
}

export default Welcome