import BottomTab from '@/components/BottomTab'
import HeadTitle from '@/components/HeadTitle'
import CategoriesContent from '@/components/product/categories/CategoriesContent'
import React from 'react'

function categories() {
  return (
    <>
        <HeadTitle title="Categories" cart="true" />
        <CategoriesContent />
        <BottomTab categories="active" />
    </>
  )
}

export default categories