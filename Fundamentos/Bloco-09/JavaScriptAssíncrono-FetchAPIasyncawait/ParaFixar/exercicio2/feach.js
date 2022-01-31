// exemplo 1

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();



// exemplo 2

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();


// exemplo 3 catch

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported



// exemplo 4 assync

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();

// // Chuck Norris can write multi-threaded applications with a single thread.



// exemplo 5 await

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);
  
//   console.log(result);
// };

// fetchJoke();

// // Chuck Norris can write multi-threaded applications with a single thread.



// exemplo 6 refatorado com try/catch

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.value);
//   } catch(error) {
//     console.log(`Algo deu errado :( \n${error}`);
//   }
// }

// fetchJoke();

// // Chuck Norris can write multi-threaded applications with a single thread.


