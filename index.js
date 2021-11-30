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

// let n = 4;
// let asteriscos = "*"
// let linha = ''
// let espaço = n

// for (let index = 0; index < n; index += 1) {
//     for (i  = 0; i <= n; i += 1) {
//     if (i < espaço) {
//         linha = linha + ' ';
//     } else {
//         linha = linha + asteriscos;
//     }
// }
//     console.log(linha)
//     linha = '';
//     espaço -= 1;
// }

let n = 11;
let asteriscos = "*";
let linha = '';
let espaço = n;
let meio = (n + 1 )/ 2;
let left = meio;
let right = meio; 

for (let index = 0; index <= meio; index += 1) {
    for (i  = 0; i <= n; i += 1) {
    if (i > left && i < right) {
        linha = linha + asteriscos;
    } else {
        linha = linha + " ";
    }
}
    console.log(linha)
    linha = '';
    right += 1;
    left -= 1;
}