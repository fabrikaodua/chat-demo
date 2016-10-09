'use strict';

var $ = require('jquery'),
	lodash = require('lodash');

var pubnub = require('./pubnub.js')

window.send = pubnub.sendMessage

pubnub.onMessageRecieved(function(message){
	console.log(message)
})