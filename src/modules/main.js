'use strict';


var lodash = require('lodash')
var chatChannels = require('./data/channels.js')
var pubnub = require('./pubnub.js')
var sendController = require('./send.controller.js')
var messageController = require('./message.controller.js')


window.send = pubnub.sendMessage

pubnub.connect(chatChannels)
// pubnub.sendMessage('ch1', 'message')
// pubnub.sendMessage('ch2', 'message')
pubnub.onMessageRecieved('general', function(message){
	console.log(message)
})