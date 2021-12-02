// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'sim'
// };
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem:  "Christmas on Bear Mountain, Dell's Four Color Comics #178'",
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim'
// }  
//     for(let all in info) {
//         console.log (info[all] + ' e ' + info2[all]) 
//     }



    // for (let all in info) {
    //     console.log (info[all])
    // }

// for( let all in info){
//     console.log (all)
// }
// console.log ('Bem-vinda, ' + info.personagem);

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
//   leitor.livrosFavoritos.push(
//     {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editor: 'Rocco',
// }
//   )
//     console.log ( leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')
// console.log ('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + "'" + leitor.livrosFavoritos[0].titulo + "'" );


// function verificaPalindrome(geral){
//   for(index in geral){
//     if(geral[index] != geral[(geral.length - 1) - index]){
//       return false;
//     }
//   }
//   return true;
// }
// function verificaPalindrome(string){
//   let geral2 = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;                              //ajuda com o gabarito do course da trybe
//     } else {
//       return false;
//     }
// }

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));

// function maior (numero){
//   let maior = 0;
//     for(let index in numero){
//       if (numero[maior] < numero[index]) {
//         maior = index;

//       }
//     }
//     return maior;
// }

// console.log(maior([2, 3, 6, 7, 10, 1 ]));

// function menor (numero){
//   let menor = 0;
//     for(let index in numero){
//       if (numero[menor] > numero[index]) {
//         menor = index;

//       }
//     }
//     return menor;
// }

// console.log(menor([2, 4, 6, 7, 10, 0, -3]));

function resultado (nomes){
  let resultado = nomes[0];
    for(let index in nomes){
      if (resultado.length < nomes[index].length) {
        resultado = nomes[index];

      }
    }
    return resultado;
}

console.log(resultado(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));