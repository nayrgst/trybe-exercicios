import { React, Component } from 'react'



class App extends Component {
  
  constructor () {
    super()
    this.botao1 = this.botao1.bind(this)
  }

  botao1 () {
    console.log('clica danada')
    console.log(this)
  }
  render() {
    return (
      <span>
        <button onClick={this.botao1}>Clique Aqui!</button>
      </span>
    )
  }
}

export default App;
