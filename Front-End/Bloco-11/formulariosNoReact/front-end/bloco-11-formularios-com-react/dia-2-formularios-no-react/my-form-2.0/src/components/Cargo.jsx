import React, { Component } from 'react'

class Cargo extends Component {
  render() {
    
    const { value, handleGenerico } = this.props

    return (
      <div> Cargo: <br/>
          <textarea 
          required
          name='cargo'
          value={value}
          onChange={ handleGenerico }
          maxLength='40'
          rows='5'
          cols='5'
        />
      </div>
    )

  }


}

export default Cargo