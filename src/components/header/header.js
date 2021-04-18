import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import MarqueeContainer from './marquee/marquee-container';
import NavBar from './nav-bar/nav-bar';

const Header = () => {
    return (
        <header>
            <div className={'container'}>
                <MarqueeContainer/>
                <NavLink to={'/'} className={'logo'}>
                    <span>INSTA</span> NEWS
                </NavLink>
                <NavBar/>
            </div>
        </header>
    )
}

export default Header;