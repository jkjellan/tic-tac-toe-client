'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
})

const gameLogic = require('./game/gameLogic')

$(() => {
  console.log('this is my tic tac toe game')
  gameLogic.logicHandler()
  $('#new-game').on('submit', gameLogic.resetGame)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
