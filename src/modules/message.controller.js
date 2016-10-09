'use strict'

var $ = require('jquery')
var pubnub = require('./pubnub.js')

var chatElem = $('.chat')

function addMesasge(message) {
	var content = message.content
	var userName = message.user.name
	var time = new Date(message.timeStamp)
	var html = '<div class="message">'
		+ '<h5 class="user-name">'
			+ userName
			+ '<span class="time">' + time + '</span>'
		+ '</h5>'
		+ '<p class="content"></p>'
	+ '</div>'
	var messageElem = $(html)
	var contentElem = messageElem.find('.content')

	contentElem.text(content)
	chatElem.append(messageElem)
}

pubnub.onRecieved('general', addMesasge)
