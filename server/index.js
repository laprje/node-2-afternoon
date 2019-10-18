const express = require('express');
const app = express();
const PORT_NUMBER = 3001;
const controller = require('./controllers/message_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', controller.newMessage);
app.get('/api/messages', controller.getMessages);
app.put('/api/messages/:id', controller.update);
app.delete('/api/messages/:id', controller.delete);

app.listen(PORT_NUMBER, ()=>console.log(`Listening on ${PORT_NUMBER}`))
