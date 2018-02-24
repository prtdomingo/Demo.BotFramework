var builder = require('botbuilder');
var restify = require('restify');

var connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
});

var server = restify.createServer();
server.listen(3978, function() {
    console.log(`${server.name} is listening to ${server.url}`);
});

server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector);

bot.dialog('/', function(session){
    session.send('Do you know da wae');
});