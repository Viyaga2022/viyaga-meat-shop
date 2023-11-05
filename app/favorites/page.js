import BottomTab from '@/components/BottomTab'
import HeadTitle from '@/components/HeadTitle'
import FavoritesContent from '@/components/favorites/favoritesContent'
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