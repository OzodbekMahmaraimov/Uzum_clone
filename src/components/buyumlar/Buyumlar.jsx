import React from 'react'
import './buymlar.css'
import card from './card.json'


const Buyumlar = () => {
  return (
    < >
       <h2 className='mt-3 container'>Arzon naxrlar </h2>
      <div className='card-container container d-grid mx-auto'>
        {card.map((post) => {
          return (
            <div className='mt-5  box ms-2'>
              <div className=''
                style={{
                  width: '16rem'
                  
                }}
              >
                <img
                  className='rasm'
                  style={
                    {
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer'
                    }
                  }
                  alt="Card"
                  src={post.img}
                />
                <div className='container'>
                  <p >{post.p}</p>
                  <div className='d-flex gap-2 div'>
                    <img src="data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e" alt="" />
                    <p className='mt-3'>{post.nusxalar}</p>
                  </div>
                  <div className='box1 '>
                    <p className='ms-1 '> {post.nasiyaga}</p>
                  </div>
                  < div className='box2 d-flex justify-content-between  '>
                    <div >
                      <del>{post.narxlar}</del>
                      <h6>{post.asosiynarx}</h6>
                    </div>
                    <svg className='mt-2  boshqa ' data-v-40da8b10="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon  add-cart-icon"   data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <path d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z" fill="black"></path>
                      <path d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z" fill="black"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buyumlar