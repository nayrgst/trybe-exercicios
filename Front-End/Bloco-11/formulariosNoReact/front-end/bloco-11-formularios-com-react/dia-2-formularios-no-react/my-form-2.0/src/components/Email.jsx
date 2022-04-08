import React, { Component } from 'react'

class Email extends Component {
  render() {
    
    const { value, handleGenerico } = this.props

    return (
      <div> Escreva seu Email: <br/>
        <input 
          type="email" 
          name='email'
          value={value}
          onChange={ handleGenerico }
          placeholder='Digite seu Email meu nobre'
          maxLength='50'
          required
          />
      </div>
    )

  }


}

export default Email