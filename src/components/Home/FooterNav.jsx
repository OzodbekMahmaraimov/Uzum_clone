import React, { useState } from 'react';
import './navbar.css';

const FooterNav = () => {
    const [activeNavItem, setActiveNavItem] = useState('cheap-prices');

    const recommend = (id) => {
        setActiveNavItem(id);
    };

    return (
        <div className='w-100 mt-3 nav-footer-container'>
            <ul className='nav-footer d-flex justify-content-between align-items-center list-none ps-3'>
                <li
                    id='cheap-prices'
                    onClick={() => recommend('cheap-prices')}
                    className={activeNavItem === 'cheap-prices' ? 'active-nav' : ''}
                >
                    Arzon narxlar
                </li>
                <li
                    id='recommendations'
                    onClick={() => recommend('recommendations')}
                    className={activeNavItem === 'recommendations' ? 'active-nav' : ''}
                >
                    Tavsiyalar
                </li>
                <li
                    id='new'
                    onClick={() => recommend('new')}
                    className={activeNavItem === 'new' ? 'active-nav' : ''}
                >
                    Yangi
                </li>
            </ul>
        </div>
    );
};

export default FooterNav;
