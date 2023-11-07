import React from 'react'

const EditProfile = () => {
    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="main-bar">
                    <div className="container">
                        <div className="header-content">
                            <div className="left-content">
                                <a href="#" className="back-btn">
                                    <i className="fa-solid fa-xmark" />
                                </a>
                            </div>
                            <div className="mid-content">
                                <h5 className="title mb-0 text-nowrap">Edit profile</h5>
                            </div>
                            <div className="right-content">
                                <a
                                    href="#"
                                    className="text-dark font-20 back-btn"
                                >
                                    <i className="fa-solid fa-check" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}
            {/* Page Content */}
            <div className="page-content">
                <div className="container">
                    <div className="edit-profile">
                        <div className="profile-image">
                            <div className="avatar-upload">
                                <div className="avatar-preview">
                                    <div
                                        id="imagePreview"
                                        style={{ backgroundImage: "url(/images/avatar/5.jpg)" }}
                                    ></div>
                                </div>
                                <div className="change-btn">
                                    <input
                                        type="file"
                                        className="form-control d-none"
                                        id="imageUpload"
                                        accept=".png, .jpg, .jpeg"
                                    />
                                    <label htmlFor="imageUpload">
                                        <i className="fa-regular fa-image" />
                                    </label>
                                </div>
                            </div>
                            <a href="#">Change profile photo</a>
                        </div>
                        <form>
                            <div className="mb-3 input-group input-mini">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="mb-3 input-group input-mini">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-3 input-group input-mini">
                                <input type="url" className="form-control" placeholder="Website" />
                            </div>
                            <div className="mb-3 input-group input-mini">
                                <input type="text" className="form-control" placeholder="Bio" />
                            </div>
                        </form>
                    </div>
                    <ul className="link-list">
                        <li>
                            <a href="#">Add Link</a>
                        </li>
                        <li>
                            <a href="#">Switch to professional account</a>
                        </li>
                        <li>
                            <a href="#">Create avatar</a>
                        </li>
                        <li>
                            <a href="#">Personal information settings</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Page Content End*/}
        </>
    )
}

export default EditProfile