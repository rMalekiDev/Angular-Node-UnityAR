const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

const port = 8080;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${socket.id.substr(0, 2)}: ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});

httpServer.listen(port, () => console.log(`listening on port ${port}`));




// const WebSocket = require('ws')
// const wss = new WebSocket.Server({ port: 8080 },()=>{
//     console.log('server started')
// })
// wss.on('connection', function connection(ws) {
//    ws.on('message', (data) => {
//       console.log('data received \n %o',data)
//       ws.send(data);
//    })
// })
// wss.on('listening',()=>{
//    console.log('listening on 8080')
// })