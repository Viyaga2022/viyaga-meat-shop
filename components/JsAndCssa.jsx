import React from 'react'
import Script from 'next/script'


const JsAndCss = () => {
    return (
        <>
            {/* Javascript */}
            <Script src='/assets/js/jquery.js' strategy='beforeInteractive' />
            <Script src='/assets/vendor/bootstrap/js/bootstrap.bundle.min.js' strategy='beforeInteractive' />
            <Script src='/assets/vendor/swiper/swiper-bundle.min.js' strategy='beforeInteractive' />
            <Script src='/assets/vendor/wow/dist/wow.min.js' />
            <Script src='/assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js' />
            <Script src='/assets/js/dz.carousel.js' />
            <Script src='/assets/js/settings.js' />
            <Script src='/assets/js/custom.js' />
            <Script src="/assets/js/welcome.js" />
        </>
    )
}

export default JsAndCss