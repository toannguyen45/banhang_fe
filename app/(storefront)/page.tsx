import News from '@/app/components/storefront/News';
import React from 'react'

// const featuredProducts = [
//   {
//     id: '1',
//     title: 'Product 1',
//     shortDescription: 'This is a short description of product 1.',
//     featureImageURL: 'https://via.placeholder.com/300x400.png?text=Product+1',
//   },
//   {
//     id: '2',
//     title: 'Product 2',
//     shortDescription: 'This is a short description of product 2.',
//     featureImageURL: 'https://via.placeholder.com/300x400.png?text=Product+2',
//   },
//   {
//     id: '3',
//     title: 'Product 3',
//     shortDescription: 'This is a short description of product 3.',
//     featureImageURL: 'https://via.placeholder.com/300x400.png?text=Product+3',
//   },
// ];
const IndexPage = () => {
  return (
    <div className=''>
      {/* <Sliders featuredProducts={featuredProducts} /> */}
      <News />
    </div>
  )
}

export default IndexPage
