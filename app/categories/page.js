import BottomTab from '@/components/BottomTab'
import HeadTitle from '@/components/HeadTitle'
import CategoriesContent from '@/components/categories/CategoriesContent'
import React from 'react'

function categories() {
  return (
    <>
        <HeadTitle title="Categories" cart="true" />
        <CategoriesContent />
        <BottomTab />
    </>
  )
}

export default categories