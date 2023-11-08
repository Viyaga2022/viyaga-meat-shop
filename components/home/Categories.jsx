import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Categories() {
    return (
        <>
            <div className="title-bar offer-box">
                <span className="title mb-0">Categories</span>
            </div>
            <div className="row catagore-bx g-4">
                <div className="col-4 text-center">
                    <Link href="/product/categories">
                        <div className="dz-media media-60">
                            <Image src="/images/categore/5.png" alt="image" height={400} width ={400}/>
                        </div>
                        <span>Steaks &amp; Fillets</span>
                    </Link>
                </div>
                <div className="col-4 text-center">
                    <Link href="/product/categories">
                        <div className="dz-media media-60">
                            <Image src="/images/categore/6.png" alt="image" height={400} width ={400}/>
                        </div>
                        <span>Mutton - Goat</span>
                    </Link>
                </div>
                <div className="col-4 text-center">
                    <Link href="/product/categories">
                        <div className="dz-media media-60">
                            <Image src="/images/categore/1.png" alt="image" height={400} width ={400}/>
                        </div>
                        <span>Fish &amp; Seafood</span>
                    </Link>
                </div>
                <div className="col-4 text-center">
                    <Link href="/product/categories">
                        <div className="dz-media media-60">
                            <Image src="/images/categore/2.png" alt="image" height={400} width ={400}/>
                        </div>
                        <span>Poultry</span>
                    </Link>
                </div>
                <div className="col-4 text-center">
                    <Link href="/product/categories">
                        <div className="dz-media media-60">
                            <Image src="/images/categore/3.png" alt="image" height={400} width ={400}/>
                        </div>
                        <span>Ready to Cook</span>
                    </Link>
                </div>
                <div className="col-4 text-center">
                    <Link href="/product/categories">
                        <div className="dz-media media-60">
                            <Image src="/images/categore/4.png" alt="image" height={400} width ={400}/>
                        </div>
                        <span>Combo Packs</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Categories