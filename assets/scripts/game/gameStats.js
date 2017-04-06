'use strict'

const gameLogic = require('./gameLogic')

const histRend = function (gb) {
  for (let i = 0; i < gb.length; i++) {
    $('#s' + i).html(gb[i])
  }
}

const statsHandler = function (gamesObject) {
  histRend(gamesObject[0].cells)
}

module.exports = {
  statsHandler
}
