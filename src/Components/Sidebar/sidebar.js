import React, {Component} from 'react';
import './sidebar.css'
import {FaBars, FaUserCircle, FaLayerGroup, FaAmazon} from 'react-icons/fa'

class Sidebar extends Component {
  handleClick = (toggleId, navId, bodyId, headerId ) => {
    const showNavBar = () => {
      const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
      
      
      if(toggle && nav && bodypd && headerpd){
        nav.classList.toggle('show')
        /* TODO Aprender a trocar o icone */
        /* toggle.classList.toggle('bx-x') */
        console.log (toggle.title)
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      }
    } 
    showNavBar('header-toggle', 'nav-bar', 'body-pd', 'header')
  }

  render(){
    return (
      <div className='body-pd' id='body-pd'>
        <header className='header' id='header'>
          <div className='header__toggle'>
            <i onClick={() => this.handleClick('header-toggle','nav-bar', 'body-pd', 'header')} className='header-toggle' id='header-toggle'><FaBars /></i>
          </div>
  
          <div className='header__img'>
            <i><FaUserCircle /></i>
          </div>
        </header>
  
        <div className='l-navbar' id='nav-bar'>
          <nav className="nav">
            <div>
              <a href='/page404' className='nav__logo'>
                <i className='nav__logo-icon'><FaLayerGroup />
                </i>
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
  }
}



/*const showNavBar = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
} 

showNavBar('header-toggle', 'nav-bar')

const Sidebar = () => {
  
};*/

export default Sidebar;
