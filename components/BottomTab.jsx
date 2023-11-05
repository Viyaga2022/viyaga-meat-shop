import React from 'react'

function BottomTab() {
    return (
        <div className="menubar-area style-7 footer-fixed rounded-0">
            <div className="toolbar-inner menubar-nav">
                <a href="/" className="nav-link active">
                    <i className="fa-solid fa-house" />
                    <span>Home</span>
                </a>
                <a href="categories" className="nav-link">
                    <i className="fa-solid fa-box" />
                    <span>Categories</span>
                </a>
                <a href="favorites" className="nav-link">
                    <i className="fa-solid fa-heart" />
                    <span>Favorites</span>
                </a>
                <a href="cart" className="nav-link">
                    <i className="fa-solid fa-bag-shopping" />
                    <span>Cart</span>
                </a>
                <a href="profile" className="nav-link">
                    <i className="fa-solid fa-user" />
                    <span>Profile</span>
                </a>
            </div>
        </div>

    )
}

export default BottomTab