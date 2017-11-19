let Command = require('./command')

class HelpCommand extends Command {
    
	constructor(config, message) {
		super(config, message);
	}
	
	process() {
		
		console.log(`[Deleted] : ${this.message.channel.name} : ${this.message.content}`);
		this.message.delete();
		this.reply();
		
	}
		
	
	reply() {

		try {
	    	const Discord = require('discord.js');
	    	const embed = new Discord.RichEmbed();
	    	
	    	embed.setTitle(`Your comment has been removed`);
	    	embed.setDescription(`The **${this.message.channel.name} channel** is for questions only.`);
	    	embed.addField(`Removed:`, `${this.message.content}`)
	    	embed.setFooter(this.config.settings.version);
	    	embed.setTimestamp();
	    		
	    	this.messageHandler.dmAuthor({embed}); 
		} catch(e) {
			console.error(e);
		}
    }
	
}

module.exports = HelpCommand;