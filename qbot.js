const Discord = require('discord.js');
const Bot = require('./config/bot.settings.js');

const client = new Discord.Client();
const config = new Bot(client);

const HelpCommand = require('./commands/help.command.js');

/**
 * MONITOR CHANNEL
 */
//ON MESSAGE RECEIVED
client.on('message', message => {
  
	// IF AUTHOR IS BOT, IGNORE MESSAGE
	if( message.author.bot ) { return; }

	try {
		
		const CommandRegistry = require("./commands/command.registry.js");
		let registry = new CommandRegistry(config, message);
		
		//GLOBAL COMMANDS
		registry.registerCommand('?', () => { new HelpCommand(config, message).process() });
		
	} catch(e) {
		console.log(e);
	} 	
});


/** 
 * MONITOR CLIENT CONNECTION 
 */

//ON READY
client.on('ready', () => {
	
	console.info(`Connected as: ${client.user.username}`);
	
}); 

//ON DISCONNECT
client.on('disconnect', (event) => {
	
	console.error(`Client disconnected`,event);
	
	//Try login after 10 seconds
	setTimeout( function() { 
		console.warn(`Client trying to connect`);
		client.login(config.settings.botToken);
	}, 5000);
		
});

//ON RECONNECTING
client.on('reconnecting', () => {

	console.warn(`Client reconnecting`);	

});

//ON RESUME
client.on('resumed', (replayed) => {

	console.info(`Client resumed - Replayed: ${replayed}`);

});

//ON ERROR
client.on('error', (error) => {

	console.error(`Client connection error: ${error}`);

});

//ON WARNING
client.on('warn', (info) => {

	console.warn(`Client warning: ${info}`);

});

//LOGIN WITH TOKEN
client.login(config.settings.botToken);