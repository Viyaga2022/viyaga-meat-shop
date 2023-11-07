"use client"

import HeadTitle from '@/components/HeadTitle'
import RewardBox from '@/components/profile/rewards/RewardBox'
import RewardList from '@/components/profile/rewards/RewardList'
import React from 'react'

const page = () => {
    return (
        <>
            <HeadTitle title="Rewards" cart={true} />
            <div className="page-content">
                <div className="container">
                    <RewardBox />
                    <RewardList />
                </div>
            </div>
        </>
    )
}

export default page