import { React, Component } from 'react'

const botao1 = () => {
  console.log('clicou danada')
}
const botao2 = () => {
  console.log('Falei pra não clicar po')
}
const botao3 = () => {
  console.log('hmmmm clicou mermo')
}

class App extends Component {
  render() {
    return (
      <span>
        <button onClick={botao1}>Clique Aqui!</button>
        <button onClick={botao2}>Não clique!</button>
        <button onClick={botao3}>da uma clicada aqui!</button>
      </span>
    )
  }
}

export default App;
