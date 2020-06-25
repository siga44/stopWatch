const wrapper = document.querySelector('.wrapper')
const btns = wrapper.querySelector('.buttons')
const clock = wrapper.querySelector('#stop-watch')

let seconds = 0, minutes = 0, sIntId, active

btns.addEventListener('click', handler)
clock.addEventListener('click', () => active ? pause() : start())
clock.addEventListener('dblclick', () => stop())

function stopWatch() {
  seconds++
  if (seconds / 60 === 1) {
    seconds = 0
    minutes++
  }
  if (seconds.toString().length === 1) {
    seconds = '0' + seconds
  }
  if (minutes.toString().length === 1) {
    minutes = '0' + minutes
  }
  clock.textContent = `${minutes}:${seconds}`
}

function start() {
  sIntId = setInterval(stopWatch, 1000)
  clock.style.color = 'rgba(255, 255, 255, .9)'
  active = true
}

function pause() {
  clearInterval(sIntId)
  if (seconds !== 0 && minutes !== 0) {clock.style.color = 'rgba(209, 154, 24, 0.8)'}
  active = false
}

function stop() {
  clearInterval(sIntId)
  clock.style.color = 'rgba(255, 255, 255, .9)'
  seconds = 0, minutes = 0
  clock.textContent = '00:00'
  active = false
}

function handler(event) {
  const classes = event.target.classList.value.split(' ')
  if (classes.includes('btn-start') && !active) {
    return start()
  } else if (classes.includes('btn-pause')) {
    return pause()
  } else if (classes.includes('btn-stop')) {
    return stop()
  }
}
