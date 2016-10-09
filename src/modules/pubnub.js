'use strict'

var PubNub = require('pubnub');
var config = require('config.json')
var Message = require('./types/message.js')

if (!config.subscribeKey) {
	throw new Error('"subscribeKey" parameter required in config.json')
}

var pubnub = new PubNub({
    subscribeKey: config.subscribeKey,
    publishKey: config.publishKey
    //uuid: "myUniqueUUID"
})


// pubnub.addListener({
//     message: function(m) {
//         // handle message
//         var channelName = m.channel; // The channel for which the message belongs
//         var msg = m.message; // The Payload
//     },
//     presence: function(p) {
//         // handle presence
//         var action = p.action; // Can be join, leave, state-change or timeout
//         var channelName = p.channel; // The channel for which the message belongs
//         var occupancy = p.occupancy; // No. of users connected with the channel
//         var state = p.state; // User State
//         var channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
//         var publishTime = p.timestamp; // Publish timetoken
//         var timetoken = p.timetoken;  // Current timetoken
//         var uuid = p.uuid; // UUIDs of users who are connected with the channel
//     },
//     status: function(s) {
//         // handle status
//     }
// })


module.exports = {
	connect: function(channels){
		pubnub.subscribe({
			channels: channels,
			withPresence: true // also subscribe to presence instances.
		})
	},
	sendMessage: function(channel, content){
		var message = new Message(content)
		pubnub.publish(
			{
				message: message,
				channel: channel,
				storeInHistory: true //override default storage options
			},
			function (status, response) {
				// handle status, response
			}
		);
	},
	onRecieved: function(channel, callback){
		pubnub.addListener({
			message: function(event) {
				var message = event.message;
				if (channel === event.channel) {
					callback(message)
				}
			}
		})
	}
}
