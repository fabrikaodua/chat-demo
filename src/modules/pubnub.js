'use strict'

var PubNub = require('pubnub');

var pubnub = new PubNub({
    subscribeKey: "sub-c-6465c2be-8dfd-11e6-a68c-0619f8945a4f",
    publishKey: "pub-c-be8b919e-2818-4fcb-a239-ba1cc61980d5",
    //uuid: "myUniqueUUID"
})

var CHANNEL = 'chat'

pubnub.subscribe({
    channels: [CHANNEL],
    withPresence: true // also subscribe to presence instances.
})

pubnub.addListener({
    message: function(m) {
        // handle message
        var channelName = m.channel; // The channel for which the message belongs
        var msg = m.message; // The Payload
    },
    presence: function(p) {
        // handle presence
        var action = p.action; // Can be join, leave, state-change or timeout
        var channelName = p.channel; // The channel for which the message belongs
        var occupancy = p.occupancy; // No. of users connected with the channel
        var state = p.state; // User State
        var channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
        var publishTime = p.timestamp; // Publish timetoken
        var timetoken = p.timetoken;  // Current timetoken
        var uuid = p.uuid; // UUIDs of users who are connected with the channel
    },
    status: function(s) {
        // handle status
    }
})


module.exports = {
	sendMessage: function(message){
		pubnub.publish(
			{
				message: message,
				channel: CHANNEL,
				storeInHistory: true //override default storage options
			},
			function (status, response) {
				// handle status, response
			}
		);
	},
	onMessageRecieved: function(callback){
		pubnub.addListener({
			message: function(event) {
				// handle message
				var channelName = event.channel; // The channel for which the message belongs
				var message = event.message; // The Payload

				callback(message)
			}
		})
	}
}