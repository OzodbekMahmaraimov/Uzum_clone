import React from 'react'
import './navbar.css'

const NavSmItem = ({ svg, svg2, svg3, svg4, navText, fill }) => {
    return (
        <li className='d-flex flex-column align-items-center'>
            <svg viewBox="0 0 29 28" fill="#8B8E99" xmlns="http://www.w3.org/2000/svg" class="nav-icon-sm">
                <g id="Icon">
                    <g id="Icon_2">
                        <path d={svg}></path>
                        <path d={svg2}></path>
                        <path d={svg3}></path>
                        <path d={svg4}></path>
                    </g>
                </g>
            </svg>
            <h5 className='nav-text-sm'>{navText}</h5>
        </li>
    )
}

export default NavSmItem