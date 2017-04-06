'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  console.log('event onNewGame triggered')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const addHandlers = () => {
  $('#new-game').on('submit', onNewGame)
}

module.exports = {
  addHandlers
}
