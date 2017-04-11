'use strict'
const store = require('../store')

// let boardArray = new Array(9)
let scoreArray = [0, 0, 0]
let playerArray = ['Player X', 'Tie', 'Player O']
// Local array to try to corrent for timing of Ajax function
let localArray = new Array(9)

const checkWin = function (array) {
  const winArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
  let xWin = false
  let oWin = false
  let winner = ''

  for (let i = 0; i < winArray.length; i++) {
    xWin = winArray[i].every(function (e) {
      if (array !== undefined) {
        winner = array[e]
        return array[e] === 'x'
      }
    })

    oWin = winArray[i].every(function (e) {
      if (array !== undefined) {
        winner = array[e]
        return array[e] === 'o'
      }
    })

    const l = store.game.cells.filter((e) => { return (e !== undefined && e !== '') }).length
    if ((l === 9) && (!oWin && !xWin) && (!store.game.over)) {
      store.game.over = true
      $('#game-over').val('true')
      $('#submit-move').submit()
      $('.p1-prompt-text').html('BORING! It was a draw...')
      $('.p2-prompt-text').html('BORING! It was a draw...')
      $('#play-again-wrapper').show()
      scoreArray[1] = scoreArray[1] + 1
    }

    if (xWin) {
      if (store.game.over === false) {
        scoreArray[0] = scoreArray[0] + 1
        $('#play-again-wrapper').show()
      }
      $('.p1-prompt-text').html('Player X Wins!')
      $('.p2-prompt-text').html('Player X Wins!')
      return true
    } else if (oWin) {
      if (store.game.over === false) {
        scoreArray[2] = scoreArray[2] + 1
        $('#play-again-wrapper').show()
      }
      $('.p1-prompt-text').html('Player O Wins!')
      $('.p2-prompt-text').html('Player O Wins!')
      return true
    }
  }
}

const renderBoard = function (array) {
  // creates array of X's and O's left, to render to screen
  const xLeft = 5 - (array.filter((e) => { return (e === 'x') }).length)
  const xLeftArray = []
  for (let i = 0; i < xLeft; i++) {
    xLeftArray[i] = 'x'
  }

  const oLeft = 4 - (array.filter((e) => { return (e === 'o') }).length)
  const oLeftArray = []
  for (let i = 0; i < oLeft; i++) {
    oLeftArray[i] = 'o'
  }

  for (let i = 0; i < array.length; i++) {
    $('#' + i).html(array[i])
  }
  for (let i = 0; i < 5; i++) {
    if (xLeftArray[i] === undefined) {
      $('#x' + i).html('')
    } else {
      $('#x' + i).html(xLeftArray[i])
    }
  }
  for (let i = 0; i < 4; i++) {
    if (oLeftArray[i] === undefined) {
      $('#o' + i).html('')
    } else {
      $('#o' + i).html(oLeftArray[i])
    }
  }

  for (let i = 0; i < scoreArray.length; i++) {
    $('#player' + i).html(playerArray[i] + ':  <span id="score0" class="score">' + scoreArray[i] + '</span>')
  }
}

// renderBoard(boardArray, xLeft, oLeft)

const handleClick = function () {
  $('.square').on('click', function (e) {
    // turns off clicked square's click handler off immediately after submission
    // to prevent double clicks.
    $(this).off()
    const squareClicked = store.game.cells[+$(this).attr('id')]
    // base my length check on actual gameboard, not ajax array
    const divs = []
    $('.square').toArray().forEach((div) =>
    divs.push($(div).text()))
    console.log(divs)
    const length = divs.filter((e) => { return (e !== undefined && e !== '') }).length
    const localLength = localArray.filter((e) => { return (e !== undefined && e !== '') }).length
    //

    if ((length % 2 === 0) && (localLength % 2 === 0) && (squareClicked === undefined || squareClicked === '') && (store.game.over === false)) {
      // fill up local gameboard array, which I use to control for AJAX timing throwing off x & o alternating
      localArray[+$(this).attr('id')] = 'x'
      console.log(localArray)
      // click on board fills out form and submits AJAX PATCH request.  All logic handled after Ajax response.
      $('#cell-index').val(+$(this).attr('id'))
      $('#cell-value').val('x')
      $('#game-over').val('false')
      $('#submit-move').submit()

      $('.p2-prompt-text').html("It's your turn, " + playerArray[2] + '!')
      $('.p1-prompt-text').html('')
    } else if ((length % 2 === 1) && (localLength % 2 === 1) && (squareClicked === undefined || squareClicked === '') && (store.game.over === false)) {
      // fill up local gameboard array, which I use to control for AJAX timing throwing off x & o alternating
      localArray[+$(this).attr('id')] = 'o'
      console.log(localArray)
      // click on board fills out form and submits AJAX PATCH request.  All logic handled after Ajax response.
      $('#cell-index').val(+$(this).attr('id'))
      $('#cell-value').val('o')
      $('#game-over').val('false')
      $('#submit-move').submit()

      $('.p1-prompt-text').html("It's your turn, " + playerArray[0] + '!')
      $('.p2-prompt-text').html('')
    }
  })
}

const logicHandler = function () {
  // handle click is the quarter back function.  checkWin and renderBoard are called upon AJAX success.
  handleClick()
}

const playAgain = function () {
  // reset local array, which I use to control for AJAX timing through off x & o alternating
  localArray = new Array(9)

  $('#play-again-wrapper').hide()
  // renderBoard(store.game.cells)
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
  }
  $('.p1-prompt-text').html("It's your turn, " + playerArray[0] + '!')
  $('.p2-prompt-text').html('')

  // because I turn off the click handler of each game cell when clicked,
  // this is necessary to replace all of the click handlers to play again
  logicHandler()
}

const newGame = function () {
  // reset local array, which I use to control for AJAX timing through off x & o alternating
  localArray = new Array(9)

  $('#play-again-wrapper').hide()
  scoreArray = [0, 0, 0]
  playerArray = ['Player X', 'Tie', 'Player O']
  // renderBoard(store.game.cells)
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
  }
  $('.p1-prompt-text').html("It's your turn, " + playerArray[0] + '!')
  $('.p2-prompt-text').html('')

  // because I turn off the click handler of each game cell when clicked,
  // this is necessary to replace all of the click handlers to play again.
  // this could be necessary if user signed out or changes password, which
  // requires clicking 'new game' to play again.
  logicHandler()
}

module.exports = {
  checkWin,
  renderBoard,
  logicHandler,
  playAgain,
  newGame
}
