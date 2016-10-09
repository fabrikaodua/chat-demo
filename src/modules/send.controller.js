'use strict'

var $ = require('jquery')
var pubnub = require('./pubnub.js')

var sendForm = $('.form-send')
var messageField = $('.field-message')

messageField.on('keydown', function(event){
	var message = this.value
	//handle press on "Enter"
	if (event.keyCode === 13) {
		pubnub.sendMessage('general', message)
	}
})



console.log(sendForm)