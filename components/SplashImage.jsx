import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'

const Splash = ({ routePath, time }) => {
    const [fade, setFade] = useState('')
    const [display, setDisplay] = useState('block')

    useEffect(() => {

        setTimeout(() => {
            setFade('fade-out')
        }, 2000)

        setTimeout(() => {
            setDisplay('none')
        }, 4000)

    }, [])

    console.log("Out Side useEffect");
    return (
        <>
            <div style={{ display }} className={`loader-screen ${fade}`} id="splashscreen">
                <div className="main-screen">
                    <div className="loader">
                        <Image
                            src="/images/preloader/knife1.svg"
                            className="wow bounceInRight knife-1"
                            alt=""
                            width={56}
                            height={50}
                        />
                        <Image
                            src="/images/preloader/meat.svg"
                            className="wow zoomInDown meat-center"
                            alt=""
                            width={56}
                            height={50}
                        />
                        <Image
                            src="/images/preloader/knife2.svg"
                            className="wow bounceInLeft knife-2"
                            alt=""
                            width={20}
                            height={34}
                        />
                    </div>
                    <div className="title">
                        <span
                            className="wow zoomInUp"
                            data-wow-duration="0.2s"
                            data-wow-delay="1s"
                        >
                            V
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
            <Script src='/assets/vendor/wow/dist/wow.min.js' />
            <Script src="/assets/js/welcome.js"></Script>
        </>
    )
}

export default Splash