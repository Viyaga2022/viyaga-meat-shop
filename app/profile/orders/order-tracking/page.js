import HeadTitle from '@/components/HeadTitle'
import OrderTracking from '@/components/profile/orders/OrderTracking'
import React from 'react'

const page = () => {
    return (
        <>
            <HeadTitle title="Track Order" cart={true} />
            <OrderTracking />
        </>
    )
}

export default page