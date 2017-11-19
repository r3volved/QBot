let MessageHandler 	= require('../utilities/message-handler.js')

class Command {
	
    constructor(config, message) {
    
    	this.config = config;
        this.message = message;
        this.messageHandler = new MessageHandler(config, message);
        
    }
    
}

module.exports = Command;