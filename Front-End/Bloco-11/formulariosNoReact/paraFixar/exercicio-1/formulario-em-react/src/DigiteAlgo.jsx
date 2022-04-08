import React, { Component } from 'react';

class digiteAlgo extends Component {
  render() {

    const { value, handleGenerico } =  this.props

    let erro = undefined
    if (value.length >= 120) erro = "colocou coisa de mais meu nobre 😪"

    return (
      <fieldset> Escreva algo aqui:
      <div>
        <textarea 
        name='digiteAlgo'
         placeholder='Digite algo aqui meu nobre!' 
         value={value}
         onChange={ handleGenerico }
         maxLength='120'
         rows='10'
         cols='30'
         />
      </div>
      <span> { erro ? erro : '' } </span>
      </fieldset>
    )
  }
}

export default digiteAlgo