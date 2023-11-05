import React from 'react'

const ForgotPassword = () => {
    return (
        <>
            {/* Page Content */}
            <div className="page-content">
                <div className="account-box">
                    <div className="page-title">
                        <h5 className="title">Reset Password</h5>
                    </div>
                    <div className="container">
                        <div className="section-head text-center">
                            <h2>Reset password</h2>
                            <p>Enter your Email address to reset your password</p>
                        </div>
                        <div className="account-area">
                            <form>
                                <div className="mb-3 input-group input-group-icon">
                                    <div className="input-group-text">
                                        <div className="input-icon">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M23.208 5.35425C23.1103 4.7009 22.7817 4.10419 22.2818 3.67229C21.7819 3.24039 21.1439 3.00188 20.4832 3H3.51674C2.85613 3.00188 2.21805 3.24039 1.71818 3.67229C1.2183 4.10419 0.889719 4.7009 0.791992 5.35425L12 12.6068L23.208 5.35425Z"
                                                    fill="#7D8FAB"
                                                />
                                                <path
                                                    d="M12.4072 14.13C12.2859 14.2085 12.1445 14.2502 12 14.2502C11.8555 14.2502 11.7141 14.2085 11.5927 14.13L0.75 7.1145V18.2332C0.750794 18.9668 1.04255 19.6701 1.56124 20.1887C2.07993 20.7074 2.78321 20.9992 3.51675 21H20.4833C21.2168 20.9992 21.9201 20.7074 22.4388 20.1887C22.9575 19.6701 23.2492 18.9668 23.25 18.2332V7.11375L12.4072 14.13Z"
                                                    fill="#7D8FAB"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Content End */}
            {/* Footer */}
            <footer className="footer fixed">
                <div className="container">
                    <a href="otp-confirm.html" className="btn mb-3 btn-primary w-100">
                        SEND CODE
                    </a>
                    <div className="text-center text-primary">
                        <span>Back to</span>
                        <a href="login.html" className="text-secondary font-w600">
                            Login
                        </a>
                    </div>
                </div>
            </footer>
            {/* Footer End */}
        </>

    )
}

export default ForgotPassword