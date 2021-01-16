import React, {Component} from 'react';
import './sidebar.css'
import {FaBars, FaTruck, FaUserCircle, FaSignOutAlt, FaPortrait, FaLayerGroup, FaChartLine, FaDollarSign, FaFolderOpen, FaKey} from 'react-icons/fa'

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
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
      }
    } 
    showNavBar('header-toggle', 'nav-bar', 'body-pd', 'header')

    const linkColor = document.querySelectorAll('.nav__link')

    function colorLink() {
      if(linkColor){
        linkColor.forEach(l => l.classList.remove('active'))
        console.log(this)
        this.classList.add('active')
      }
    }
    linkColor.forEach(l => l.addEventListener('click',colorLink))
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
              <a href='/home' className='nav__logo'>
                <i className='nav__logo-icon'><FaLayerGroup />
                </i>
                <span className='nav__logo-name'>Gráfica Revender</span>
              </a>
  
              <div className='nav__list active'>
                <a href='/dash' className='nav__link'>
                  <i className='nav__icon'><FaChartLine /></i>
                  <span className='nav__name'>Dashboard</span>
                </a>
  
                <a href='/ped' className='nav__link'>
                  <i className='nav__icon'><FaFolderOpen /></i>
                  <span className='nav__name'>Pedido</span>
                </a>
  
                <a href='/cli' className='nav__link'>
                  <i className='nav__icon'><FaPortrait /></i>
                  <span className='nav__name'>Cliente</span>
                </a>
  
                <a href='/fin' className='nav__link'>
                  <i className='nav__icon'><FaDollarSign /></i>
                  <span className='nav__name'>Financeiro</span>
                </a>
  
                <a href='/ent' className='nav__link'>
                  <i className='nav__icon'><FaTruck /></i>
                  <span className='nav__name'>Entrega</span>
                </a>
  
                <a href='/adm' className='nav__link'>
                  <i className='nav__icon'><FaKey /></i>
                  <span className='nav__name'>Admin</span>
                </a>
              </div>
            </div>
            <a href='/page404' className='nav__link'>
              <i className='nav__icon'><FaSignOutAlt /></i>
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
