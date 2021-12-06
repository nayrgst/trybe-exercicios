let container = document.querySelector('body');

function createChild(element) {
  let newChild = document.createElement('h1');
  newChild.innerText = element;
  return newChild;
}

container.appendChild(createChild('Exercício 5.2 - JavaScript DOM'))