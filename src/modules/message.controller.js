'use strict'

var $ = require('jquery')
var pubnub = require('./pubnub.js')

var chatElem = $('.chat')

function addMesasge(message) {
	var messageElem = $('<div>')
	messageElem.addClass('message')
	messageElem.html(message)
	chatElem.append(messageElem)
}

function handleMessageRecieved(message){

}

pubnub.onMessageRecieved('general', addMesasge)