import React from 'react';
import './index.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'

import wave from '../../Components/Img/wave.png'
import bg from '../../Components/Img/bg.svg'
import avatar from '../../Components/Img/avatar.svg'

const Login = () => {
  return(
    <div>
      <img className="wave" src={wave} alt='Wave'/>
      <div className='container'>
        <div className='img'>
        <img className="bg" src={bg} alt='Bg'/>
        </div>
        <div className='login-container'>
          <form action='index.js'>
            <img className="avatar" src={avatar} alt='Avatar'/>
            <h2 className='font-div'>Bem vindo!</h2>
            <div className='input-div one'>
              <div className='i'>
                <i className='icon-user'><FaUserAlt/></i>
              </div>
              <div>
                <h5>Usuário</h5>
                <input className='input' type='text'></input>
              </div>
            </div>
            <div className='input-div two'>
              <div className='i'>
                <i className='icon-user'><FaLock/></i>
              </div>
              <div>
                <h5>Senha</h5>
                <input className='input' type='password'></input>
              </div>
            </div>
            <NavLink to='/home' className='btnforgot'>Esqueceu a Senha?</NavLink>
            <input type='submit' className='btn' value='Login' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;

const inputs = document.querySelectorAll ('.input');

function focusFunc(){
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

function blurFunc(){
  let parent = this.parentNode.parentNode;
  if(this.value === ''){
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
})