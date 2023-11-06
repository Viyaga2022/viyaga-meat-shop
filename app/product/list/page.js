import HeadTitle from '@/components/HeadTitle'
import ProductList from '@/components/product/ProductList'
import React from 'react'

const page = () => {
    return (
        <>
            <HeadTitle title="Shop Name" profile={true} />
            <ProductList />
        </>

    )
}

export default page