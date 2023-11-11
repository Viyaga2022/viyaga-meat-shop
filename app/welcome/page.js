import React from 'react'
import Script from 'next/script'
import '../../public/assets/vendor/wow/css/libs/animate.css'
import Welcome from '@/components/welcome/Welcome'
import SplashImage from '@/components/SplashImage'
import JsAndCss from '@/components/JsAndCss'

const page = () => {
    return (
        <>
            <div className="page-wraper">
                <SplashImage />
                <Welcome />
                <JsAndCss />
            </div>
        </>
    )
}

export default page