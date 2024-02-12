import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Honor from './Image/Honor.jpg'
import Honor1 from './Image/Honor1.jpg'
import Honor2 from './Image/Honor2.jpg'
import Honor3 from './Image/Honor3.jpg'
import Honor4 from './Image/Honor4.jpg'
import  savat from './Image/savat.png'
import './abzor.css'
import { Button } from 'reactstrap';

const CaruselBuyurtma = () => {

    const [count, setCount] = useState(1);
    const [pul, setPul] = useState("10000")

    const increment = () => {
      setCount(prevCount => prevCount + 1);
      setPul(money => money * 2)
    };

    const decrement = () => {
      setCount(prevCount => prevCount - 1);
      setPul(money => money / 2)
    };

    return (
      <>
        <div className="container">
          <div className='Fixied'>
            <Carousel className='carousell'>
              <Carousel.Item>
                <img className='car-img' src={Honor} alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <img className='car-img' src={Honor1} alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <img className='car-img' src={Honor2} alt="..." />
              </Carousel.Item>
              <Carousel.Item>
                <img className='car-img' src={Honor3} alt="..." />
              </Carousel.Item>
            </Carousel>
            <div className='Honor-card'>
              <img className='Honor1' src={Honor} alt="" />
              <img className='Honor2' src={Honor1} alt="" />
              <img className='Honor3' src={Honor2} alt="" />
              <img className='Honor4' src={Honor3} alt="" />
            </div>
          </div>

          <div className='techno'>
            <div className='Techno-spark'>
              <h5>Smartfon TECNO Spark Go 2024</h5>
              <p>Sotuvchi:</p>
              <a className='Mobile' href="">Mobile Outlet</a>
              <p>Yetkazib berish</p>
              <p className='Mobile1'>1 kun, bepul</p>
              <hr className='hr' />
            </div>
            <div className='Modeli'>
              <h6>Rang:Oq</h6>
              <img className='card' src={Honor} alt="..." />
              <img className='card1' src={Honor4} alt="..." />
              <div className='xotra'>
                <h5> xotira:4/64</h5>
                <Button className='type1' color='white' type='button'>4/64</Button>
                <Button className='type'color='white' type='button'>4/128</Button>
              </div>

            </div>
            <div className='Somma'>
              <h6>Miqdor:</h6>
              <Button color='white'  onClick={increment} className='pul'><h5>+</h5></Button>
            <Button color='white' onClick={decrement} className='pul1'><h5>-</h5></Button>
            <h4  className='son'>{count}</h4>
            <h6>Narx:</h6>
            <h4>{pul}so'm</h4>
            </div>
            <div className='savat'>
                <button  className='savat111'><h6 className='savat3'>Oyiga 143 880 so`mdan</h6><p className='mudat'>muddatli to`lov</p> </button>
            <button color='primary' className='qoshish'>Savatga Qo`shish</button>
            <button color='primary' className='qoshish1'>Tugmani 1 bosishda xarid qiling</button>
            <button className='savatcha'><  img className='savatchalar' src={savat} alt="..." />Bu haftada 28 kishi sotib oldi</button>
            </div>

          </div>
        </div>
      </>
    )
  }

  export default CaruselBuyurtma;