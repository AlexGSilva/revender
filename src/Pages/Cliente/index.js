import React from 'react'
import Sidebar from '../../Components/Sidebar/sidebar'
import './index.css'

const Cliente = () => {
  return(
    <div>
      <Sidebar />
      <h1 className='te'>Cliente</h1>
      <div className='bodyCliente'>
        <div className='cliente__container'>
          <div className='cliente-container'>
            <div className='input_divCliente codigoCliente'>
              <h5>Código do Cliente</h5>
              <input className='inputCliente codigoCliente' type='text'></input>
            </div>
            <div className='input_divCliente nomeFantasia'>
              <h5>Nome Fantasia</h5>
              <input className='inputCliente nomeFantasia' type='text'></input>
            </div>
            <div className='input_divCliente tipoPessoa'>
              <h5>Tipo de Pessoa</h5>
              <input className='inputCliente tipoPessoa' type='text'></input>
            </div>
            <div className='input_divCliente tipoCliente'>
              <h5>Tipo de Cliente</h5>
              <input className='inputCliente tipoCliente' type='text'></input>
            </div>
            <div className='input_divCliente razaoSocial'>
              <h5>Razão Social</h5>
              <input className='inputCliente razaoSocial' type='text'></input>
            </div>
            <div className='input_divCliente nomeResponsavel'>
              <h5>Nome do Responsável</h5>
              <input className='inputCliente nomeResponsavel' type='text'></input>
            </div>
            <div className='input_divCliente cpfCnpj'>
              <h5>CPF/CNPJ</h5>
              <input className='inputCliente cpfCnpj' type='text'></input>
            </div>
            <div className='input_divCliente contatos'>
              <h5>Contatos</h5>
              <input className='inputCliente contatos' type='text'></input>
            </div>
            <div className='input_divCliente ativo'>
              <h5>Ativo</h5>
              <input className='inputCliente ativo' type='text'></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cliente