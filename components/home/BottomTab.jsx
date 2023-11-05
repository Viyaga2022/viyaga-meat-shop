import React from 'react'

function BottomTab() {
    return (
        <div className="menubar-area style-7 footer-fixed rounded-0">
            <div className="toolbar-inner menubar-nav">
                <a href="index.html" className="nav-link active">
                    <i className="fa-solid fa-house" />
                    <span>Home</span>
                </a>
                <a href="category.html" className="nav-link">
                    <i className="fa-solid fa-box" />
                    <span>Categories</span>
                </a>
                <a href="favorite.html" className="nav-link">
                    <i className="fa-solid fa-heart" />
                    <span>Favorites</span>
                </a>
                <a href="cart.html" className="nav-link">
                    <i className="fa-solid fa-bag-shopping" />
                    <span>Cart</span>
                </a>
                <a href="account.html" className="nav-link">
                    <i className="fa-solid fa-user" />
                    <span>Account</span>
                </a>
            </div>
        </div>

    )
}

export default BottomTab