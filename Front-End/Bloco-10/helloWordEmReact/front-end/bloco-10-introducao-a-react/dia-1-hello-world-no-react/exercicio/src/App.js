import Header from './Header'
import './App.css';
const tarefas = ['acordar', 'estudar', 'estudar', 'comer', 'estudar', 'estudar dnv' , 'dormir', 'estudar']
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return ( <div>
    <Header />
    <ol>{ tarefas.map((vrf) => Task(vrf))}</ol>
    </div> );
}

export default App;
