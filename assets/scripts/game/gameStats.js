'use strict'

const renderHistory = function (gamesObjectArray) {
  // console.log(gamesObjectArray)
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

const wonLost = function (gamesObjectArray) {
  const winArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
  let oWin = null
  let xWin = null
  let winCount = 0
  let lossCount = 0
  let drawCount = 0

  for (let j = 0; j < gamesObjectArray.length; j++) {
    xWin = null
    oWin = null
    for (let i = 0; i < winArray.length; i++) {
      xWin = winArray[i].every(function (e) {
        if (gamesObjectArray[j].cells !== undefined) {
          return gamesObjectArray[j].cells[e] === 'x'
        }
      })

      oWin = winArray[i].every(function (e) {
        if (gamesObjectArray[j].cells !== undefined) {
          return gamesObjectArray[j].cells[e] === 'o'
        }
      })

      // console.log(xWin, oWin)
      // console.log('in wonLost')
      if (xWin) {
        $('#b' + j).append('<div class="win">Win</div>')
        winCount++
        break
      } else if (oWin) {
        $('#b' + j).append('<div class="loss">Loss</div>')
        lossCount++
        break
      }
    }
    if (!xWin && !oWin) {
      $('#b' + j).append('<div class="draw">Tie</div>')
      drawCount++
    }
  }
  $('#w').html('Win: ' + winCount)
  $('#l').html('Loss: ' + lossCount)
  $('#d').html('Tie: ' + drawCount)
}

module.exports = {
  renderHistory,
  wonLost
}
