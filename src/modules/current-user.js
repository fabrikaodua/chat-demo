'use strict'

var User = require('./types/user.js')

var currentUserName = prompt('Set your name')

module.exports =  new User({
	name: currentUserName
})

