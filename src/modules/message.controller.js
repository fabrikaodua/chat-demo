'use strict'

var $ = require('jquery')
var pubnub = require('./pubnub.js')

var chatElem = $('.chat')

function addMesasge(message) {
	var content = message.content
	var userName = message.name
	var html = '<div class="message">'
		+ '<h5 class="user-name">' + userName + '</h5>'
		+ '<p class="content">' + content + '</p>'
	+ '</div>'
	var messageElem = $(html)
	chatElem.append(messageElem)
}

pubnub.onRecieved('general', addMesasge)
