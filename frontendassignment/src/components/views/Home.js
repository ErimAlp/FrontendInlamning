import React, { useEffect } from 'react'
import { useProductContext } from '../../contexts/ProductContext'
import CollectionGrid from '../partials/CollectionGrid'
import InfoSection from '../partials/InfoSection'
import SalesShowcase from '../partials/SalesShowcase'
import Showcase from '../partials/Showcase'

const Home = () => {
  const { featured, latest, popular, getFeaturedAsync, getLatestAsync, getPopularAsync } = useProductContext()

  useEffect(() => {
    getFeaturedAsync()
    getLatestAsync()
    getPopularAsync()
  }, [])

  return (
    <>
        <Showcase />
        <CollectionGrid title="Featured Products" items={featured} />
        <SalesShowcase />
        <InfoSection />
        
    </>
  )
}

export default Home