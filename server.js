const expressjs = require('express');
const app = expressjs();
const http = require('http');
const { disconnect } = require('process');
const webServer = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(webServer);







app.get('/express-server', function(req, res){
    res.end("This massage just for testing backend work or not...!")
})







// user connection alart
io.on('connection', function(socket){
    for(let i = 1; i < 500 ; i++){
        console.log('New user id is: '+i);
        socket.on('disconnect', function(){
            console.log('User is disconnected.');
        })
    }
})
// add port address
let port = 5000;
webServer.listen(port, function(){
    console.log('Server running address is: loaclhost:'+port)
})