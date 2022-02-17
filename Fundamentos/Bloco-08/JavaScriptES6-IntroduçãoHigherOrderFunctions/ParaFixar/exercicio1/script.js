const acordado = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const resultado = callback();
  console.log(resultado);
};

doingThings(acordado);
doingThings(cafe);
doingThings(dormir);