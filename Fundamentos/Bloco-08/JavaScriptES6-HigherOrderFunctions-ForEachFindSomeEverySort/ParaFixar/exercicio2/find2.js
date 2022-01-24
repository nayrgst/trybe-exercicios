const names = ['Kaell', 'Cassio', 'Fernando', 'Maria', 'Pondaco'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());