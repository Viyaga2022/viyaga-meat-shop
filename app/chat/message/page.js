import HeadTitle from '@/components/HeadTitle'
import Message from '@/components/chat/Message'
import React from 'react'

const page = () => {
  return (
    <>
        <HeadTitle title="Shop Name" profile={true} />
        <Message />
    </>
  )
}

export default page