function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// ---------------------------exercicio-1----------------------------
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function meses() {
    let lista = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
      let dia = dezDaysList[index];
      let dia2 = document.createElement('li');

        if (dia == 24 | dia == 31) {
          dia2.className = 'day holiday';
          dia2.innerHTML = dia;
          lista.appendChild(dia2);
        } else if (dia == 4 | dia == 11 | dia == 18) {
          dia2.className = 'day friday'
          dia2.innerHTML = dia
          lista.appendChild(dia2)
        } else if (dia === 25) {
          dia2.className = 'day friday holiday'
          dia2.innerHTML = dia
          lista.appendChild(dia2)
        } else {
          dia2.innerHTML = dia
          dia2.className = 'day'
          lista.appendChild(dia2)
        }
    }

  }
        meses();
      // ---------------------------------------RESOLVIDO-------------------------------------------

      //----------------------------------EXERCICIO-2-----------------------------------------------

      function botao (button) {
        let botao = document.querySelector('.buttons-container')
        let botao2 = document.createElement('button')
        let botaoId = 'btn-holiday'
        
        botao2.innerHTML  = button
        botao2.id = botaoId
        botao.appendChild(botao2)
      }
        botao('Feriados');
      //----------------------------------------RESOLVIDO----------------------------------------------

      //----------------------------------EXERCICIO-3-----------------------------------------------

      function feriados () {
        let botaoClick = document.querySelector('#btn-holiday')
        let botao = document.querySelectorAll ('.holiday')
        let color = 'rgb(238,238,238)'
        let cor = '#283618'

        botaoClick.addEventListener('click', function (){
          for (let  index = 0; index < botao.length; index +=1) {
            if (botao[index].style.backgroundColor === cor){
                 botao[index].style.backgroundColor = color;
            } else {
              botao[index].style.backgroundColor = cor;
            }
          }
        })
      }
        feriados ();
        
        //---------------------------------EXERCICIO-4-----------------------------------------------

           function sexta (button) {
            let botao = document.querySelector('.buttons-container')
            let botao2 = document.createElement('button')
            let botaoId = 'btn-friday'
            
            botao2.innerHTML  = button
            botao2.id = botaoId
            botao.appendChild(botao2)
          }
            sexta('Sexta-feira');
            

       //---------------------------------EXERCICIO-5-----------------------------------------------

       function sextaFeiras(sexta) {
  let botao = document.querySelector('#btn-friday');
  let friday = document.getElementsByClassName('friday');
  let newText = 'FINALMENTEEE';

  botao.addEventListener('click', function() {
  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerHTML !== newText) {
        friday[index].innerHTML = newText;
    } else {
        friday[index].innerHTML = sexta[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
sextaFeiras(dezFridays);



