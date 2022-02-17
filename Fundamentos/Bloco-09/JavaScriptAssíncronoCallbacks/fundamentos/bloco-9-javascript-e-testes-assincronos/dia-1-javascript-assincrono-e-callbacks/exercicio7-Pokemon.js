
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Superar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Chama',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: "Pistola D'água",
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}!`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails(
  (vrf) => vrf.name === "Charmander", 
  (error, aviso) => {
    if (error) {
      console.log(error)
    } else {
      console.log(aviso)
    }
  }
);

module.exports = {
  getPokemonDetails,
};
