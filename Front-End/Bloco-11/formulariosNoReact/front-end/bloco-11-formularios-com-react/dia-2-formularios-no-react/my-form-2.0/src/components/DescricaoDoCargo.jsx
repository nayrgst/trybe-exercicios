import React, { Component } from 'react'

class DescricaoDoCargo extends Component {
  render() {
    
    const { value, handleGenerico } = this.props

    return (
      <div> Escreva seu DescricaoDoCargo:<br/>
        <input 
          type="text" 
          name='descricaoDoCargo'
          value={value}
          onChange={ handleGenerico }
          maxLength='500'
          placeholder='Descreva seu cargo meu nobre!'
          />
      </div>
    )

  }


}

export default DescricaoDoCargo