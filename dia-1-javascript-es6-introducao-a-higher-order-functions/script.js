const geradorDeEmals = (name) => {
  const email = name.toLowerCase().split(' ').join('_'); //toLoweeCase trandorma todos os caracteres em minusculo
  return {name, email: `${email}@betrybe.com`};
};

const newEmployees = (geradorDeEmals) => {
  const employees = {
    id1: geradorDeEmals("Gabriel Pondaco"), // Nome: Gabriel Pondaco -> Chame sua função passando o nome Gabriel Pondaco como parâmetro, substituindo as aspas
    id2: geradorDeEmals("Fernando Bissi"), // Nome: Fernando Bissi -> Chame sua função passando o nome Fernando Bissi como parâmetro, substituindo as aspas
    id3: geradorDeEmals("Cassio Gabriel"), // Nome: Cassio Gabriel -> Chame sua função passando o nome Cassio Gabriel como parâmetro, substituindo as aspas
    id4: geradorDeEmals("Kaell Caldeira"), // Nome: Kaell Caldeira -> Chame sua função passando o nome Kaell Caldeira como parâmetro, substituindo as aspas
    id5: geradorDeEmals("João Polonês"), // Nome: João Polonês -> Chame sua função passando o nome João Polonês como parâmetro, substituindo as aspas
    id6: geradorDeEmals("Maria Clara"), // Nome: Maria Clara -> Chame sua função passando o nome Maria Clara como parâmetro, substituindo as aspas
    id7: geradorDeEmals("Vitor Pacheco"), // Nome: Vitor Pacheco -> Chame sua função passando o nome Vitor Pacheco como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(geradorDeEmals));