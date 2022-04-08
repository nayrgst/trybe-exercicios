import React, { Component } from 'react'
import Nome from './Nome'
import Email from './Email'
import CPF from './CPF'
import Endereço from './Endereço'
import Cidade from './Cidade '
import Estado from './Estado'
import RadioButton from './RadioButton'
import ResumoDoCurriculo from './ResumoDoCurrículo'
import Cargo from './Cargo'
import DescricaoDoCargo from './DescriçãoDoCargo'

class Form extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return ( 
      <form>
        <Nome />
        <Email />
        <CPF />
        <Endereço />
        <Cidade />
        <Estado />
        <RadioButton />
        <ResumoDoCurriculo />
        <Cargo />
        <DescricaoDoCargo />
      </form>
    )
  }
}


export default Form;