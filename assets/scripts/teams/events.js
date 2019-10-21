'use strict'
const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateTeam = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createTeam(formData)
    .then(ui.onCreateTeamSuccess)
    .catch(ui.onCreateTeamFailure)
}

const onUpdateTeam = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = formData.team.id
  console.log(formData)
  console.log(formData.team.id_number)
  api.updateTeam(formData, id)
    .then(ui.onUpdateTeamSuccess)
    .catch(ui.onUpdateTeamFailure)
}

const onShowTeams = function (event) {
  event.preventDefault()
  api.showTeams()
  // const form = event.target
  // const formData = getFormFields(form)
  // const team = formData
  // console.log(team)
    .then(ui.onShowTeamsSuccess)
    .catch(ui.onShowTeamsFailure)
}

const onDeleteTeam = function (event) {
  event.preventDefault()
  // const form = event.target
  const formData = getFormFields(event.target)
  // const id = formData.team.id
  // console.log(formData)
  // console.log(formData.team.id_number)
  api.deleteTeam(formData)
    .then(ui.onDeleteTeamSuccess)
    .catch(ui.onDeleteTeamFailure)
}

module.exports = {
  onCreateTeam,
  onUpdateTeam,
  onShowTeams,
  onDeleteTeam
}
