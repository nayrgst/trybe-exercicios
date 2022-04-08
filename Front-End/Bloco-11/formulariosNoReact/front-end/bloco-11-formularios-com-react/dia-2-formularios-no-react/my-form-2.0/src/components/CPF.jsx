import React, { Component } from 'react'

class CPF extends Component {
  render() {
    
    const { value, handleGenerico } = this.props

    return (
      <div> Digite seu CPF: <br/>
        <input 
          type="text" 
          name='CPF'
          value={value}
          onChange={ handleGenerico }
          maxLength="11"
          placeholder='Digite seu CPF meu nobre'
          required
          />
      </div>
    )

  }


}

export default CPF