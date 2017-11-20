class CommandRegistry {

    constructor(config, message) {
        
    	this.config = config;
        this.message = message;
        this.commands = [];
    
    }

    registerCommand(commandText, callback) {
    	
    	try {
	    	//Allow admin to post anything
	    	if( this.message.member.roles.find("name", this.config.settings.adminRole) /*|| this.message.author.id === this.config.settings.master*/ ) { return; }			
	    		
	    	//Check user message
	        if (this.message.content) {
	        	
	            let splittingPattern = /([\w][\w\s\d\,\.\'\"\“\”]+)[\?]/gm;
	            let msgArray = this.message.content.match(splittingPattern);
	            
	            console.log( msgArray );
	            
	            if ( typeof msgArray === "undefined" || msgArray === null || msgArray.length === 0 ) {
	            	
	                let command = msgArray;
	                let noCommandsFound = false;
	
	                if (!noCommandsFound) {
	    
	                	this.commands.push(command);
	                    callback();
	                
	                } else {
	                
	                	if (this.commands.indexOf(command) < 0) {
	                        callback();
	                    }
	                
	                }
	
	            }
	        }

    	} catch(e) {
    		console.error(e);
    	}
    }

}

module.exports = CommandRegistry;