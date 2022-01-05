const criarOp = document.querySelector('#estados')
const mes = '12'
const dia = '31'
const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará','Espírito', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo	', 'Sergipe	', 'Tocantins'
];


function criarOps() {
  for (let index = 0; index < estados.length; index += 1){
    const criar = document.createElement('option');
    criar.innerText = estados[index];
    criarOp.appendChild(criar);
  };
};
criarOps();

function data() {
  if (dia > 0 && dia <= 30) {
  } else if (mes > 0 && mes <= 12){ 
  } else {
    alert('Data inválida');
  };
};
	
	data();
	

	
	

	




	
	
	

	



	
	
	


