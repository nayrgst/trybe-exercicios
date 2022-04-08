import React, { Component } from 'react';
import DigiteAlgo from './DigiteAlgo'
import Nome from './Nome';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      digiteAlgo: '',
      nome: '',
      idade: 0,
      estado: '',
      moradia: false,
      formularioComErros: true,
    }
    this.handleGenerico = this.handleGenerico.bind(this)
  }

 


  handleGenerico ({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { 
      const { nome, digiteAlgo } = this.state;
      if ( nome.length !== 0 && digiteAlgo.length !== 0) { 
        this.setState({ formularioComErros: false }) 
      } else { this.setState({ formularioComErros: true }) }
     } ) 
  }

  render() {

    const { formularioComErros } = this.state

    return (
      <div>
        <form>
          <DigiteAlgo 
          value={ this.state.digiteAlgo } 
          handleGenerico={this.handleGenerico}
          />
          
          <Nome 
          value={ this.state.nome }
          handleGenerico={this.handleGenerico}

          />

            <fieldset> Digite sua idade:
          <div>
              <input 
              name='idade' 
              type='number'
              onChange={ this.handleGenerico }
              />
          </div>
            </fieldset>
           
            <fieldset> Envie sua foto:
          <div>
              <input 
              name='foto' 
              type='file'
              />
          </div>
            </fieldset>

            <label> Mora sozinho ?
          <div>
              <input 
              name='moradia' 
              type='checkbox'
              onChange={ this.handleGenerico }
              />
          </div>
            </label>

          <div>
            <select 
            name='estado'
            onChange={ this.handleGenerico }
            > Escolha seu estado:
              <option>  </option>
              <option>GO</option>
              <option>DF</option>
              <option>PA</option>
            </select>

          </div>
          
          <button
           type='submit'
           disabled={formularioComErros}
           >
            Enviar
          </button>

        </form>
      </div>

    )
  }
}


export default Form