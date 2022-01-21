// function soma(a, b) {
//     return a + b;
//   }
  
//   function sub(a, b) {
//     return a - b;
//   }
  
//   function mult(a, b) {
//     return a * b;
//   }
  
//   function div(a, b) {
//     return a / b;
//   }
  
//   function mod(a, b) {
//     return a % b;
//   }

// --------------------------------------parte2-------------------------------------------------

// function maiorNum(primeiroNum, segundoNum) {
//     if (primeiroNum > segundoNum) {
//       return primeiroNum + ' é maior que ' + segundoNum;
//     } else {
//       return segundoNum + ' é maior que ' + primeiroNum;
//     }
//   }

// --------------------------------------parte3-------------------------------------------------

// function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
//     if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
//       return 'O maior número é: ' + primeiroNum;
//     } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
//       return 'O maior número é: ' + segundoNum;
//     } else {
//       return 'O maior número é: ' + terceiroNum;
//     }
//   }

// --------------------------------------parte4-------------------------------------------------

// function positiveNegative(number) {
//     if (number > 0) {
//       return 'positive';
//     } else if (number < 0) {
//       return 'negative';
//     } else {
//       return 'zero';
//     }
//   }


// --------------------------------------parte5-------------------------------------------------

// function triangleAnglesValidate(angleA, angleB, angleC) {
//     let sumOfAngles = angleA + angleB + angleC;
//     let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
//     if (allAnglesArePositives) {
//       if (sumOfAngles === 180) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return 'Erro: ângulo inválido';
//     }
//   }