  let container = document.querySelector('body');
  let container2 = document.getElementsByTagName('main');
  let container3 = document.getElementsByTagName('section');
  let container4 = document.getElementsByClassName('left-content');
  let container5 = document.getElementsByClassName('right-content');


  function createChild(element) {
  let newChild = document.createElement('h1');
  newChild.innerText = element;
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
    }
    
    container2[0].appendChild(childMain('center-content'));
    container2[0].appendChild(childMain('left-content'));
    container2[0].appendChild(childMain('right-content'));


    function childSection(element) {
      let child = document.createElement('p');
      child.innerText = element;
      return child;
    }

    container3[0].appendChild(childSection('exercicio-5.2'));

    function leftChild (element) {
      let child =  document.createElement('img')
      child.setAttribute('src', 'https://picsum.photos/200');
      child.className = element;
      return child;
    }
    
    container4[0].appendChild(leftChild('small-image'));


    