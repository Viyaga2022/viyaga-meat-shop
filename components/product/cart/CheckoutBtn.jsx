import Link from 'next/link'
import React from 'react'

function CheckoutBtn() {
    return (
        <div className="footer fixed">
            <div className="container">
                <Link href="/payment" className="payment-btn btn rounded-sm">
                    <div className="total-price">
                        <span>3 items</span>
                        <div className="mide-line" />
                        <span className="mb-0 font-14 text-white">
                            <i className="font-14 fa-solid fa-indian-rupee-sign" />
                            930
                        </span>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="mb-0 title">Checkout</span>
                        <svg
                            className="ms-2"
                            width={10}
                            height={18}
                            viewBox="0 0 10 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.25005 17.25C1.05823 17.25 0.866234 17.1767 0.719797 17.0303C0.426734 16.7372 0.426734 16.2626 0.719797 15.9698L7.68955 9.00001L0.719797 2.03025C0.426734 1.73719 0.426734 1.26263 0.719797 0.969751C1.01286 0.676875 1.48742 0.676688 1.7803 0.969751L9.2803 8.46976C9.57336 8.76282 9.57336 9.23738 9.2803 9.53026L1.7803 17.0303C1.63386 17.1767 1.44186 17.25 1.25005 17.25Z"
                                fill="#7D8FAB"
                            />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CheckoutBtn