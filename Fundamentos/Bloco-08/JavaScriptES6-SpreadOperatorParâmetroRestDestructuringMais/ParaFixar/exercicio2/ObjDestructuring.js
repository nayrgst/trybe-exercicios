const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  
  const todosOsDados = ({name, age, nationality, profession, squad, squadInitials}) => {
    console.log(`    
    Os dados completos de Maria são:
    Seu nome é ${name}, ela tem ${age} anos de idade, ela é a nacionalidade ${nationality}, 
    trabalha como ${profession}, faz parte da ${squad} que tem as iniciar ${squadInitials} `)
  }
  
  const tudo = {...user, ...jobInfos}

  todosOsDados(tudo);