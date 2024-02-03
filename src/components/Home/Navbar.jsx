import React from 'react'
import logo from './images/uzum-logo.png'
import logo2 from './images/logo.svg'
import menu from './images/menu.jpg';
import './navbar.css'
import { Input, InputGroup, InputGroupText } from 'reactstrap';
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className='nav-bar'>
        {/* lg qismi */}
        <div className='header-md'>
          <div className='d-flex align-items-center gap-2  header-item item-1'>
            <img className='logo rounded-circle' src={logo} alt="uzum logo" />
            <h3 className='text-blue line pt-2 pe-3'>uzum market</h3>
          </div>
          <div className='header-item item-2 px-3 menu d-flex align-items-center rounded-1 pointer'>
            <img src={menu} alt="this is menu img" />
            <p className='text-blue my-auto'>Katalog</p>
          </div>
          <div className='header-item item-3'>
            <InputGroup className='search-input-div'>
              <Input className='serach-input py-lg-2 py-1' placeholder="Mahsulotlar va turlumlar izlash" />
              <InputGroupText className='px-4 py-2 pointer'>
                <IoSearch fontSize={21} color='#595B66' className='' />
              </InputGroupText>
            </InputGroup>
          </div>
          <div className='header-item item-4 pointer rounded-2 d-flex align-items-center justify-content-center gap-2 ps-3'>
            <svg data-v-698cad85="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C9.79086 3 8 4.79086 8 7V8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8V7C16 4.79086 14.2091 3 12 3ZM9.5 7C9.5 5.61929 10.6193 4.5 12 4.5C13.3807 4.5 14.5 5.61929 14.5 7V8C14.5 9.38071 13.3807 10.5 12 10.5C10.6193 10.5 9.5 9.38071 9.5 8V7ZM5.50232 19.3686C5.97321 16.2577 9.01803 14.5 12.0022 14.5C14.9858 14.5 18.031 16.2577 18.5019 19.3686C18.5046 19.3866 18.5025 19.3972 18.5 19.4048C18.497 19.4137 18.4903 19.4269 18.4759 19.442C18.4453 19.4741 18.3894 19.5039 18.3171 19.5039H5.68718C5.61487 19.5039 5.55898 19.4741 5.52838 19.442C5.51394 19.4269 5.50726 19.4137 5.50427 19.4048C5.50174 19.3972 5.49961 19.3865 5.50232 19.3686ZM12.0022 13C8.57321 13 4.64037 15.0404 4.01922 19.1441C3.85624 20.2208 4.75727 21.0039 5.68718 21.0039H18.3171C19.247 21.0039 20.148 20.2208 19.985 19.1441C19.3638 15.0404 15.4306 13 12.0022 13Z" fill="black"></path>
            </svg>
            <span data-v-698cad85="" class="action-button__label"> Kirish </span>
          </div>
          <div className='header-item item-5 pointer rounded-2 d-flex align-items-center justify-content-center gap-2'>
            <svg data-v-698cad85="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 5.5C5.26935 5.5 3.5 7.30906 3.5 9.5C3.5 10.4282 3.87684 11.4436 4.5487 12.5105C5.21692 13.5716 6.14148 14.6274 7.15127 15.6219C8.55769 17.007 10.0318 18.1879 11.1708 19.1003C11.4734 19.3427 11.7523 19.5661 12 19.7694C12.2477 19.5661 12.5266 19.3427 12.8292 19.1003C13.9682 18.1879 15.4423 17.007 16.8487 15.6219C17.8585 14.6274 18.7831 13.5716 19.4513 12.5105C20.1232 11.4436 20.5 10.4282 20.5 9.5C20.5 7.30898 18.7314 5.5 16.5 5.5C14.3473 5.5 13.0738 7.20226 12.7262 7.74742C12.3889 8.27655 11.6111 8.27653 11.2738 7.74742C10.9262 7.20225 9.65273 5.5 7.5 5.5ZM2 9.5C2 6.49094 4.43065 4 7.5 4C9.73143 4 11.2249 5.30207 12 6.21581C12.7751 5.30207 14.2686 4 16.5 4C19.5702 4 22 6.49102 22 9.5C22 10.8218 21.4706 12.1189 20.7206 13.3098C19.9669 14.5066 18.954 15.6539 17.9013 16.6906C16.4429 18.1269 14.808 19.4384 13.6502 20.3672C13.1649 20.7565 12.7634 21.0786 12.4939 21.3144C12.2111 21.5619 11.7889 21.5619 11.5061 21.3144C11.2366 21.0786 10.8351 20.7565 10.3498 20.3672C9.19201 19.4384 7.55712 18.1269 6.09873 16.6906C5.04602 15.6539 4.03308 14.5066 3.27942 13.3098C2.52941 12.1189 2 10.8218 2 9.5Z" fill="#141415"></path>
            </svg>
            <span data-v-698cad85="" class="action-button__label"> Saralangan </span>
          </div>
          <div className='header-item item-6 pointer rounded-2 d-flex align-items-center justify-content-center gap-2'>
            <svg data-v-698cad85="" width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" class="ui-icon  slightly transparent icon-cart">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.5C9 4.88779 10.2402 3.5 12 3.5C13.7598 3.5 15 4.88779 15 6.5V7.5H9V6.5ZM7.5 9V11.5H9V9H15V11.5H16.5V9H18.5V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V9H7.5ZM7.5 7.5V6.5C7.5 4.11221 9.35984 2 12 2C14.6402 2 16.5 4.11221 16.5 6.5V7.5H19.25H20V8.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V8.25V7.5H4.75H7.5Z"></path>
            </svg>
            <span data-v-698cad85="" class="action-button__label slightly"> Savat </span>
          </div>
        </div>
        {/* kichkina telefonlarga */}
        <div className="header-sm gap-3">
          <div className='d-flex align-items-center justify-content-between w-100'>
            {/* one div */}
            <div className='d-flex align-items-center gap-2'>
              <img src={logo2} alt="this is logo" />
              <h3 className='fs-14 fw-400 pt-1'>
                Uzum Market <br />
                <span className='fs-11 fw-400 spacin-06'>Ilovani yuklab olish</span>
              </h3>
            </div>
            {/* two div */}
            <button className='bg-blue nav-btn rounded-3'>Yuklab olish</button>
          </div>
          <div className='w-100'>
            <InputGroup>
              <InputGroupText className='sm-search border-0'>
                <IoSearch fontSize={20} />
              </InputGroupText>
              <Input className='serach-input sm-search border-0' type="text" placeholder='Mahsulotlar va turkumlar izlash' />
            </InputGroup>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar