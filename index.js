// let n = 4;
// let asteriscos = "*"
// let linha = ''

// for (let index = 0; index < n; index += 1) {
//     linha = linha + asteriscos;
// }
//  for (index = 0; index < n; index += 1) {
//      console.log (linha)
//  }

// let n = 4;
// let asteriscos = "*";
// let linha = '';

// for (let index = 0; index <= n; index += 1) {
//     console.log (linha)
//     linha = linha + asteriscos;
// }

let n = 4;
let asteriscos = "*"
let linha = ''
let espaço = n

for (let index = 0; index < n; index += 1) {
    for (i  = 0; i <= n; i += 1) {
    if (i < espaço) {
        linha = linha + ' ';
    } else {
        linha = linha + asteriscos;
    }
}
    console.log(linha)
    linha = '';
    espaço -= 1;
}