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
  gameLogic.logicHandler()
  $('#new-game').on('submit', gameLogic.resetGame)
})

$(() => {
  $('#sign-out').hide()
  $('#chng-pw-modal').hide()
  $('.new-game').hide()
  $('.get-games').hide()
  $('main').hide()
  $('.player-stats-history').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
