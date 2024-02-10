import React from 'react'
import Navbar from './Navbar'
import './home.css'
import HomeCarousel from './Carousel'
import Navsm from './Navsm'
import FooterNav from './FooterNav'
import Buyumlar from '../buyumlar/Buyumlar'


const Home = () => {
  return (
    <>
      <div className='container mx-auto mt-3'>
        <Navbar />
        <HomeCarousel />
      </div>
      <FooterNav />
      <Navsm />
      <Buyumlar />
    </>
  )
}

export default Home