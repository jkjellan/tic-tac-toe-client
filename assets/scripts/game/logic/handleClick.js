'use strict'

const handleClick = function () {
  $('.square').on('click', function (e) {
    gb[+$(this).attr('id')] = 'x'
  })

  return gb
}

module.exports = {
  handleClick
}
