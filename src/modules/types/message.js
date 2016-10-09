'use strict'

var currentUser = require('../current-user.js')

function Message(content){
	this.content = content
	this.timeStamp = new Date().getTime()
	this.user = currentUser
}

module.exports = Message