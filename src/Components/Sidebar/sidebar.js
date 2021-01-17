import React, {Component} from 'react';
import './sidebar.css'
import {FaBars, FaTruck, FaUserCircle, FaSignOutAlt, FaPortrait, FaLayerGroup, FaChartLine, FaDollarSign, FaFolderOpen, FaKey} from 'react-icons/fa'
import {Link} from 'react-router-dom'

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
              <Link to='/home' className='nav__logo'>
                <i className='nav__logo-icon'><FaLayerGroup />
                </i>
                <span className='nav__logo-name'>Gráfica Revender</span>
              </Link>
  
              <div className='nav__list active'>
                <Link to='/dash' className='nav__link'>
                  <i className='nav__icon'><FaChartLine /></i>
                  <span className='nav__name'>Dashboard</span>
                </Link>
  
                <Link to='/ped' className='nav__link'>
                  <i className='nav__icon'><FaFolderOpen /></i>
                  <span className='nav__name'>Pedido</span>
                </Link>
  
                <Link to='/cli' className='nav__link'>
                  <i className='nav__icon'><FaPortrait /></i>
                  <span className='nav__name'>Cliente</span>
                </Link>
  
                <Link to='/fin' className='nav__link'>
                  <i className='nav__icon'><FaDollarSign /></i>
                  <span className='nav__name'>Financeiro</span>
                </Link>
  
                <Link to='/ent' className='nav__link'>
                  <i className='nav__icon'><FaTruck /></i>
                  <span className='nav__name'>Entrega</span>
                </Link>
  
                <Link to='/adm' className='nav__link'>
                  <i className='nav__icon'><FaKey /></i>
                  <span className='nav__name'>Admin</span>
                </Link>
              </div>
            </div>
            <Link to='/page404' className='nav__link'>
              <i className='nav__icon'><FaSignOutAlt /></i>
              <span className='nav__name'>Log Out</span>
            </Link>
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
