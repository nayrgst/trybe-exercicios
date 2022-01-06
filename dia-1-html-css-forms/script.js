const criarOp = document.querySelector('#estados');
const reset = document.querySelector('#form');
const button = document.querySelector('#bt');
const container = document.querySelector('.container')
const estados = [' ', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará','Espírito', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo	', 'Sergipe	', 'Tocantins'
];


function criarOps() {
  for (let index = 0; index < estados.length; index += 1){
    const criar = document.createElement('option');
    criar.innerText = estados[index];
    criarOp.appendChild(criar);
  };
};

const nome =  document.querySelector('#name');
function validarNome(){
  if(nome.value.length > 40 || nome.value.length === 0){
    alert('Campo do NOME vázio!!');
  };
};

const email = document.querySelector('#email');
function validarEmail(){
  if(email.value.length > 50 || email.value.length === 0){
    alert('Campo do EMAIL vázio!!');
  };
};

const cpf = document.querySelector('#cpf');
function validarCpf() {
  if(cpf.value.length > 11 || cpf.value.length === 0){
    alert('Campo do CPF vázio!!');
  };
};

const endereço = document.querySelector('#endereço');
function validarEndereço(){
  if(endereço.value.length > 200 || endereço.value.length === 0){
    alert('Campo do ENDEREÇO vázio!!');
  };
};

const cidade = document.querySelector('#cidade');
function validarCidade() {
  if (cidade.value.length > 28 || cidade.value.length === 0){
    alert('Campo do CIDADE vázio!!');
  };
};

const estado = document.querySelector('#estados');
function validarEstado(){
  if(estado.value.length === 0) {
    alert('Campo de ESTADOS vázio!!');
  };
};

//ajuda do DEUSSSS KAELL e da DEUSA Débora!!!
function validarMoradia(){
  const moradia = document.querySelector('input[name=local]:checked')
  if (moradia === null) {
    alert('Campo de MORADIA vázio!!');
  };
};

const resumo = document.querySelector('#cur');
function validarResumo(){
    if(resumo.value.length > 1000 || resumo.value.length === 0){ alert('Campo de RESUMO vázio!!');
    };
  };

  const cargo = document.querySelector('#cargo');
  function validarCargo(){
    if (cargo.value.length > 40 || cargo.value.length === 0){
        alert('Campo do CARGO vázio!!');
    };
  };

  const descricao = document.querySelector('#decCargo')
  function validarDescricao(){
    if(descricao.value.length > 500 || descricao.value.length === 0){
      alert('Campo do DESCRIÇÃO vázio!!');
    };
  };

  const data = document.querySelector('#date');
  function validarData(){
    if (data.value.length === 0) {
      alert('Campo da DATA vázio!!');
    };
  };

  
function clicks(event){
  event.preventDefault();
  validarNome();
  validarEmail();
  validarCpf();
  validarEndereço();
  validarCidade();
  validarEstado();
  validarMoradia();
  validarResumo();
  validarCargo();
  validarDescricao();
  validarData();
};

button.addEventListener('click', clicks);

criarOps();
 function divs(){
  container.innerHTML = '';
  const moradia = document.querySelector('input[name="local"]:checked')
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const div5 = document.createElement('div');
  const div6 = document.createElement('div');
  const div7 = document.createElement('div');
  const div81 = document.createElement('div');
  const div8 = document.createElement('div');
  const div9 = document.createElement('div');
  const div10 = document.createElement('div');
  div.innerHTML =  `Nome     : ${nome.value}`
  div2.innerHTML = `E-mail   : ${email.value}`
  div3.innerHTML = `CPF      : ${cpf.value}`
  div4.innerHTML = `Endereço : ${endereço.value}`
  div5.innerHTML = `Cidade   : ${cidade.value}`
  div6.innerHTML = `Estado   : ${estado.value}`
  div7.innerHTML = `Moradia  : ${moradia.value}`
  div8.innerHTML = `Resumo   : ${resumo.value}`
  div81.innerHTML = `Cargo   : ${cargo.value}`
  div9.innerHTML = `Descrição de cargo : ${descricao.value}`
  div10.innerHTML = `Data de incio : ${data.value}`
  container.appendChild(div)
  container.appendChild(div2)
  container.appendChild(div3)
  container.appendChild(div4)
  container.appendChild(div5)
  container.appendChild(div6)
  container.appendChild(div7)
  container.appendChild(div81)
  container.appendChild(div8)
  container.appendChild(div9)
  container.appendChild(div10)
};


button.addEventListener('click', divs);