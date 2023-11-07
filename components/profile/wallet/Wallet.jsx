import React from 'react'

const Wallet = () => {
    return (
        <div className="page-content">
            <div className="container">
                <div className="accordion style-2" id="accordionExample">
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
                                <small className="font-w600 mb-2">Saved Cards</small>
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
                                                <img src="/images/payment/visa.png" alt="" />
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
                                                <img src="/images/payment/mastercard.png" alt="" />
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
                                                <img src="/images/payment/discover.png" alt="" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment-card">
                                    <div className="card-media">
                                        <img src="/images/payment/card.png" alt="" />
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
                                        <i className="fa-solid fa-shield me-2" />
                                        <p className="info-line">
                                            Your UPI ID Will be encrypted and is 100% safe with us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet