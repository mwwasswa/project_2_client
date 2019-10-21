'use strict'
const config = require('../config')
const store = require('../store')

const createTeam = function (formData) {
  console.log('created team')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/teams/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createTeam
}

const updateTeam = function (formData) {
  // console.log('updated team')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/teams/' + formData.team.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const showTeams = function (events) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/teams/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteTeam = function (formData) {
  console.log(formData.team.id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/teams/' + formData.team.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createTeam,
  updateTeam,
  showTeams,
  deleteTeam
}
