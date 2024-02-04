import React from 'react'
import Navbar from './Navbar'
import './home.css'
import HomeCarousel from './Carousel'
import Navsm from './Navsm'
import FooterNav from './FooterNav'


const Home = () => {
  return (
    <>
      <div className='container mx-auto mt-3'>
        <Navbar />
        <HomeCarousel />
      </div>
      <FooterNav />
      <Navsm />
    </>
  )
}

export default Home