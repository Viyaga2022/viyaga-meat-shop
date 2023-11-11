import { Inter } from 'next/font/google'
import ReduxProvider from '@/redux/ReduxProvider'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

// Import Css Files
import '../public/assets/css/style.css'
import '../public/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css'
import '../public/assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'
import '../public/assets/vendor/swiper/swiper-bundle.min.css'
import JsAndCss from '@/components/JsAndCss'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <head>
                <title>Viyaga Meat Shop</title>
                <meta name="theme-color" content="#009688" />
                <meta name="author" content="VIYAGA" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="meat, chicken, mutton, fish, sea food, ui kit, multiple color, dark layout, meat shop" />
                <meta property="og:image" content="https://w3meat.dexignzone.com/xhtml/social-image.png" />
                <meta name="format-detection" content="telephone=no" />
                <link rel="manifest" href="/manifest.json" /> {/* PWA Version */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />{/* <!-- Google Fonts --> */}
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>

            <body className={inter.className} suppressHydrationWarning={true} >
                <ReduxProvider>{children}</ReduxProvider>
                <Toaster position='top-center' />
                {/* <JsAndCss /> */}
            </body>

        </html>
    )
}
