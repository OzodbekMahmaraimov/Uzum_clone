import React from 'react'
import './navbar.css'
import NavSmItem from './NavSmItem'
import Nav from './nav.json'; 

const Navsm = () => {
    return (
        <>
            <nav className='nav-sm position-fixed bottom-0 left-0 z-3 border-top border-2 pt-3 nav-sm-footer'>
                <ul className='d-flex nav-bar-sm align-items-center pointer ps-0'>
                    {Nav.map((navs) => {
                        return (
                            <NavSmItem svg={navs.path1} svg2={navs.path2} svg3={navs.path3} svg4={navs.path4} navText={navs.navText} />
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navsm