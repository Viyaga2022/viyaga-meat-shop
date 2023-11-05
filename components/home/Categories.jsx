import React from 'react'

function Categories() {
    return (
        <>
            <div className="title-bar offer-box">
                <span className="title mb-0">Categories</span>
            </div>
            <div className="row catagore-bx g-4">
                <div className="col-4 text-center">
                    <a href="category.html">
                        <div className="dz-media media-60">
                            <img src="images/categore/5.png" alt="image" />
                        </div>
                        <span>Steaks &amp; Fillets</span>
                    </a>
                </div>
                <div className="col-4 text-center">
                    <a href="category.html">
                        <div className="dz-media media-60">
                            <img src="images/categore/6.png" alt="image" />
                        </div>
                        <span>Mutton - Goat</span>
                    </a>
                </div>
                <div className="col-4 text-center">
                    <a href="category.html">
                        <div className="dz-media media-60">
                            <img src="images/categore/1.png" alt="image" />
                        </div>
                        <span>Fish &amp; Seafood</span>
                    </a>
                </div>
                <div className="col-4 text-center">
                    <a href="category.html">
                        <div className="dz-media media-60">
                            <img src="images/categore/2.png" alt="image" />
                        </div>
                        <span>Poultry</span>
                    </a>
                </div>
                <div className="col-4 text-center">
                    <a href="category.html">
                        <div className="dz-media media-60">
                            <img src="images/categore/3.png" alt="image" />
                        </div>
                        <span>Ready to Cook</span>
                    </a>
                </div>
                <div className="col-4 text-center">
                    <a href="category.html">
                        <div className="dz-media media-60">
                            <img src="images/categore/4.png" alt="image" />
                        </div>
                        <span>Combo Packs</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Categories