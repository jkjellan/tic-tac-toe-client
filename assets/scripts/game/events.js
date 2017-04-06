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
  api.submitMove(data)
    .then(ui.submitMoveSuccess)
    .catch(ui.submitMoveFailure)
}

const addHandlers = () => {
  $('#get-games').on('submit', onGetGames)
  $('#new-game').on('submit', onNewGame)
  $('#submit-move').on('submit', onSubmitMove)
}

module.exports = {
  addHandlers
}
