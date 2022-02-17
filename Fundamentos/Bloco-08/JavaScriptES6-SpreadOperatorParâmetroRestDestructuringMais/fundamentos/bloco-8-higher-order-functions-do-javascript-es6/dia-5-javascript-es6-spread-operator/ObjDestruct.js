// // // const alex = {
// // //     name: 'Alex',
// // //     age: 26,
// // //     likes: ['fly fishing'],
// // //     nationality: 'Australian',
// // //   };
  
// // //   const gunnar = {
// // //     name: 'Gunnar',
// // //     age: 30,
// // //     likes: ['hiking', 'scuba diving', 'taking pictures'],
// // //     nationality: 'Icelandic',
// // //   };
  
// // //   const personLikes = ({name, age, likes}) => (`${name} is ${age} years old and likes ${likes.join(', ')}.`);
  
// // //   console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
// // //   console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.' 

// // const people = [
// //   {
// //     name: 'Nicole',
// //     bornIn: 1992,
// //     nationality: 'Australian',
// //   },
// //   {
// //     name: 'Harry',
// //     bornIn: 2008,
// //     nationality: 'Australian',
// //   },
// //   {
// //     name: 'Toby',
// //     bornIn: 1901,
// //     nationality: 'Australian',
// //   },
// //   {
// //     name: 'Frida',
// //     bornIn: 1960,
// //     nationality: 'Dannish',
// //   },
// //   {
// //     name: 'Fernando',
// //     bornIn: 2001,
// //     nationality: 'Brazilian',
// //   },
// // ];

// // const filterPeople = (element) => element.filter(
// //   ({  nationality, bornIn }) => 
// //   nationality === 'Australian' && 1900 && bornIn <= 2000,
// // );

// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];

// const shipLength = ({name, length, measurementUnit}) => (
//   `${name} is ${length} ${measurementUnit} long`
// )

// console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'