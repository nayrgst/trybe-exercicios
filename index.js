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


function verificaPalindrome(geral){
  for(index in geral){
    if(geral[index] != geral[(geral.length - 1) - index]){
      return false;
    }
  }
  return true;
}
function verificaPalindrome(string){
  let geral2 = string.split('').reverse().join('');
    if (reverse === string) {
      return true;                              //ajuda com o gabarito do course da trybe
    } else {
      return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));