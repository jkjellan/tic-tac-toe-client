'use strict'

const store = require('../store')

const signUpSuccess = (ajaxResponse) => {
  console.log('sign up Success')
  console.log(ajaxResponse)
}

const signUpFailure = (error) => {
  console.log('sign up error')
  console.error(error)
}

const signInSuccess = (ajaxResponse) => {
  console.log('sign in success', ajaxResponse)
  store.user = ajaxResponse.user
}

const signInFailure = (error) => {
  console.log('sign in failure')
  console.error(error)
}

const signOutSuccess = () => {
  console.log('sign out success, nothing was returned')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
}

const signOutFailure = (error) => {
  console.log('sign out failure')
  console.error(error)
}

const changePasswordSuccess = () => {
  console.log('change password success, nothing was returned')
  console.log('store is: ', store)
  store.user = null
  console.log('store is: ', store)
}

const changePasswordFailure = (error) => {
  console.log('change password failure')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}