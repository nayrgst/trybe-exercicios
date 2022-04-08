import React, { Component } from 'react'

class Resumo extends Component {
  render() {
    
    const { value, handleGenerico } = this.props

    return (
      <div> Escreva um Resumo do seu currículo:<br/>
        <textarea 
          className='cur'
          placeholder='Escreva o seu resumo meu nobre!'
          required
          name='resumo'
          value={value}
          onChange={ handleGenerico }
          maxLength='1000'
          rows='20'
          cols='10'
        />
        
      </div>
    )

  }


}

export default Resumo