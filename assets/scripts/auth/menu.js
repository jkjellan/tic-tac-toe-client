'static'
const signInSuccess = function () {
  $('#mySignInModal').on('hidden.bs.model', function () {
    $('.modal-body').val('')
  })

  $('#mySignInModal').modal('toggle')
  $('#tempSignInError').html('')
  $('main').show()
  $('.player-stats-history').show()
}

const signInError = function () {
  $('#tempSignInError').html('Wrong Email or Password')
}

const signUpSuccess = function () {
  $('#tempSignUpError').html('')
  $('#mySignUpModal').modal('toggle')
  $('#mySignInModal').modal('toggle')
}

const signUpError = function () {
  $('#tempSignUpError').html("Passwords don't match, or email already taken")
}

module.exports = {
  signInSuccess,
  signInError,
  signUpSuccess,
  signUpError
}
