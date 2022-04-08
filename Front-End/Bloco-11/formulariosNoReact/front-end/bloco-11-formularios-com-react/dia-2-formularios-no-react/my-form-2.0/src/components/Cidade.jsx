import React, { Component } from 'react'

class Cidade extends Component {
  render() {
    
    const { value, handleGenerico } = this.props

    return (
      <div> Cidade: <br/>
        <input 
          type="text" 
          name='cidade'
          value={value}
          onChange={ handleGenerico }
          maxLength='28'
          placeholder='Digite o nome da sua Cidade meu nobre'
          required
          />
      </div>
    )

  }


}

export default Cidade