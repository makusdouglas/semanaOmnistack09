const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://user:user@meuserver-6yjam.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connectedUsers = {};

io.on('connection', socket => {
   
    const {user_id} = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next)=>{
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})
//PAREI EM 8 MIN DO ULTIMO VIDEO  


//GET POST PUT DELETE

// req.query = acessa as querys params
// req.params = acessar route params (para edição e delete)
// req.body acessar o corpo da requisição (tanto apra edição quanto para registro)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);

server.listen(3333);//define a porta

//iniciar o nodemon: "yarn dev"
// PAREI NO VIDEO 2. no tempo: 1:11:00


