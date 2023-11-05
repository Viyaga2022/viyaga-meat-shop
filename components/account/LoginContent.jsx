import React from 'react'

const LoginContent = () => {
    return (
        <>
            <div className="page-content">
                <div className="account-box">
                    <div className="page-title">
                        <h5 className="title">Login</h5>
                    </div>
                    <div className="container">
                        <div className="section-head text-center">
                            <h2>Login Account</h2>
                            <p>Welcome back you've been missed!</p>
                        </div>
                        <div className="account-area">
                            <form>
                                <div className="mb-3 input-group input-group-icon">
                                    <div className="input-group-text">
                                        <div className="input-icon">
                                            <svg
                                                width={16}
                                                height={21}
                                                viewBox="0 0 16 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 7.75C10.0711 7.75 11.75 6.07107 11.75 4C11.75 1.92893 10.0711 0.25 8 0.25C5.92893 0.25 4.25 1.92893 4.25 4C4.25 6.07107 5.92893 7.75 8 7.75Z"
                                                    fill="#7D8FAB"
                                                />
                                                <path
                                                    d="M15.5 16.75V18.25C15.4985 18.4488 15.4207 18.6395 15.2825 18.7825C13.61 20.455 8.57 20.5 8 20.5C7.43 20.5 2.39 20.455 0.7175 18.7825C0.579333 18.6395 0.501458 18.4488 0.5 18.25V16.75C0.5 14.7609 1.29018 12.8532 2.6967 11.4467C4.10322 10.0402 6.01088 9.25 8 9.25C9.98912 9.25 11.8968 10.0402 13.3033 11.4467C14.7098 12.8532 15.5 14.7609 15.5 16.75Z"
                                                    fill="#7D8FAB"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-3 input-group input-group-icon">
                                    <div className="input-group-text">
                                        <div className="input-icon">
                                            <svg
                                                width={14}
                                                height={20}
                                                viewBox="0 0 14 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13 6H12V3C12 2.20435 11.6839 1.44129 11.1213 0.87868C10.5587 0.316071 9.79565 0 9 0H5C4.20435 0 3.44129 0.316071 2.87868 0.87868C2.31607 1.44129 2 2.20435 2 3V6H1C0.734784 6 0.48043 6.10536 0.292893 6.29289C0.105357 6.48043 0 6.73478 0 7V15C0 16.3261 0.526784 17.5979 1.46447 18.5355C2.40215 19.4732 3.67392 20 5 20H9C10.3261 20 11.5979 19.4732 12.5355 18.5355C13.4732 17.5979 14 16.3261 14 15V7C14 6.73478 13.8946 6.48043 13.7071 6.29289C13.5196 6.10536 13.2652 6 13 6ZM4 3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H9C9.26522 2 9.51957 2.10536 9.70711 2.29289C9.89464 2.48043 10 2.73478 10 3V6H4V3ZM8 13.72V15C8 15.2652 7.89464 15.5196 7.70711 15.7071C7.51957 15.8946 7.26522 16 7 16C6.73478 16 6.48043 15.8946 6.29289 15.7071C6.10536 15.5196 6 15.2652 6 15V13.72C5.69772 13.5455 5.44638 13.2949 5.27095 12.9932C5.09552 12.6914 5.00211 12.349 5 12C5 11.4696 5.21071 10.9609 5.58579 10.5858C5.96086 10.2107 6.46957 10 7 10C7.53043 10 8.03914 10.2107 8.41421 10.5858C8.78929 10.9609 9 11.4696 9 12C8.99789 12.349 8.90448 12.6914 8.72905 12.9932C8.55362 13.2949 8.30228 13.5455 8 13.72Z"
                                                    fill="#7D8FAB"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control dz-password"
                                        placeholder="Password"
                                    />
                                    <span className="input-group-text show-pass">
                                        <i className="fa fa-eye-slash text-primary" />
                                        <i className="fa fa-eye text-primary" />
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <a href="forgot-password.html" className="btn-link">
                                        Forgot password?
                                    </a>
                                    <a href="forgot-password.html" className="btn-link">
                                        Reset here
                                    </a>
                                </div>
                                <a href="register" className="btn-link text-center">
                                    Don’t have an account?
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer fixed">
                <div className="container">
                    <a href="index.html" className="btn mb-3 btn-primary w-100">
                        SIGN IN
                    </a>
                    <div className="text-center text-primary">
                        <a href="register.html" className="text-secondary font-w600">
                            Register for Free
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default LoginContent