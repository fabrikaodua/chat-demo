function Message(content){
	this.content = content
	this.timeStamp = new Date().getTime()
	this.imageUrl = 'http://avatar.jpg'
	this.name = '? ?'
	this.nickName = '?'
}

module.exports = Message