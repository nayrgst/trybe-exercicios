import React, { Component } from 'react'
import Nome from './Nome'
import Email from './Email'
import CPF from './CPF'
import Endereço from './Endereço'
import Cidade from './Cidade'
import Estado from './Estado'
import RadioButton from './RadioButton'
import ResumoDoCurriculo from './ResumoDoCurrículo'
import Cargo from './Cargo'
import DescricaoDoCargo from './DescricaoDoCargo'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      CPF: 0,
      endereço: '',
      cidade: '',
      estado: '',
      casa: false,
      ap: false,
      resumoDoCurriculo: '',
      cargo: '',
      descricaoDoCargo: '',
      erros: {},

    }
    this.handleGenerico = this.handleGenerico.bind(this)
  }

  handleGenerico({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      
    })

  }

  render() {
    return ( 
      <div>
        <form >
      <fieldset>
          <legend>Formulário</legend>
          <Nome 
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
          <Email 
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
          <CPF
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
          <Endereço
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
          <Cidade 
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
          <Estado 
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
          <RadioButton 
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
      </fieldset>
      <fieldset>
          <ResumoDoCurriculo 
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
          <Cargo 
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
          <DescricaoDoCargo 
          value={ this.state.nome }
          handleGenerico={ this.handleGenerico }
          />
          <button
          type='submit'
          >Enviar
          </button>

          <button
          type='reset'
          >
          Limpar  
          </button>
      </fieldset>
        </form>
      </div>
    )
  }
}


export default Form;