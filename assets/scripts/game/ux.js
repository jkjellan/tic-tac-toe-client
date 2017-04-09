'use strict'

const toggleGameHistory = function () {
  $('.player-stats-history').toggle('slow', function () {
    if ($('.player-stats-history').is(':visible')) {
      $('#toggleHist').val('Collapse History')
    } else {
      $('#toggleHist').val('Player One Game History')
    }
  })
}

module.exports = {
  toggleGameHistory
}
