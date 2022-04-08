import { React, Component } from 'react'



class App extends Component {
  
  constructor () {
    super()
    this.state = {
      numeroDeCliques: 0,
      numeroDeXablaus: 0,
      numeroDeSalves: 0,
    }
    this.botao1 = this.botao1.bind(this)
    this.botao2 = this.botao2.bind(this)
    this.botao3 = this.botao3.bind(this)
  }

  botao1 () {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }), () => {
      console.log(`Clique ${this.corBtn(this.state.numeroDeCliques)}`)
    })
  }

  botao2 () {
    this.setState((estadoAnterior) => ({
      numeroDeXablaus: estadoAnterior.numeroDeXablaus + 1
    }), () => {
      console.log(`Clique ${this.corBtn(this.state.numeroDeXablaus)}`)
    })
  }
  botao3 () {
    this.setState((estadoAnterior) => ({
      numeroDeSalves: estadoAnterior.numeroDeSalves + 1
  }), () => {
    console.log(`Clique ${this.corBtn(this.state.numeroDeSalves)}`)
  })
  }

  corBtn (vrf) {
    return vrf % 2 === 0 ? 'green' : 'red';
  }

  render() {
    const { numeroDeXablaus, numeroDeSalves, numeroDeCliques } = this.state;
    return (
      <span>
        <button 
        onClick={this.botao1} 
        style={{backgroundColor: this.corBtn(numeroDeCliques) }}>
          {numeroDeCliques}
        </button>

        <button 
        onClick={this.botao2} 
        style={{backgroundColor: this.corBtn(numeroDeXablaus) }}>
          {`xablau ${numeroDeXablaus}`}
        </button>
        
        <button 
        onClick={this.botao3}
        style={{backgroundColor: this.corBtn(numeroDeSalves) }}>
        {`Salve ${numeroDeSalves}`}
        </button>
      </span>
    )
  }
}

export default App;
