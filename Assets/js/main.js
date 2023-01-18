function clock() {
  function createHour(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
  }

  const clock = document.querySelector('.clock')
  let segundos = 0
  let timer

  function startCount() {
    timer = setInterval(function () {
      segundos++
      clock.innerHTML = createHour(segundos)
    }, 1000)
  }

  document.addEventListener('click', function (event) {
    const selection = event.target

    if (selection.classList.contains('clear')) {
      clearInterval(timer)
      clock.innerHTML = '00:00:00'
      clock.classList.remove('pausado')
      segundos = 0
    }
    if (selection.classList.contains('init')) {
      clock.classList.remove('pausado')
      clearInterval(timer)
      startCount()
    }
    if (selection.classList.contains('pause')) {
      clearInterval(timer)
      clock.classList.add('pausado')
    }
  })
}
clock()
