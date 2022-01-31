const moedinhasCriptografadas = async () => {

  const url = `https://api.coincap.io/v2/assets`;

  const cryptoMoedas = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toString())

  return cryptoMoedas;
}

const mostrarMoedas = async () => {
const cryptos = await moedinhasCriptografadas();
const todasMoedas = document.querySelector('#crypto')

  cryptos
  .filter((crypto) => Number(crypto.rank) <= 10)
  .forEach((crypto) => {
    const lista =  document.createElement('li')

  lista.innerText = `${crypto.name} (${crypto.symbol}); ${crypto.priceUsd}`;
  todasMoedas.appendChild(lista);
})

}

window.onload = () => mostrarMoedas();