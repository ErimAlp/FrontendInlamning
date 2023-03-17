import React from 'react'
import CollectionGrid from './CollectionGrid'

const NewPopularSection = ( {items1, items2} ) => {

  return (
    <section className='new-pop-section'>
      <div className='new-products'>
        <div className='banner-section new-banner'>
          <div className='banner-title'>2 FOR USD $29</div>
          <button className='btn-secondary'><span>NEW PRODUCTS</span></button>
        </div>
        <CollectionGrid  items={items1} />
      </div>
      <div className='pop-products'>
        <CollectionGrid  items={items2} />
        <div className='banner-section pop-banner'>
          <div className='banner-title'>2 FOR USD $49</div>
          <button className='btn-secondary'><span>POPULAR PRODUCTS</span></button>
        </div>
      </div>
    </section>
  )
}

export default NewPopularSection