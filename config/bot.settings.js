class Bot {
	
    constructor(client) {

    	this.client = client;

    	const fs = require("fs");
    	const content = fs.readFileSync("./config/settings.json");
    	
    	this.settings = JSON.parse(content);

    }
    
}

module.exports = Bot;