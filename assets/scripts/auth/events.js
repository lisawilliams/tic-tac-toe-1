'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// auth events

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}





// Start with empty board of 9 cells
// const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

// check whose turn it is

// if it's x's turn place value into cell

// if it's not x's turn place the value o into cell

// const turn = 'x'

const onClick = function () {
// if you click any cell fill an x
// on the click of any divs with ids that begin
// with cell want to change text

  //  if (turn === turn) {
  //   // if it's x's turn put value x in cell
  //   $("div[id^='cell']").on('click', function (event) {
  //     // target element that we click on and change text
  //      $(this).text('x')
  //      console.log('It\'s x\'s turn')
  //   })
  //
  // } else {
  //   // if it's o's turn put value o in cell
  //   $("div[id^='cell']").on('click', function (event) {
  //     // target element that we click on and change text
  //      $(this).text('o')
  //      console.log('It\'s o\'s turn')
  //   })
  //
  // }

    $("div[id^='cell']").on('click', function (event) {
    console.log(this)
    // target element that we click on and change text
     $(this).text('X')
  })
}

onClick()

// if it's o's turn fill cell with an o,
// else stop x from filling a square and fill square with o

// if one player gets 3 in a row, show player wins in ui.js
// and end play so no one can play anymore squares





module.exports = {
  onClick,
  onSignUp
}
