document.getElementById('elementoOndeVoceEsta').style.color = 'red';
document.querySelector('#primeiroFilhoDoFilho').innerText = 'Sou o primogênito';
document.querySelector('#pai').firstElementChild;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
document.querySelector('#elementoOndeVoceEsta').nextSibling;
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
document.querySelector('#pai').lastElementChild.previousElementSibling;
document.querySelector('#filhoDoprimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;

let container = document.querySelector('#pai');
let container2 = document.querySelector('#elementoOndeVoceEsta');
let container3 = document.querySelector('#primeiroFilhoDoFilho');

function createElementChild (iden) {
  let newChild = document.createElement('section');
    newChild.id = iden
      return newChild
}

container.appendChild(createElementChild('quintoFilho'));
container2.appendChild(createElementChild ('filhoDoElemento'));
container3.appendChild(createElementChild('filhoDoprimeiroFilhoDoFilho'));