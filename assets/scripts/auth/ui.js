'use strict'
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  setTimeout(function () {
    $('#message').html('')
  }, 2000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  setTimeout(function () {
    $('#message').html('')
  }, 2000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  $('#message').css('color', 'green')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#message').css('color', 'red')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user = responseData.user
  $('#message').css('color', 'green')
  $('#sign-up, #sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#BoxOne').hide()
  $('#create-team').show()
  $('#update-team').show()
  $('#show-teams').show()
  $('#delete-team').show()
  $('#hide-teams').show()
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
  $('#message').css('color', 'red')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  $('#message').css('color', 'green')
  $('#sign-up, #sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#BoxOne').show()
  $('#create-team').hide()
  $('#update-team').hide()
  $('#show-teams').hide()
  $('#delete-team').hide()
  $('#team-message').html('')
  $('#hide-teams').hide()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  $('#message').css('color', 'red')
}

const onChangePasswordSuccess = function () {
  successMessage('Change Password successfully')
  $('#message').css('color', 'green')
}

const onChangePasswordFailure = function () {
  failureMessage('Change Password failed')
  $('#message').css('color', 'red')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
