import React, { useEffect } from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import CollectionGrid from './CollectionGrid'

const NewPopularSection = () => {
  const { featured, latest, popular, getFeaturedAsync, getLatestAsync, getPopularAsync } = useProductContext()

  useEffect(() => {
    getFeaturedAsync()
    getLatestAsync()
    getPopularAsync()
  }, [])

  return (
    <section className='new-pop-section'>

      <div className='new-products'>
        <div className='banner-section new-banner'>
          <div className='banner-title'>2 FOR USD $29</div>
          <button className='btn-secondary'><span>NEW PRODUCTS</span></button>
        </div>
        <CollectionGrid title="" items={latest} />
      </div>
      <div className='pop-products'>
        <CollectionGrid title="" items={latest} />
        <div className='banner-section pop-banner'>
          <div className='banner-title'>2 FOR USD $49</div>
          <button className='btn-secondary'><span>POPULAR PRODUCTS</span></button>
        </div>
      </div>
    </section>
  )
}

export default NewPopularSection