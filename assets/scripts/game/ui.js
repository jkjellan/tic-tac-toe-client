'use strict'

const store = require('../store')

const newGameSuccess = (ajaxResponse) => {
  console.log('New Game Success')
  console.log(ajaxResponse)
}

const newGameFailure = (error) => {
  console.log('New Game error')
  console.error(error)
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
