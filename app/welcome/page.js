"use client"

import React from 'react'
import '../../public/assets/vendor/wow/css/libs/animate.css'
import Welcome from '@/components/welcome/Welcome'
import SplashImage from '@/components/SplashImage'
import Head from 'next/head'

const page = () => {
    return (
        <>
            <Head>
                {/* Animte  */}
                <link rel="stylesheet" href="/assets/vendor/wow/css/libs/animate.css" />
            </Head>
            <div className="page-wraper">
                <SplashImage />
                <Welcome />
            </div>

        </>
    )
}

export default page