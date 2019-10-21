'use strict'

const authEvents = require('./auth/events')
const teamsEvents = require('./teams/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-team').on('submit', teamsEvents.onCreateTeam)
  $('#update-team').on('submit', teamsEvents.onUpdateTeam)
  $('#show-teams').on('submit', teamsEvents.onShowTeams)
  $('#delete-team').on('submit', teamsEvents.onDeleteTeam)
})
