import React, { Component } from 'react';

class Nome extends Component {
  render() {

    const { value, handleGenerico } =  this.props
    let erro = undefined
    if(value.length >= 30) erro = "que nome grande do c**** é esse meu nobre ? 😨"


    return (
      <fieldset> Escreva seu nome:
          <div>
              <input 
              name='nome' 
              type='text'
              onChange={ handleGenerico }
              value={value}
              maxLength='30'
              placeholder='Digite seu nome meu nobre!'
              />
          </div>
          <span> { erro ? erro : '' } </span>
            </fieldset>
    )
  }
}

export default Nome 
