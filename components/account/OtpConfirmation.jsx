import React from 'react'

const OtpConfirmation = () => {
    return (
        <>
            {/* Page Content */}
            <div className="page-content">
                <div className="account-box">
                    <div className="page-title">
                        <h5 className="title">OTP Authentication</h5>
                    </div>
                    <div className="container">
                        <div className="section-head text-center">
                            <h2>Enter Code</h2>
                            <p>
                                An Authentication Code has sent to{" "}
                                <span className="text-lowercase">
                                    testing@gmail.com
                                    <span />
                                </span>
                            </p>
                        </div>
                        <div className="account-area">
                            <form action="submit">
                                <div id="otp" className="digit-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="digit-2"
                                        name="digit-2"
                                        placeholder=""
                                        data-next="digit-3"
                                        data-previous="digit-1"
                                    />
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="digit-3"
                                        name="digit-3"
                                        placeholder=""
                                        data-next="digit-4"
                                        data-previous="digit-2"
                                    />
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="digit-4"
                                        name="digit-4"
                                        placeholder=""
                                        data-next="digit-5"
                                        data-previous="digit-3"
                                    />
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="digit-5"
                                        name="digit-5"
                                        placeholder=""
                                        data-next="digit-6"
                                        data-previous="digit-4"
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
                    <div className="seprate-box mb-3">
                        <a href="forgot-password.html" className="back-btn">
                            <svg
                                width={10}
                                height={16}
                                viewBox="0 0 10 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.40366 8L9.91646 2.58333L7.83313 0.499999L0.333132 8L7.83313 15.5L9.91644 13.4167L4.40366 8Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a href="change-password.html" className="btn btn-primary btn-block">
                            SUBMIT
                        </a>
                    </div>
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

export default OtpConfirmation