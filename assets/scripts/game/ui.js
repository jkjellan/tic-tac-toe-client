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
  console.log('New Game Success')
  console.log(ajaxResponse)
}

const submitMoveFailure = (error) => {
  console.log('New Game error')
  console.error(error)
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  newGameSuccess,
  newGameFailure,
  submitMoveSuccess,
  submitMoveFailure
}
