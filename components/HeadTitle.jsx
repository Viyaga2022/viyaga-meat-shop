import React from 'react'

const CartIcon = () => {
    return (
        <a href="cart" className="notify-cart2">
            <svg
                className="text-dark"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_841_82)">
                    <path
                        d="M18.1775 17.8443C16.6361 17.8428 15.3853 19.0912 15.3838 20.6326C15.3823 22.174 16.6307 23.4247 18.172 23.4262C19.7134 23.4277 20.9642 22.1794 20.9657 20.638C20.9657 20.6371 20.9657 20.6362 20.9657 20.6353C20.9642 19.0955 19.7172 17.8473 18.1775 17.8443Z"
                        fill="#2C406E"
                    />
                    <path
                        d="M23.1278 4.47972C23.061 4.46679 22.9932 4.46022 22.9251 4.46011H5.93181L5.66267 2.65957C5.49499 1.4638 4.47216 0.574121 3.26466 0.573753H1.07655C0.481978 0.573753 0 1.05573 0 1.6503C0 2.24488 0.481978 2.72686 1.07655 2.72686H3.26734C3.40423 2.72586 3.52008 2.82778 3.53648 2.96372L5.19436 14.3267C5.42166 15.7706 6.66363 16.8358 8.12528 16.8405H19.3241C20.7313 16.8423 21.9454 15.8533 22.2281 14.4747L23.9802 5.7412C24.0931 5.15745 23.7115 4.59269 23.1278 4.47972Z"
                        fill="#2C406E"
                    />
                    <path
                        d="M11.3405 20.5158C11.275 19.0196 10.0402 17.8418 8.54256 17.847C7.00242 17.9092 5.80434 19.2082 5.86658 20.7484C5.92629 22.2262 7.12843 23.4007 8.60716 23.4262H8.67445C10.2144 23.3587 11.408 22.0557 11.3405 20.5158Z"
                        fill="#2C406E"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_841_82">
                        <rect width={24} height={24} fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <span className="badge badge-danger">3</span>
        </a>
    )
}

function HeadTitle({ title, cart }) {
    return (
        <header className="header">
            <div className="main-bar">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            {/* javascript:void(0) */}
                            <a href="#;" className="back-btn">
                                <i className="fa-solid fa-arrow-left" />
                            </a>
                            <h4 className="title mb-0 text-nowrap">{title}</h4>
                        </div>
                        <div className="mid-content"></div>
                        <div className="right-content d-flex align-items-center">
                            {cart
                                ? <CartIcon />
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeadTitle