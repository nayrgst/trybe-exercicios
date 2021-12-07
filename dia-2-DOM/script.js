        let container = document.querySelector('body');

        function createChild(element) {
          let newChild = document.createElement('h1');
          newChild.innerText = element;
          return newChild;
        }

        function createChildMain(classe) {
          let newChild = document.createElement('main');
          newChild.className = classe;
          return newChild;
        }

    


        container.appendChild(createChild('Exercício 5.2 - JavaScript DOM'));
        container.appendChild(createChildMain('main-content'));
 