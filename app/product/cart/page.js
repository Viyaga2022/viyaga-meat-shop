import CartContent from '@/components/product/cart/CartContent'
import CheckoutBtn from '@/components/product/cart/CheckoutBtn'
import HeadTitle from '@/components/HeadTitle'
import React from 'react'

function page() {
    return (
        <>
            <HeadTitle title="Cart" />
            <CartContent />
            <CheckoutBtn />
        </>
    )
}

export default page