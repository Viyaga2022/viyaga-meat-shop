import React from 'react'
import Image from 'next/image'

function Offers() {
    return (
        <>
            <div className="title-bar">
                <span className="title mb-0">Offer for you</span>
            </div>
            <div className="swiper-btn-center-lr mt-0">
                <div className="swiper meat-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="card add-banner2">
                                <Image src="/images/banner/banner1.jpg" alt="/" height={197} width ={350} />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card add-banner2">
                                <Image src="/images/banner/banner2.jpg" alt="/" height={197} width ={350}/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="card add-banner2">
                                <Image src="/images/banner/banner3.jpg" alt="/" height={197} width ={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Offers