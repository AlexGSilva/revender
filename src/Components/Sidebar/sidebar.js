import React from 'react';
import './sidebar.css'
import {FaBars, FaUserCircle, FaLayerGroup, FaAmazon} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='body'>
      <header className='header' id='header'>
        <div className='header__toggle'>
          <i className='header-toggle'><FaBars /></i>
        </div>

        <div className='header__img'>
          <i><FaUserCircle /></i>
        </div>
      </header>

      <div className='l-navbar' id='nav-bar'>
        <nav className="nav">
          <div>
            <a href='/page404' className='nav__logo'>
              <i className='nav__logo-icon'><FaLayerGroup /></i>
              <span className='nav__logo-name'>Gráfica Revender</span>
            </a>

            <div className='nav__list'>
              <a href='/page404' className='nav__link'>
                <i className='nav__icon'><FaAmazon /></i>
                <span className='nav__name'>Dashboard</span>
              </a>

              <a href='/page404' className='nav__link'>
                <i className='nav__icon'><FaAmazon /></i>
                <span className='nav__name'>Users</span>
              </a>

              <a href='/page404' className='nav__link'>
                <i className='nav__icon'><FaAmazon /></i>
                <span className='nav__name'>Messages</span>
              </a>

              <a href='/page404' className='nav__link'>
                <i className='nav__icon'><FaAmazon /></i>
                <span className='nav__name'>Favorites</span>
              </a>

              <a href='/page404' className='nav__link'>
                <i className='nav__icon'><FaAmazon /></i>
                <span className='nav__name'>Data</span>
              </a>

              <a href='/page404' className='nav__link'>
                <i className='nav__icon'><FaAmazon /></i>
                <span className='nav__name'>Analytics</span>
              </a>
            </div>
          </div>
          <a href='/page404' className='nav__link'>
            <i className='nav__icon'><FaAmazon /></i>
            <span className='nav__name'>Log Out</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
