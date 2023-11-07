import HeadTitle from '@/components/HeadTitle'
import Notification from '@/components/profile/notification/Notification'
import React from 'react'

const page = () => {
  return (
    <>
        <HeadTitle title="Notification" cart={true} />
        <Notification />
    </>
  )
}

export default page