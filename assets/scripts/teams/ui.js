'use strict'
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onCreateTeamSuccess = function (newTeam) {
  store.team = newTeam.team
  successMessage('New Team Created!')
  $('form').trigger('reset')
  console.log('its working', newTeam)
  $('#message').css('color', 'green')
}

const onCreateTeamFailure = function (data) {
  store.team = data.team
  console.log(store)
  failureMessage('Create Team Failed')
  $('#message').css('color', 'red')
}

const onUpdateTeamSuccess = function (updateTeam) {
  store.team = updateTeam.team
  successMessage('Team Updated!')
  $('form').trigger('reset')
  console.log('its working', updateTeam)
  $('#message').css('color', 'green')
}

const onUpdateTeamFailure = function (updateTeam) {
  store.team = updateTeam.team
  successMessage('Update Failed!')
  $('form').trigger('reset')
  console.log('it did not update', updateTeam)
  $('#message').css('color', 'red')
}

const onShowTeamsSuccess = function (data) {
  // config.team = data.team
  // console.log(data)
  $('#team-message').html('')

  data.teams.forEach(team => {
    const teamsHTML = (`
      <p>Name: ${team.team_name}</p>
      <p>Sport: ${team.team_sport}</p>
      <p>City: ${team.team_city}</p>
      <p>Founded: ${team.year_founded}</p>
      <p>Stadium: ${team.stadium}</p>
      <p>Accolades: ${team.team_accolades}</p>
      <p>ID: ${team.id}</p>
      <br>
      `)
    $('#team-message').append(teamsHTML)
  })
}

const onHideTeamsSuccess = function () {
//   $('#show-team').html('')
  $('#team-message').html('')
// data.teams.forEach(team => {
//   const teamsHTML = (`
//   <p>Name: ${team.team_name}</p>
//   <p>Sport: ${team.team_sport}</p>
//   <p>City: ${team.team_city}</p>
//   <p>Founded: ${team.year_founded}</p>
//   <p>Stadium: ${team.stadium}</p>
//   <p>Accolades: ${team.team_accolades}</p>
//   <p>ID: ${team.id}</p>
//   <br>
//   `)
//   $('#team-message').html(teamsHTML)
// })
}

const onDeleteTeamSuccess = function () {
  store.team = null
  successMessage('Team deleted!')
  $('#delete-player').trigger('reset')
  console.log('team deleted')
  $('#message').css('color', 'green')
}

const onDeleteTeamFailure = function () {
  store.team = null
  successMessage('Team deleted!')
  $('#delete-player').trigger('reset')
  console.log('Failed to deleted')
  $('#message').css('color', 'red')
}

module.exports = {
  onCreateTeamSuccess,
  onCreateTeamFailure,
  onUpdateTeamSuccess,
  onUpdateTeamFailure,
  onShowTeamsSuccess,
  onDeleteTeamSuccess,
  onDeleteTeamFailure,
  onHideTeamsSuccess
}
