// const sum = (value1, value2) => value1 + value2;
// console.log(sum(2, 5))

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };

//   console.log(sum(2, '3'));

// const verifyNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//         throw new Error('Os valores devem ser numéricos');
//     }
// };

// const sum = (value1, value2) => {
//     try{
//         verifyNumber(value1, value2) ;
//         return value1 + value2;
//     } catch (error) {
//         throw error.message;
//     }
// };

// console.log(sum (2, '5'));

// const customer = {
//     firstName: 'Pedro',
//     age: 20,
//     job: 'Student'
// };

// console.log(customer);

// customer.lastName = 'Black'

// console.log(customer);

// const customer2 = {
//     firstName: 'Ste',
//     age: 20,
//     job:'veterinary'
// };

// console.log(customer2)

// customer2['lastName'] = 'Black';
// console.log(customer2)

// const customer = {
//     firstName: 'Pedro',
//     age: 20,
//     job: 'Studant'
// };

//   let newKey = 'lastName';
//   const lastName = 'Black';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);

// const student = {
//   Html: 'Ruim',
//   Css: 'Mais ou menos',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Mais ou menos',
// };

// const student2 = {
//   Html: 'Ótimo',
//   Css: 'Ótimo',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
//   Git: 'Ótimo',
// };

// const listSkills = (student) => {
//   const array = Object.keys(student);
//   for (index in array){
//     console.log(`${array[index]}, Nível: ${student[array[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student);

// console.log('Estudante 2');
// listSkills(student2);

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// // for (const property in coolestTvShow) {
// //   console.log(coolestTvShow[property]);
// // }

// console.log(Object.values(coolestTvShow));

// const student = {
//   Html: 'Ruim',
//   Css: 'Mais ou menos',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Mais ou menos',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));
