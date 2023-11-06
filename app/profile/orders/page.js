import HeadTitle from '@/components/HeadTitle'
import OrderList from '@/components/profile/orders/OrderList'
import React from 'react'

const page = () => {
  return (
    <>
        <HeadTitle title="Your Orders" cart={true} />
        <OrderList />
    </>
  )
}

export default page