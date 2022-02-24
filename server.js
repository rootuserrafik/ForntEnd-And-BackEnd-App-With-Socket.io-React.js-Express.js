const expressjs = require('express');
const app = expressjs();
const http = require('http');
const { disconnect } = require('process');
const webServer = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(webServer);
const path = require('path'); // npm install --save path for path management


// get all url form public side 
app.use(expressjs.static('public/build'));
app.get('*', function(req, res){
    // send all url in back-end server side
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'))
})

app.get('/express-server', function(req, res){
    res.end("This massage just for testing backend work or not...!")
})







// user connection alart
io.on('connection', function(socket){
    console.log('New user connected: ');
    socket.on('disconnect', function(){
        console.log('User is disconnected.');
    })
})
// add port address
let port = 5000;
webServer.listen(port, function(){
    console.log('Server running address is: loaclhost:'+port)
})