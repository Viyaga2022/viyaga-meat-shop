import React from 'react'
import ChatList from '@/components/chat/chatList'
import HeadTitle from '@/components/HeadTitle'
import BottomTab from '@/components/BottomTab'

const page = () => {
    return (
        <>
            <HeadTitle title="Chat" cart="true" />
            <ChatList />
            <BottomTab home="active" />
        </>
    )
}

export default page