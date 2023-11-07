import React from 'react'

const Payment = () => {
    return (
        <div className="page-content">
            <div className="container fb">
                <div className="title-bar">
                    <h5 className="mb-0">Select Payment mode</h5>
                </div>
                <div className="accordion style-2" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <i className="fa-solid fa-money-bill me-2" />
                                Cash on Delivery
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Carry on your cash payment..
                                <br />
                                Thanx!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <i className="fa-solid fa-credit-card me-2" />
                                Credit/Debit Card
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <small className="font-w600 mb-2 text-dark">Saved Cards</small>
                                {/* Card Select */}
                                <div className="d-flex align-items-center mb-3">
                                    <button
                                        type="button"
                                        className="dz-modal-btn text-dark"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModalCenter"
                                    >
                                        Add Card +
                                    </button>
                                    <div className="modal fade" id="exampleModalCenter">
                                        <div
                                            className="modal-dialog modal-dialog-centered"
                                            role="document"
                                        >
                                            <div className="modal-content">
                                                <div className="modal-header border-0 pb-0">
                                                    <h5 className="modal-title">ADD CARD</h5>
                                                    <button className="btn-close" data-bs-dismiss="modal">
                                                        <i className="fa-solid fa-xmark" />
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="form">
                                                        <div className="form-item">
                                                            <label className="form-label">Card holder Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                autoComplete="off"
                                                                required=""
                                                            />
                                                        </div>
                                                        <div className="form-item">
                                                            <label className="form-label">Card Number</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                autoComplete="off"
                                                                placeholder="**** **** **** ****"
                                                                required=""
                                                            />
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="form-item me-2">
                                                                <label className="form-label">Expiry Date</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    autoComplete="off"
                                                                    placeholder="MM / YY"
                                                                    required=""
                                                                />
                                                            </div>
                                                            <div className="form-item">
                                                                <label className="form-label">Security Code</label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    autoComplete="off"
                                                                    placeholder="..."
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="btn btn-primary d-block"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Added
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card Select */}
                                    <div
                                        className="short-tag style-4"
                                        role="group"
                                        aria-label="radio toggle button"
                                    >
                                        <div className="clearfix">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="btnradio"
                                                id="btnradio1"
                                                defaultChecked=""
                                            />
                                            <label className="btn ms-2 mb-0 tag-btn" htmlFor="btnradio1">
                                                <img src="images/payment/visa.png" alt="" />
                                            </label>
                                        </div>
                                        <div className="clearfix">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="btnradio"
                                                id="btnradio2"
                                            />
                                            <label className="btn mb-0 tag-btn" htmlFor="btnradio2">
                                                <img src="images/payment/mastercard.png" alt="" />
                                            </label>
                                        </div>
                                        <div className="clearfix">
                                            <input
                                                type="radio"
                                                className="btn-check"
                                                name="btnradio"
                                                id="btnradio3"
                                            />
                                            <label className="btn mb-0 me-0 tag-btn" htmlFor="btnradio3">
                                                <img src="images/payment/discover.png" alt="" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment-card">
                                    <div className="card-media">
                                        <img src="images/payment/card.png" alt="" />
                                    </div>
                                    <div className="card-info">
                                        <div className="clearfix">
                                            <h5 className="card-name">Credit Card</h5>
                                            <p className="card-number">4532 **** **** ****</p>
                                        </div>
                                        <div className="bottom-info">
                                            <p>04 / 25</p>
                                            <p>KEVIN HARD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <i className="fa-solid fa-money-check me-2" />
                                Google Pay/Other
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body pt-0">
                                <div className="form">
                                    <div className="form-item">
                                        <label className="form-label">Link via UPI</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter your UPI ID"
                                            autoComplete="off"
                                            required=""
                                        />
                                    </div>
                                    <a
                                        href="javascrpit:void(0);"
                                        className="btn btn-primary btn-block"
                                    >
                                        Continue
                                    </a>
                                    <div className="d-flex align-items-center mt-3">
                                        <i className="fa-solid fa-shield me-2 text-dark" />
                                        <p className="info-line">
                                            Your UPI ID Will be encrypted and is 100% safe with us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                <i className="fa-solid fa-building-columns me-2" />
                                Netbanking
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"
                                >
                                    Netbannking
                                </button>
                                <div
                                    className="offcanvas offcanvas-end"
                                    tabIndex={-1}
                                    id="offcanvasRight"
                                >
                                    <button
                                        type="button"
                                        className="btn-close text-reset"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    >
                                        <i className="fa-solid fa-xmark" />
                                    </button>
                                    <div className="offcanvas-body">
                                        <h2 className="dz-title text-dark mb-3">W3Kit</h2>
                                        <div className="form border-bottom">
                                            <div className="input-group form-item">
                                                <span className="input-group-text">
                                                    <a href="#">
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M20.5605 18.4395L16.7528 14.6318C17.5395 13.446 18 12.0262 18 10.5C18 6.3645 14.6355 3 10.5 3C6.3645 3 3 6.3645 3 10.5C3 14.6355 6.3645 18 10.5 18C12.0262 18 13.446 17.5395 14.6318 16.7528L18.4395 20.5605C19.0245 21.1462 19.9755 21.1462 20.5605 20.5605C21.1462 19.9748 21.1462 19.0252 20.5605 18.4395ZM5.25 10.5C5.25 7.605 7.605 5.25 10.5 5.25C13.395 5.25 15.75 7.605 15.75 10.5C15.75 13.395 13.395 15.75 10.5 15.75C7.605 15.75 5.25 13.395 5.25 10.5Z"
                                                                fill="#B9B9B9"
                                                            />
                                                        </svg>
                                                    </a>
                                                </span>
                                                <input
                                                    type="Search"
                                                    className="form-control bs-0"
                                                    autoComplete="off"
                                                    required=""
                                                    placeholder="Search By Bank Name"
                                                />
                                            </div>
                                        </div>
                                        <h5 className="title-bar">All Banks</h5>
                                        <ul className="item-list">
                                            <li className="list">
                                                <a href="#">Bank Of india</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">Bank Of Maharasthra</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">Canara Bank</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">HDFC Bank</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">IDFC Bank</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">Catholic Syrian Bank</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">Catholic Syrian Bank</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">Central Bank of India</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">City Union Bank</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">Corporation Bank</a>
                                            </li>
                                            <li className="list">
                                                <a href="#">Cosmos Bank</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                            >
                                <i className="fa-solid fa-wallet me-2" />
                                Wallet
                            </button>
                        </h2>
                        <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body pt-0">
                                <div className="form">
                                    <label className="form-label">Link Your Wallet</label>
                                    <div className="input-group form-item">
                                        <span className="input-group-text py-0">
                                            <a href="#">
                                                <img src="images/svg/india-flag-icon.svg" alt="" />
                                                91
                                            </a>
                                        </span>
                                        <input
                                            type="number"
                                            className="form-control bs-0"
                                            autoComplete="off"
                                            required=""
                                        />
                                    </div>
                                    <a
                                        href="#"
                                        className="btn btn-primary btn-block"
                                    >
                                        Continue
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <div className="footer fixed">
                <div className="container">
                    <a href="tracking-order.html" className="btn btn-primary btn-block">
                        MAKE PAYMENT
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Payment