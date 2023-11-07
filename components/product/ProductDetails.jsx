import Image from 'next/image'
import React from 'react'
import productImage from '../../public/images/product/1.jpg'

const ProductDetails = () => {
    return (
        <div className="page-content">
            <div className="container bottom-content">
                <div className="product-view">
                    <div className="overlay-black-light">
                        <Image src={productImage} alt="/" width={600} height={400} priority={true} />
                    </div>
                    <div className="account-box style-2">
                        <div className="container">
                            <div className="company-detail">
                                <div className="detail-content">
                                    <div className="flex-1">
                                        <h4>Goat + Chicken Skinless + Cleaned Prawns</h4>
                                        <p className="text-light">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                                <ul className="item-inner">
                                    <li>
                                        <div className="reviews-info">
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M21.3899 11.6C21.6646 11.3192 21.8559 10.9676 21.9424 10.5845C22.029 10.2013 22.0073 9.80162 21.8799 9.43003C21.7604 9.05734 21.5386 8.7257 21.2398 8.47289C20.941 8.22007 20.5773 8.05623 20.1899 8.00003L15.8999 7.34003C15.8799 7.33423 15.8615 7.32404 15.8459 7.3102C15.8303 7.29636 15.818 7.27922 15.8099 7.26003L13.9299 3.26003C13.7651 2.88547 13.4949 2.56693 13.1522 2.34321C12.8095 2.1195 12.4092 2.00026 11.9999 2.00003C11.5954 1.99835 11.1991 2.11354 10.8585 2.33174C10.5179 2.54994 10.2475 2.86187 10.0799 3.23003L8.19994 7.23003C8.18968 7.24953 8.1755 7.2667 8.15829 7.28047C8.14108 7.29423 8.12122 7.3043 8.09994 7.31003L3.81994 8.00003C3.43203 8.05782 3.06776 8.22207 2.76764 8.47453C2.46751 8.72699 2.2433 9.05775 2.11994 9.43003C1.99723 9.80291 1.97896 10.2023 2.0671 10.5848C2.15524 10.9673 2.34643 11.3184 2.61994 11.6L5.77994 14.85C5.78903 14.8705 5.79373 14.8926 5.79373 14.915C5.79373 14.9374 5.78903 14.9596 5.77994 14.98L5.03994 19.52C4.97114 19.9154 5.01599 20.3222 5.16926 20.6931C5.32253 21.064 5.57794 21.3838 5.90577 21.6152C6.23361 21.8467 6.62042 21.9804 7.02122 22.0007C7.42203 22.021 7.82037 21.9272 8.16994 21.73L11.8999 19.66C11.9185 19.6504 11.939 19.6453 11.9599 19.6453C11.9808 19.6453 12.0014 19.6504 12.0199 19.66L15.7499 21.73C16.1 21.9229 16.4972 22.0135 16.8963 21.9913C17.2953 21.9691 17.6801 21.8351 18.0065 21.6045C18.333 21.374 18.5881 21.0563 18.7425 20.6877C18.897 20.3191 18.9446 19.9144 18.8799 19.52L18.1899 15C18.1794 14.9818 18.1739 14.9611 18.1739 14.94C18.1739 14.919 18.1794 14.8983 18.1899 14.88L21.3899 11.6Z"
                                                    fill="#FFA902"
                                                />
                                            </svg>
                                            <h6 className="reviews">4.6</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="reviews-info">
                                            <i className="fa-regular font-16 text-primary fa-clock" />
                                            <h6 className="reviews">6 - 7 min</h6>
                                        </div>
                                    </li>
                                    <li className="me-0">
                                        <a className="d-flex delivery" href="#">
                                            <svg
                                                width={24}
                                                height={16}
                                                viewBox="0 0 24 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17.415 5H15.81V2.51C15.7935 1.39475 14.8853 0.5 13.77 0.5H2.79C1.67475 0.5 0.7665 1.39475 0.75 2.51V11.99C0.7665 13.1052 1.67475 14 2.79 14H5.415C5.83875 15.1678 7.1295 15.7715 8.298 15.347C8.92425 15.1198 9.41775 14.6263 9.645 14H16.335C16.7588 15.1678 18.0495 15.7715 19.218 15.347C19.8442 15.1198 20.3377 14.6263 20.565 14H21.525C22.4775 14 23.25 13.2275 23.25 12.275V10.865C23.2628 7.6385 20.6565 5.01275 17.43 5C17.4247 5 17.4202 5 17.415 5ZM7.5 9.17C7.35975 9.28625 7.19175 9.36425 7.0125 9.395C6.63525 9.46475 6.249 9.3275 6 9.035L5.175 8C4.914 7.6895 4.947 7.2275 5.25 6.9575C5.568 6.692 6.04125 6.7355 6.306 7.0535L6.3075 7.055L6.8775 7.73L9.8775 5.2625C10.1798 4.97975 10.6545 4.9955 10.9373 5.29775C11.22 5.6 11.2043 6.07475 10.902 6.3575C10.8795 6.3785 10.8555 6.39875 10.83 6.41675L7.5 9.17ZM7.5 14C7.086 14 6.75 13.664 6.75 13.25C6.75 12.836 7.086 12.5 7.5 12.5C7.914 12.5 8.25 12.836 8.25 13.25C8.25 13.664 7.914 14 7.5 14ZM18.45 14C18.036 14 17.7 13.664 17.7 13.25C17.7 12.836 18.036 12.5 18.45 12.5C18.864 12.5 19.2 12.836 19.2 13.25C19.2 13.664 18.864 14 18.45 14ZM16.3275 12.5H15.81V6.5H17.415C19.809 6.5 21.75 8.441 21.75 10.835V10.865V12.275C21.7545 12.395 21.66 12.4955 21.54 12.5C21.5347 12.5 21.5295 12.5 21.525 12.5H20.5725C20.2358 11.6322 19.4048 11.0533 18.4792 11.0413C17.5335 11.0293 16.6718 11.612 16.3275 12.5Z"
                                                    fill="var(--primary)"
                                                />
                                            </svg>
                                            <h6 className="mb-0 ms-2">FREE DELIVERY</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="item-list-2">
                                <div className="price">
                                    <span className="text-style text-soft">Price</span>
                                    <h3 className="sub-title">
                                        <i className="fa-solid fa-indian-rupee-sign" />
                                        930{" "}
                                        <del>
                                            <i className="fa-solid fa-indian-rupee-sign" />
                                            1140
                                        </del>
                                    </h3>
                                </div>
                                <div className="dz-stepper border-1 rounded-stepper stepper-fill small-stepper">
                                    <input
                                        readOnly=""
                                        className="stepper form-control"
                                        type="text"
                                        defaultValue={0}
                                        name="demo3"
                                    />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="badge bg-accent rounded-sm badge-warning font-w400">
                                    20% OFF DISCOUNT
                                </div>
                                <a href="#">
                                    <h6 className="mb-0 font-14">Apply promo code</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <div className="footer fixed">
                <div className="container">
                    <a href="/product/cart" className="btn btn-primary btn-block">
                        ADD TO CART
                    </a>
                </div>
            </div>
            {/* FOOTER */}
        </div>
    )
}

export default ProductDetails