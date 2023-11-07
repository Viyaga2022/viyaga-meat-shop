import React from 'react'

function BottomTab(props) {
    const { home = '', categories = '', favorites = '', cart = '', profile = '' } = props
    return (
        <div className="menubar-area style-7 footer-fixed rounded-0">
            <div className="toolbar-inner menubar-nav">
                <a href="/" className={`nav-link ${home}`} >
                    <i className="fa-solid fa-house" />
                    <span>Home</span>
                </a>
                <a href="/product/categories" className={`nav-link ${categories}`} >
                    <i className="fa-solid fa-box" />
                    <span>Categories</span>
                </a>
                <a href="/profile/favorites" className={`nav-link ${favorites}`}>
                    <i className="fa-solid fa-heart" />
                    <span>Favorites</span>
                </a>
                <a href="/product/cart" className={`nav-link ${cart}`}>
                    <i className="fa-solid fa-bag-shopping" />
                    <span>Cart</span>
                </a>
                <a href="/profile" className={`nav-link ${profile}`}>
                    <i className="fa-solid fa-user" />
                    <span>Profile</span>
                </a>
            </div>
        </div>
    )
}

export default BottomTab