import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as MenuIcon } from './icons/menu.svg';

import './sidebar.scss';


const Sidebar = ({ open, closeNavOnLinkClick }) => {
    return (
        <div
            className={`sidebar ${open ? 'sidebar-open' : 'sidebar-close'}`}
            onClick={closeNavOnLinkClick}
        >
            <Link to='/' className='app-name'>
                <h1 id='event-target'>App<span className='sity'>Music</span></h1>
            </Link>
            <div>
                <div className="first-section">
                    <p className='library'>LIBRARY</p>
                    <div className='links-container'>
                        <NavLink
                            exact
                            to='/'
                            id='event-target'
                            className='link'
                            activeStyle={{ color: '#00FF00' }}
                        >
                            <HomeIcon className="icon" />
                            Home
                        </NavLink>

                        <NavLink
                            to='/browse'
                            id='event-target'
                            className='link'
                            activeStyle={{ color: '#00FF00' }}
                        >
                            <MenuIcon className='icon' />
                            Browse
                        </NavLink>

                        <NavLink
                            to='/playlist'
                            id='event-target'
                            className='link'
                            activeStyle={{ color: '#00FF00' }}
                        >
                            Playlist
                        </NavLink>

                        <NavLink
                            to='/artists'
                            id='event-target'
                            className='link'
                            activeStyle={{ color: '#00FF00' }}
                        >
                            Artists
                        </NavLink>

                        <NavLink
                            to='/albums'
                            id='event-target'
                            className='link'
                            activeStyle={{ color: '#00FF00' }}
                        >
                            Albums
                        </NavLink>
                    </div>
                </div>
                <div className="second-section">
                    <p className="discover">DISCOVER</p>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;