'use strict'

var $ = require('jquery')
var pubnub = require('./pubnub.js')

var sendForm = $('.form-send')
var messageField = $('.field-message')

function handleInput(event){
	//handle press on "Enter"
	if (event.keyCode === 13) {
		sendForm.submit()
	}
}

function handleSend(event){
	event.preventDefault()
	var message = messageField.val()
	pubnub.sendMessage('general', message)
	messageField.val('')
}

messageField.on('keydown', handleInput)
sendForm.on('submit', handleSend)

