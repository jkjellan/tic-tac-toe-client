'use strict'

let boardArray = new Array(9)
let xLeft = ['x', 'x', 'x', 'x', 'x']
let oLeft = ['o', 'o', 'o', 'o']
let scoreArray = [0, 0, 0]
let playerArray = ['Player One', 'Tie', 'Player Two']
let xWin = false
let oWin = false
let winner = ''
let catsCounter = 0

const checkWin = function (array) {
  const winArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]

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

    if (xWin || oWin) {
      $('#play-again-wrapper').show()
      return true
    }
  }
}

const renderBoard = function (array, xLeft, oLeft) {
  for (let i = 0; i < array.length; i++) {
    $('#' + i).html(array[i])
  }
  for (let i = 0; i < 5; i++) {
    if (xLeft[i] === undefined) {
      $('#x' + i).html('')
    } else {
      $('#x' + i).html(xLeft[i])
    }
  }
  for (let i = 0; i < 4; i++) {
    if (oLeft[i] === undefined) {
      $('#o' + i).html('')
    } else {
      $('#o' + i).html(oLeft[i])
    }
  }

  for (let i = 0; i < scoreArray.length; i++) {
    $('#player' + i).html(playerArray[i] + ':  <span id="score0" class="score">' + scoreArray[i] + '</span>')
  }
}

// renderBoard(boardArray, xLeft, oLeft)

const handleClick = function () {
  $('.square').on('click', function (e) {
    const squareClicked = boardArray[+$(this).attr('id')]
    let length = boardArray.filter((e) => { return e !== undefined }).length

    if ((length % 2 === 0) && (squareClicked === undefined) && (xWin === false) && (oWin === false)) {
      boardArray[+$(this).attr('id')] = 'x'
      // fills out form that submits patch request to update game state for x
      $('#cell-index').val(+$(this).attr('id'))
      $('#cell-value').val('x')
      $('#game-over').val('false')
      if (checkWin(boardArray)) {
        $('.p2-prompt-text').html('You won, ' + playerArray[0] + '!')
        $('.p1-prompt-text').html('You won, ' + playerArray[0] + '!')
        $('#game-over').val('true')
        scoreArray[0] = scoreArray[0] + 1
      } else {
        $('.p2-prompt-text').html("It's your turn, " + playerArray[2] + '!')
        $('.p1-prompt-text').html('')
      }

      xLeft.pop()
      renderBoard(boardArray, xLeft, oLeft)
    } else if ((length % 2 === 1) && (squareClicked === undefined) && (xWin === false) && (oWin === false)) {
      boardArray[+$(this).attr('id')] = 'o'
      // fills out form that submits patch request to update game state for o
      $('#cell-index').val(+$(this).attr('id'))
      $('#cell-value').val('o')
      $('#game-over').val('false')
      if (checkWin(boardArray)) {
        $('.p1-prompt-text').html('You won, ' + playerArray[2] + '!')
        $('.p2-prompt-text').html('You won, ' + playerArray[2] + '!')
      // fills out form that submits patch request with true if game over
        $('#game-over').val('true')
        scoreArray[2] = scoreArray[2] + 1
      } else {
        $('.p1-prompt-text').html("It's your turn, " + playerArray[0] + '!')
        $('.p2-prompt-text').html('')
      }
      oLeft.pop()
      renderBoard(boardArray, xLeft, oLeft)
    } else {
      // console.log('seat taken! or game is over')
    }
    // console.log(boardArray)

    length = boardArray.filter((e) => { return e !== undefined }).length

    // console.log(winner)
    if (length === 9 && (!xWin && !oWin) && catsCounter === 0) {
      catsCounter++
      $('#game-over').val('true')
      $('.p1-prompt-text').html('BORING! It was a draw...')
      $('.p2-prompt-text').html('BORING! It was a draw...')
      // submits the game form, triggering ajax PATCH request to upate game
      scoreArray[1] = scoreArray[1] + 1
      renderBoard(boardArray, xLeft, oLeft)
      $('#play-again-wrapper').show()
    }
    // submits the game form, triggering ajax PATCH request to upate game
    $('#submit-move').submit()
  })
}

const logicHandler = function () {
  handleClick()
}

const playAgain = function () {
  $('#play-again-wrapper').hide()
  event.preventDefault()
  boardArray = new Array(9)
  xLeft = ['x', 'x', 'x', 'x', 'x']
  oLeft = ['o', 'o', 'o', 'o']
  xWin = false
  oWin = false
  winner = ''
  catsCounter = 0
  renderBoard(boardArray, xLeft, oLeft)
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
  }
  $('.p1-prompt-text').html("It's your turn, " + playerArray[0] + '!')
  $('.p2-prompt-text').html('')
}

const newGame = function () {
  event.preventDefault()
  boardArray = new Array(9)
  xLeft = ['x', 'x', 'x', 'x', 'x']
  oLeft = ['o', 'o', 'o', 'o']
  xWin = false
  oWin = false
  winner = ''
  catsCounter = 0
  scoreArray = [0, 0, 0]
  playerArray = ['Player One', 'DRAW', 'Player Two']
  renderBoard(boardArray, xLeft, oLeft)
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
  }
  $('.p1-prompt-text').html("It's your turn, " + playerArray[0] + '!')
  $('.p2-prompt-text').html('')
}

module.exports = {
  logicHandler,
  playAgain,
  newGame
}
