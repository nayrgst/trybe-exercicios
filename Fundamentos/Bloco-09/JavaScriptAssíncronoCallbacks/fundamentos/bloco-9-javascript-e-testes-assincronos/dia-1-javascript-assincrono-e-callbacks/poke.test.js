// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio7-Pokemon.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const errorPokemon = new Error('Não temos esse pokémon para você :(');

    function callback(error) {
        expect(error).toEqual(errorPokemon)
        done();
    }
    getPokemonDetails((vrf) => vrf.name === 'Pikachu', callback)
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    const especificacoes = "Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Chama!"
    function callback(dados) {
        expect(dados).toBe(especificacoes);
        done();
    }
    getPokemonDetails((vrf) => vrf.name === 'Charmander', callback)
  });
});