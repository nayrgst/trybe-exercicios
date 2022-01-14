// feito com a ajuda do nosso embaixador Gabriel fucking Pondaco!!
const verificar = (value1, value2) => {
  if (value1.length <= 0 || value2.length <= 0) {
    throw new Error('Coloque um valor!')
  }
}

const verificarNaN = (value1, value2) => {
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Coloque um número!')
  }
} 

const sum = () => { 
  try { 
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  verificar(value1, value2);
  verificarNaN(value1, value2)
  const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error){
    document.getElementById('result').innerHTML = `Erro: ${error.message}`
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);}

 