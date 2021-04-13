import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchNews from '../search-news/search-news';

import './nav-bar.scss';

const NavBar = () => {
    return (
        <nav className={'nav_bar'}>
            <NavLink exact to={'/'} activeClassName={'active'}>
                Последние
            </NavLink>

            <NavLink to={'/category/read'} activeClassName={'active'}>
                Читаемые
            </NavLink>

            <NavLink to={'/category/popular'} activeClassName={'active'}>
                Популярные
            </NavLink>

            <NavLink to={'/category/discussed'} activeClassName={'active'}>
                Обсуждаемые
            </NavLink>

            <SearchNews/>
        </nav>
    )
}

export default NavBar;