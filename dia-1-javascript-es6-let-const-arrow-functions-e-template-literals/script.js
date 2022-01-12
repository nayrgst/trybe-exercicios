// let testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = "Não devo ser utilizada fora do meu escopo (if).";
//     ifScope = ` ${ifScope} Ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = "Não devo ser utilizada fora meu escopo (else)";
//     console.log(elseScope);
//   }
// };

// testingScope(true);

// // ------------------------------------------------- parte 2 -----------------------------------------------------------------------
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const crescente = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// };
// const ordem = crescente();

// console.log(`Os números ${ordem} e encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉 s

// const factorial = (n) => {
//   let f = 1;
//   for (let index = 1; index <= n; index += 1) {
//     f *= index;
//   }
//   return f;
// };
// console.log(factorial(3));

// const maior = (valor) => {
//   let separar = valor.split(" ");
//   let resultado = "";
//   let total = 0;

//   for (let index of separar) {
//     if (index.length > total) {
//       total = index.length;
//       resultado = index;
//     }
//   }
//   return resultado;
// };

// console.log(
//   maior(
//     "Antonio foi no banheiro e não sabemos o que aconteceu, depois descobrimos que ele ficou preso em um paralelepipedo"
//   )
// );

let clickCount = 0;
let btn = document.querySelector('#btn-ck');
let clicks = document.querySelector('#contador')
btn.addEventListener('click', () => clicks.innerHTML = clickCount+= 1 );