const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
let consert = document.querySelector('.tech')

  consert.style.transform='translateY(0px)'



  function clickTech  (event) {
    let elemento = document.querySelector('.tech');
    elemento.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
  }

  firstLi.addEventListener('click', clickTech);
  secondLi.addEventListener('click', clickTech);
  thirdLi.addEventListener('click', clickTech);

    input.addEventListener('input', function(event) {
      let element = document.querySelector('.tech');
      element.innerText = event.target.value;        
});
  


  myWebpage.addEventListener('dblclick', function(){
    window.location.replace('https://nayrgst.github.io/')
  })

    myWebpage.addEventListener('mouseover', function(event){
      event.target.style.color='#e9c46a'
    })

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.