"use client"


import Link from 'next/link'
import { Autoplay, Pagination, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';

const Welcome = () => {
    const welcome = [
        { id: 1, title: 'Welcome to Meat Shop Application', description: 'Revolutionize mobile meat shopping with our template' },
        { id: 2, title: 'Welcome to Meat Shop Application', description: 'Revolutionize mobile meat shopping with our template' },
        { id: 3, title: 'Welcome to Meat Shop Application', description: 'Revolutionize mobile meat shopping with our template' },
    ]
    return (
        <>
            <div className="content-body">
                <div
                    className="welcome-area bg-image"
                    style={{ backgroundImage: 'url("/images/onboarding/bg.jpg")' }}
                >
                    <div className="welcome-inner">
                        <div className="get-started">
                            <Swiper
                                modules={[Pagination, Autoplay, Parallax]}
                                parallax={true}
                                slidesPerView={1}
                                spaceBetween={15}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 2000 }}
                                loop={false}
                            >
                                {welcome.map((data) => {
                                    return (
                                        <SwiperSlide style={{ width: 'auto' }} key={data.id}>
                                            <div className="slide-info">
                                                <h3 className="title font-w700">
                                                    {data.title}
                                                </h3>
                                                <p>{data.description}</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
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