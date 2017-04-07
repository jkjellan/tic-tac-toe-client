'use strict'

const statsHandler = function (gamesObjectArray) {
  console.log(gamesObjectArray)
  $('.games-won').html('')
  let k = 0
  for (let i = 0; i < gamesObjectArray.length; i++) {
    $('.games-won').append('<div id="b' + i + '" class="board-hist">')
    for (let j = 0; j < 9; j++) {
      $('#b' + i).append('<div id="s' + k + '" class="s-hist"></div>')
      $('#s' + k).html(gamesObjectArray[i].cells[j])
      k = k + 1
    }
  }
}

module.exports = {
  statsHandler
}
