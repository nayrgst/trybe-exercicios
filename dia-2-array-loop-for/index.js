let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;
let impares = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 === 0) {
       console.log (impares)
    } else {
        console.log ("Não a valores imapares")
    }
}
    




//ajuda para resolver essa questão foi em https://www.horadecodar.com.br/2021/06/29/encontrar-maior-e-menor-numero-de-array-em-javascript/
// let resultado = Math.max(...numbers);
// console.log(resultado)




// let total = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     total += numbers[index];
// }

// let resultado = total / numbers.length;

// if ( resultado >= 20) {
//     console.log ("Valor maior que 20")
// } else {
//     console.log ("Valor menor ou igual a 20");
// }