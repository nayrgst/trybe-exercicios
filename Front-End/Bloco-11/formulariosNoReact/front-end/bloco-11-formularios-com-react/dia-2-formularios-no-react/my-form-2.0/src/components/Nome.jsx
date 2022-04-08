import React, { Component } from 'react'

class Nome extends Component {
  render() {
    
    const { value, handleGenerico } = this.props

    return (
      <div> Escreva seu Nome:<br/>
        <input 
          type="text" 
          name='nome'
          value={value}
          onChange={ handleGenerico }
          maxLength='40'
          placeholder='Digite seu nome meu nobre'
          required
          />
      </div>
    )

  }


}

export default Nome