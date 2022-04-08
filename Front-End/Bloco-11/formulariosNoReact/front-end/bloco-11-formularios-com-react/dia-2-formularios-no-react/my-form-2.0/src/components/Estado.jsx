import React, { Component } from 'react'

const estados = [
  'Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  'Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  'Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)',
]

class Estado extends Component {
  render() {
    
    const { value, handleGenerico } = this.props

    return (
      <div> Escolha seu Estado: <br/>
        <select
        name='estado'
        value={value}
        onChange={ handleGenerico }
        required
        >
          <option value=''> </option>
          {
            estados.map((value, key) => (
              <option key={ key }>{ value }</option>
            ))
          }
        </select>
      </div>
    )

  }


}

export default Estado