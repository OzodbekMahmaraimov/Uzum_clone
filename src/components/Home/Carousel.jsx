import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from './images/slide 1.jpg'
import slide2 from './images/slide 2.jpg'
import slide3 from './images/slide 3.jpg'
import slide4 from './images/slide 4.jpg'
import slide5 from './images/slide 5.jpg'
import slide6 from './images/slide 6.jpg'
import slide7 from './images/slide 7.jpg'

const HomeCarousel = () => {
    return (
        <>
            <div className='w-100 mt-3 mt-lg-0'>
                <Carousel className='w-100'>
                    <Carousel.Item>
                        <img src={slide1} alt="this is img slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide2} alt="this is img slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide3} alt="this is img slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide4} alt="this is img slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide5} alt="this is img slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide6} alt="this is img slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide7} alt="this is img slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide4} alt="this is img slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
            
        </>
    )
}

export default HomeCarousel