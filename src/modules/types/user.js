'use strict'

function User(options){
	options = options || {}
	this.imageUrl = options.imageUrl
	this.name = options.name
	this.nickName = options.nickName
}

module.exports = User
