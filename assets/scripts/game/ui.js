'use strict'

const store = require('../store')

const getGamesSuccess = (ajaxResponse) => {
  console.log('New Game Success')
  console.log(ajaxResponse)
}

const getGamesFailure = (error) => {
  console.log('New Game error')
  console.error(error)
}

const newGameSuccess = (ajaxResponse) => {
  console.log('New Game Success')
  console.log(ajaxResponse)
  store.game = ajaxResponse.game
  console.log(store.game)
}

const newGameFailure = (error) => {
  console.log('New Game error')
  console.error(error)
}

const submitMoveSuccess = (ajaxResponse) => {
  console.log('Submit Move Success')
  console.log(ajaxResponse)
}

const submitMoveFailure = (error) => {
  console.log('Submit Move error')
  console.error(error)
}

const findGameSuccess = (ajaxResponse) => {
  console.log('Find Game Success')
  console.log(ajaxResponse)
}

const findGameFailure = (error) => {
  console.log('Find Game Error')
  console.error(error)
}

const joinGameSuccess = (ajaxResponse) => {
  console.log('Join Game Success')
  console.log(ajaxResponse)
}

const joinGameFailure = (error) => {
  console.log('Join Game Error')
  console.error(error)
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  newGameSuccess,
  newGameFailure,
  submitMoveSuccess,
  submitMoveFailure,
  findGameSuccess,
  findGameFailure,
  joinGameSuccess,
  joinGameFailure
}
