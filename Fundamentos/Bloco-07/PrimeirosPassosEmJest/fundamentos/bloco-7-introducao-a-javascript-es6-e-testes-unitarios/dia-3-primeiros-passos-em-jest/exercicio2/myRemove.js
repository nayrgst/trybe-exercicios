const myRemove = (array, elemento) => {
    let nova = [];
    for (let index = 0; index < array.length; index += 1) {
      if (elemento !== array[index]) {
        nova.push(array[index]);
      }
    }
    return nova;
  }
  module.exports = myRemove;