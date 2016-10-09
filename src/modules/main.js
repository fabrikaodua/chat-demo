'use strict';

var chatChannels = require('./data/channels.js')
var pubnub = require('./pubnub.js')
var sendController = require('./send.controller.js')
var messageController = require('./message.controller.js')

pubnub.connect(chatChannels)
pubnub.onRecieved('general', function(notification){
	console.log(notification)
})