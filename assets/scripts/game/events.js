'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onGetGames = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  console.log('event onGetGames triggered')
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.GetGamesFailure)
}

const onGetFinishedGames = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  console.log('event onGetFinishedGames triggered')
  api.getFinishedGames()
    .then(ui.getFinishedGamesSuccess)
    .catch(ui.GetFinishedGamesFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  console.log('event onNewGame triggered')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onSubmitMove = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('event onSubmitMove triggered')
  console.log(data)
  api.submitMove(data)
    .then(ui.submitMoveSuccess)
    .catch(ui.submitMoveFailure)
}

const onFindGame = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  console.log('event onFindGame triggered')
  api.findGame()
    .then(ui.findGameSuccess)
    .catch(ui.findGameFailure)
}

const onJoinGame = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  console.log('event onFindGame triggered')
  api.joinGame()
    .then(ui.joinGameSuccess)
    .catch(ui.joinGameFailure)
}

const addHandlers = () => {
  $('#get-games').on('submit', onGetGames)
  $('#get-finished-games').on('submit', onGetFinishedGames)
  $('#new-game').on('submit', onNewGame)
  $('#play-again').on('submit', onNewGame)

  $('#submit-move').on('submit', onSubmitMove)
  $('#find-game').on('submit', onFindGame)
  $('#join-game').on('submit', onJoinGame)
}

module.exports = {
  addHandlers
}
