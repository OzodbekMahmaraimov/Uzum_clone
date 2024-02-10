import React from 'react'
import Navbar from '../Navbar'
import Navsm from '../Navsm'
import Sara from './saralangan.png'
import './saralangan.css'

const Saralangan = () => {
  return (
    <>
      <div className='container mt-4'>
        <Navbar />
        <hr className='p-0 m-0' />
        <div className=' d-flex like-container gap-2'>
          <img className='likeImg' src={Sara} alt="saralangan img" />
          <h2>Sizga yoqqanini qo'shing</h2>
          <p>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</p>
          <button>Akkauntga kirish</button>
        </div>
        <Navsm />
      </div>
    </>
  )
}

export default Saralangan