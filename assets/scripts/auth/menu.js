'static'
const signInSuccess = function () {
  $('#mySignInModal').modal('toggle')
  $('#tempSignInError').html('')
  $('.init').hide()
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#sign-out').show()
  $('#chng-pw-modal').show()
  $('#new-game-wrapper').show()
}

const signInError = function () {
  $('#tempSignInError').html("Wrong Email or Password. Sign up if you don't already have an account")
}

const signUpSuccess = function () {
  $('#tempSignUpError').html('')
  $('#mySignUpModal').modal('toggle')
  $('#mySignInModal').modal('toggle')
}

const signUpError = function () {
  $('#tempSignUpError').html("Passwords don't match, or email already taken")
}

const newGameSuccess = function () {
  $('#new-game-wrapper').hide()
  $('.scoreWrapper').show()
  $('main').show()
  $('.player-stats-history').show()
}

const signOutSuccess = function () {
  $('#new-game-wrapper').hide()
  $('#play-again-wrapper').hide()
  $('.get-games').hide()
  $('main').hide()
  $('.player-stats-history').hide()
  $('.scoreWrapper').hide()
  $('#sign-out').hide()
  $('#chng-pw-modal').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('.init').show()
}

const changePasswordSuccess = function () {
  $('#new-game-wrapper').hide()
  $('#play-again-wrapper').hide()
  $('.get-games').hide()
  $('main').hide()
  $('.player-stats-history').hide()
  $('.scoreWrapper').hide()

  $('#sign-out').hide()
  $('#myPwChangeModal').modal('toggle')
  $('#chng-pw-modal').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('.init').show()
}

const changePasswordError = function () {
  $('#tempChangePasswordError').html('Incorrect Old Password. Pleaes try again.')
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
