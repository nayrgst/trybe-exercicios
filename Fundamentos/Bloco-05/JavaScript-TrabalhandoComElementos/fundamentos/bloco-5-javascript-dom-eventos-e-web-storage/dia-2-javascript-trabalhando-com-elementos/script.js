let container = document.querySelector('body');
let container2 = document.getElementsByTagName('main');
let container3 = document.getElementsByTagName('section');
let container4 = document.getElementsByClassName('left-content');
let container5 = document.getElementsByClassName('right-content');
let container6 = document.getElementsByClassName('numbers');
let array = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

function createChild(element, classe) {
    let newChild = document.createElement('h1');
    newChild.innerText = element;
    newChild.setAttribute('class', 'title');
    return newChild;
};

function createChildMain(classe) {
    let newChild = document.createElement('main');
    newChild.className = classe;
    return newChild;
};


container.appendChild(createChild('Exercício 5.2 - JavaScript DOM'));
container.appendChild(createChildMain('main-content'));



function childMain(element) {
    let newChildMain = document.createElement('section');
    newChildMain.className = element;
    return newChildMain
};

function novoFilho(element) {
    let newChildMain = document.createElement('h3');
    newChildMain.className = element;
    newChildMain.setAttribute('class', 'description');
    return newChildMain
}


container2[0].appendChild(childMain('center-content'));
container2[0].appendChild(childMain('left-content'));
container2[0].appendChild(childMain('right-content'));
container2[0].appendChild(novoFilho())
container2[0].appendChild(novoFilho())
container2[0].appendChild(novoFilho())

function childSection(element) {
    let child = document.createElement('p');
    child.innerText = element;
    return child;
}

container3[0].appendChild(childSection('exercicio-5.2'));

function leftChild(element) {
    let child = document.createElement('img')
    child.setAttribute('src', 'https://picsum.photos/200');
    child.className = element;
    return child;
}

container4[0].appendChild(leftChild('small-image'));

function rightChild(element) {
    let child = document.createElement('ul')
    child.className = element;
    return child;
}

container5[0].appendChild(rightChild('numbers'));

for (let index = 0; index < array.length; index += 1) {
    let list = array[index];

    let right = document.createElement('li');
    right.innerText = list;

    container6[0].appendChild(right);
};

let remover = document.querySelector('.left-content');
remover.remove();

let margemR = document.querySelector('.right-content');
margemR.style.marginRight = 'auto';

let cor = document.querySelector('.center-content');
cor.style.backgroundColor = 'green';

document.querySelector('.numbers').lastChild.remove();
document.querySelector('.numbers').lastChild.remove();