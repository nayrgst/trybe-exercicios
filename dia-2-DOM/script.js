  let container = document.querySelector('body');
  let container2 =  document.getElementsByTagName('main');
  let container3 = document.getElementsByTagName('section');


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
