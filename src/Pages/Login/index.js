import React, {Component} from 'react';
import './index.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'

import wave from '../../Components/Img/wave.png'
import logo from '../../Components/Img/logo.svg'
import avatar from '../../Components/Img/avatar.svg'


class Login extends Component {
  state = {
    value: "",
    hide: false,
    focus: false,
  };
  handleAutoFill = e => {
    this.setState({
      hide: e.animationName === "onAutoFillStart",
    });
  };
  render() {
    const {focusone, focustwo, valueone, valuetwo } = this.state;
    const hideLabelone =  focusone || valueone;
    const hideLabeltwo =  focustwo || valuetwo;

    return(
      <div>
        <img className="wave" src={wave} alt='Wave'/>
        <div className='container'>
          <div className='img'>
          <img className="logo" src={logo} alt='Logo'/>
          </div>
          <div className='login-container'>
            <form action='index.js'>
              <img className="avatar" src={avatar} alt='Avatar'/>
              <h2 className='font-div'>Bem vindo!</h2>
              <div className={`input-div one ${hideLabelone ? "hide" : ""}`}>
                <div className='i'>
                  <i className='icon-user'><FaUserAlt/></i>
                </div>
                <div>
                <h5>Usuário</h5>
                  <input 
                    className='input' 
                    type='text'
                    onFocus={() => this.setState({ focusone: true })}
                    onBlur={() => this.setState({ focusone: false })}
                    onChange={e => this.setState({ valueone: e.target.value })}
                    ></input>
                </div>
              </div>
              <div className={`input-div two ${hideLabeltwo ? "hide" : ""}`}>
                <div className='i'>
                  <i className='icon-user'><FaLock/></i>
                </div>
                <div>
                  <h5>Senha</h5>
                  <input
                  className='input'
                  type='password'
                  onFocus={() => this.setState({ focustwo: true })}
                  onBlur={() => this.setState({ focustwo: false })}
                  onChange={e => this.setState({ valuetwo: e.target.value })}
                  ></input>
                </div>
              </div>
              <NavLink to='/page404' className='btnforgot'>Não lembra a Senha?</NavLink>
              <NavLink to='/home' type='submit' className='btn'>Login</NavLink>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;