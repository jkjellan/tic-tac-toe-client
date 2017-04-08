'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
const gameLogic = require('./game/gameLogic')

$(() => {
  $('#sign-out').hide()
  $('#chng-pw-modal').hide()
  $('#new-game-wrapper').hide()
  $('#play-again-wrapper').hide()
  $('.finished-games-wrapper').hide()
  $('main').hide()
  $('.player-stats-history').hide()
  $('.scoreWrapper').hide()
})

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
})

$(() => {
  gameLogic.logicHandler()
  $('#new-game').on('submit', gameLogic.newGame)
  $('#play-again').on('submit', gameLogic.playAgain)
})

// clears out modal forms and error messages
$(() => {
  $('#sign-up-modal').on('click', function () { $('#tempSignUpError').html('') })
  $('#sign-up-modal').on('click', function () { $('#sign-up').find('input:text, input:password, select, textarea').val('') })

  $('#sign-in-modal').on('click', function () { $('#tempSignInError').html('') })
  $('#sign-in-modal').on('click', function () { $('#sign-in').find('input:text, input:password, select, textarea').val('') })

  $('#chng-pw-modal').on('click', function () { $('#tempChangePasswordError').html('') })
  $('#chng-pw-modal').on('click', function () { $('#change-password').find('input:text, input:password, select, textarea').val('') })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
