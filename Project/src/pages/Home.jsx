import React from 'react'
import Hero from '../components/Hero'
import LatestSection from '../components/LatestSection'
import Policy from '../components/Policy'
import Subscribe from '../components/Subscribe'
import HomeFooter from '../components/HomeFooter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home-container'>
        <Hero/>
        <LatestSection size={8}sectionHeading={"LATEST COLLECTION"} sectionDescription={"Discover our newest arrivals! These are the products that have just hit the store."}/>
        <LatestSection size={4} sectionHeading={"BESTSELLER"} sectionDescription={"Discover our newest arrivals! These are the products that have just hit the store."}/>
        <Policy/>
        <Subscribe/>
        
    </div>
  )
}

export default Home
