import React, { Component } from 'react'

class Endereço extends Component {
  render() {
    
    const { value, handleGenerico } = this.props

    return (
      <div> Endereço: <br/>
        <input 
          type="text" 
          name='endereço'
          value={value}
          onChange={ handleGenerico }
          maxLength='200'
          placeholder='Digite seu endereço meu nobre'
          required
          />
      </div>
    )

  }


}

export default Endereço