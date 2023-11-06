import BottomTab from '@/components/BottomTab'
import HeadTitle from '@/components/HeadTitle'
import FavoritesContent from '@/components/profile/favorites/FavoritesContent'
import React from 'react'

function page() {
    return (
        <>
            <HeadTitle title="Favorites" cart="true" />
            <FavoritesContent />
            <BottomTab favorites="active" />
        </>
    )
}

export default page