const geradorDeNome = (elemento) => {
  const email = elemento.toLowerCase().split(' ').join('_');
  return {
    elemento,
    email: `${email}@trybe.com`
  };
};

const criadorDeEmail = (elemento) => { 
  const employees = {
    id1: elemento('Kaell Caldeira'), // Nome: Kaell Caldeira -> Chame sua função passando o nome Kaell Caldeira como parâmetro, substituindo as aspas
    id2: elemento('Fernando Bissi'), // Nome: Fernando Bissi -> Chame sua função passando o nome Fernando Bissi como parâmetro, substituindo as aspas
    id3: elemento('Maria Clara'), // Nome: Maria Clara -> Chame sua função passando o nome Maria Clara como parâmetro, substituindo as aspas
    id4: elemento('Cassio Gabriel'), // Nome: Cassio Gabriel -> Chame sua função passando o nome Cassio Gabriel como parâmetro, substituindo as aspas
    id5: elemento('Gabriel Pondaco'), // Nome: Gabriel Pondaco -> Chame sua função passando o nome Gabriel Pondaco como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(criadorDeEmail(geradorDeNome));