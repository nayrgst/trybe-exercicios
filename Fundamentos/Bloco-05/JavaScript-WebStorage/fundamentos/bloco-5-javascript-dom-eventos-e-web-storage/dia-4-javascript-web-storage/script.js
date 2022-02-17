window.onload = function () {
  let colorWell;
  let corPadrao = '#0000ff'

  window.addEventListener('load', start, false)

  function start() {
    colorWell = document.querySelector('#colorWell');
    colorWell.value = corPadrao;
    colorWell.addEventListener('input', updateFirst, false)
    colorWell.addEventListener('change', updateAll, false)
    colorWell.select();
  }

  function updateFirst(event) {
    let p = document.querySelector('p')
      if(p) {
        p.style.color = event.target.value
      }
  }

  function updateAll(event) {
    document.querySelectorAll('p').forEach(function(p) {
      p.style.color = event.target.value;
    })
  }
}