import HeroSlider from '@/app/components/storefront/HeroSlider';
import News from '@/app/components/storefront/News';
import React from 'react'

const IndexPage = () => {
  return (
    <>
      <HeroSlider />
      <div className='container mx-auto px-4'>
        <News />
      </div>
    </>

  )
}

export default IndexPage
