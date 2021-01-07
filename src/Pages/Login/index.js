import React from 'react';
import './index.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import wave from '../../Components/Img/wave.png'
import bg from '../../Components/Img/bg.svg'
import avatar from '../../Components/Img/avatar.svg'


const Login = () => {
  return(
    <body>
      <img src={wave} alt='Wave'/>
      <div className='container'>
        <div className='img'>
        <img src={bg} alt='Bg'/>
        </div>
        <div className='login-container'>
          <form action='index.js'>
            <img src={avatar} alt='Avatar'/>
            <h2>Welcome</h2>
            <div className='input-div'>
              <div className='i'>
                <i className='icon-user'><FaUserAlt/></i>
              </div>
              <div>
                <h5>Username</h5>
                <input className='input' type='text'></input>
              </div>
            </div>
            <div className='input-div'>
              <div className='i'>
                <i className='icon-user'><FaLock/></i>
              </div>
              <div>
                <h5>Paswword</h5>
                <input className='input' type='password'></input>
              </div>
            </div>
            <a href='#'>Forgot Password</a>
            <input type='submit' className='btn' value='Login' />
          </form>
        </div>
      </div>
    </body>
  )
}

export default Login