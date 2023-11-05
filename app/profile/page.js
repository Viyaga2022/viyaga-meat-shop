import BottomTab from '@/components/BottomTab'
import HeadTitle from '@/components/HeadTitle'
import MainProfile from '@/components/profile/MainProfile'
import OtherOptions from '@/components/profile/OtherOptions'
import ProfileContentBox from '@/components/profile/ProfileContentBox'
import React from 'react'

const page = () => {
    return (
        <>
            <HeadTitle title="Profile" />

            <div className="page-content">
                <div className="container fb">
                    <div className="profile-area">
                        <MainProfile />
                        <ProfileContentBox />
                        <OtherOptions />
                    </div>
                </div>
            </div>

            <BottomTab profile="active" />
        </>
    )
}

export default page