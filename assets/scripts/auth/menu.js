'static'
const store = require('../store')

const signInSuccess = function () {
  $('#mySignInModal').modal('toggle')
  $('#tempSignInError').html('')
  $('.init').hide()
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#sign-out').show()
  $('#chng-pw-modal').show()
  $('#new-game-wrapper').show()
  $('#toggleHist').val('Player One Game History')
  $('.user-signed-in').html(store.user.email)
}

const signInError = function () {
  $('#tempSignInError').html("Wrong Email or Password. Sign up if you don't already have an account")
}

const signUpSuccess = function () {
  $('#tempSignUpError').html('')
  $('#mySignUpModal').modal('toggle')
  $('#mySignInModal').modal('toggle')
  // needed because previous sign-in error will still show without below code
  $('#tempSignInError').html('')
  $('#sign-in').find('input:text, input:password, select, textarea').val('')
}

const signUpError = function () {
  $('#tempSignUpError').html("Passwords don't match, or email already taken")
}

const newGameSuccess = function () {
  $('#new-game-wrapper').hide()
  // $('.scoreWrapper').show()
  $('main').show()
  // $('.player-stats-history').show()
  // $('#get-finished-games').show()
  $('.finished-games-wrapper').show()
}

const signOutSuccess = function () {
  $('#new-game-wrapper').hide()
  $('#play-again-wrapper').hide()

  $('main').hide()
  $('.player-stats-history').hide()
  $('.scoreWrapper').hide()
  $('#sign-out').hide()
  $('#chng-pw-modal').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('.init').show()
  $('.finished-games-wrapper').hide()
  $('.user-signed-in').html('')
}

const changePasswordSuccess = function () {
  $('#new-game-wrapper').hide()
  $('#play-again-wrapper').hide()
  // $('.get-games').hide()
  $('.finished-games-wrapper').hide()
  $('main').hide()
  $('.player-stats-history').hide()
  $('.scoreWrapper').hide()
  $('#sign-out').hide()
  $('#myPwChangeModal').modal('toggle')
  $('#chng-pw-modal').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('.init').show()
  $('.user-signed-in').html('')
}

const changePasswordError = function () {
  $('#tempChangePasswordError').html('Incorrect Old Password. Please try again.')
}

module.exports = {
  signInSuccess,
  signInError,
  signUpSuccess,
  signUpError,
  newGameSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordError
}
