'use strict'

const store = require('../store')
const gameLogic = require('./gameLogic')
const gameStats = require('./gameStats')
const menu = require('../auth/menu')
const ux = require('./ux')

const getGamesSuccess = (ajaxResponse) => {
  // console.log('Get Games Success')
  // console.log(ajaxResponse.games)
  gameStats.renderHistory(ajaxResponse.games)
}

const getGamesFailure = (error) => {
  // console.log('Get Games error')
  // console.error(error)
}

const getFinishedGamesSuccess = (ajaxResponse) => {
  // console.log('Get Finished Games Success')
  // console.log(ajaxResponse.games)
  gameStats.renderHistory(ajaxResponse.games)
  gameStats.wonLost(ajaxResponse.games)
  ux.toggleGameHistory()
}

const getFinishedGamesFailure = (error) => {
  // console.log('Get Finished Games error')
  // console.error(error)
}

const newGameSuccess = (ajaxResponse) => {
  // console.log('New Game Success')
  // console.log(ajaxResponse)
  store.game = ajaxResponse.game
  // console.log(store.game)
  gameLogic.renderBoard(store.game.cells)
  // gameLogic.newGame()
  menu.newGameSuccess()
}

const newGameFailure = (error) => {
  // console.log('New Game error')
  // console.error(error)
}

const submitMoveSuccess = (ajaxResponse) => {
  console.log('Submit Move Success')
  console.log(ajaxResponse)
  store.game = ajaxResponse.game
  // Checks for win condition on 'cells' array that AJAX returns.
  // If 'over' already equals true, skips check.
  if (gameLogic.checkWin(store.game.cells) && !store.game.over) {
    $('#game-over').val('true')
    $('#submit-move').submit()
  }
  gameLogic.renderBoard(store.game.cells)

  // invokes handleClick to turn back on click handler for the game board.
  // we turned off the click handler within handleClick in gameLogic.js.
  // does this create some sort of circular problem?
  gameLogic.logicHandler()
}

const submitMoveFailure = (error) => {
  console.log('Submit Move error')
  console.error(error)

  // turns handler back on as well if submit move fails to register on server.
  gameLogic.logicHandler()
}

const findGameSuccess = (ajaxResponse) => {
  // console.log('Find Game Success')
  // console.log(ajaxResponse)
}

const findGameFailure = (error) => {
  // console.log('Find Game Error')
  // console.error(error)
}

const joinGameSuccess = (ajaxResponse) => {
  // console.log('Join Game Success')
  // console.log(ajaxResponse)
}

const joinGameFailure = (error) => {
  // console.log('Join Game Error')
  // console.error(error)
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  getFinishedGamesSuccess,
  getFinishedGamesFailure,
  newGameSuccess,
  newGameFailure,
  submitMoveSuccess,
  submitMoveFailure,
  findGameSuccess,
  findGameFailure,
  joinGameSuccess,
  joinGameFailure
}
