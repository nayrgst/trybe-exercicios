import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      algo: '',
    }
    this.digiteAlgo = this.digiteAlgo.bind(this)
  }

  digiteAlgo (event) {
    this.setState({
      algo: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label> Escreva algo aqui:
          <div>
            <textarea 
            name='algo'
             placeholder='Escreva Aqui!' 
             onChange={ this.digiteAlgo }
             />
          </div>
          </label>
          
            <label> Escreva seu nome:
          <div>
              <input name='nome' type='text' />
          </div>
            </label>

            <label> Digite sua idade:
          <div>
              <input name='idade' type='number'/>
          </div>
            </label>

          <div>
            <select name='estado' > Escolha seu estado:
              <option>  </option>
              <option>GO</option>
              <option>DF</option>
              <option>PA</option>
            </select>

          </div>
          

        </form>
      </div>

    )
  }
}


export default Form