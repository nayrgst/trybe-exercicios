// const books = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: {
//         name: 'George R. R. Martin',
//         birthYear: 1948,
//       },
//       releaseYear: 1991,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: {
//         name: 'J. R. R. Tolkien',
//         birthYear: 1892,
//       },
//       releaseYear: 1954,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Isaac Asimov',
//         birthYear: 1920,
//       },
//       releaseYear: 1951,
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Frank Herbert',
//         birthYear: 1920,
//       },
//       releaseYear: 1965,
//     },
//     {
//       id: 5,
//       name: 'A Coisa',
//       genre: 'Terror',
//       author: {
//         name: 'Stephen King',
//         birthYear: 1947,
//       },
//       releaseYear: 1986,
//     },
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: {
//         name: 'H. P. Lovecraft',
//         birthYear: 1890,
//       },
//       releaseYear: 1928,
//     },
//   ];
  
// // -----------------------------parte1-------------------------------------------
// //   const authorBornIn1947 = () => {
// //     return books.find((book) => book.author.birthYear === 1947).author.name;
// //   }


// // ----------------------------parte2-----------------------------------------------
// //   const smallerName = () => {
// //     let nameBook;
  
// //     books.forEach((book) => {
// //       if (!nameBook || book.name.length < nameBook.length) {
// //         nameBook = book.name;
// //       }
// //     });
// //     return nameBook;
// //   };

// // ---------------------------------------parte3--------------------------------------------
// // const getNamedBook = () => {
// //     return books.find((book) => book.name.length === 26);
// //   }


// // -------------------------------------parte4--------------------------------------------------

// // const booksOrderedByReleaseYearDesc = () => {
// //     return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
// //   }


// // ---------------------------------------------parte5------------------------------------------

// // const expectedResult = false;

// // const everyoneWasBornOnSecXX = () => {
// //   return books.every((book) => (
// //     book.author.birthYear > 1900 && book.author.birthYear <= 2000
// //   ));
// // }


// // -------------------------------------------parte6----------------------------------------------------

// // const expectedResult = true;

// // const someBookWasReleaseOnThe80s = () => {
// //   return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
// // }

// // ------------------------------------------------parte7----------------------------------------------------

// // const expectedResult = false;

// // const authorUnique = () => {
// //   return books.every((book) =>
// //     !books.some((bookSome) =>
// //       (bookSome.author.birthYear === book.author.birthYear)
// //       && (bookSome.author.name !== book.author.name)));
// // }