'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

// global variables.  Do these belong somewhere else?
const boardArray = []
const xLeft = ['x', 'x', 'x', 'x', 'x']
const oLeft = ['o', 'o', 'o', 'o']
const scoreArray = [0, 0, 0]
const playerArray = ['JIM', 'DRAW', 'MELISSA']
let xWin = false
let oWin = false
let winner = ''

$('.p1-prompt-text').html("It's your turn, " + playerArray[0] + '!')
$('.p2-prompt-text').html('')

$(() => {
  setAPIOrigin(location, config)
})

const authEvents = require('./auth/events.js')

$(() => {
  authEvents.addHandlers()
})

const gameLogic = require('./gameLogic')

$(() => {
  console.log('this is my tic tac toe game')
  gameLogic.handleClick()
  gameLogic.checkWin()
  gameLogic.renderBoard()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
