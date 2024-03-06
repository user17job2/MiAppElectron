const $ = selector => document.querySelector(selector)

const $count = $('#count')
const $button = $('button')
// const eve
$button.addEventListener('click', () => {
  const count = +$count.innerText
  $count.innerText = count + 1
})

window.electronAPI.onUpdateTheme((event, theme) => {
  const root = document.documentElement
  root.style.setProperty('--scheme', theme)
  console.log({ theme })
})
