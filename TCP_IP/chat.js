const net = require('net');

const hostname = 'localhost';
const username = process.argv[2];
const port = process.argv[3];
const receiverPort = process.argv[4];

const server = net.createServer((socket) => {
  socket.on('data', data => {
    console.log(`${data.toString()}`);
  });
});

server.listen(port, () => {
  console.log(`Accepting connecting on localhost:${port}`);
});

function connectToServer() {
  const socket = new net.Socket();
  
  socket.connect(receiverPort, hostname, () => {
    console.log(`Connected to a friend at ${hostname}:${receiverPort}`);
    
    socket.write(`${username} has entered the chat room`);

    process.stdin.on('data', data => {
      const message = `${username}: ${data.toString()}`;
      socket.write(message);
    });
  });

  socket.on('end', () => {
    console.log('Friend left the chat room');
    setTimeout(connectToServer, 5000);
  });
  
  socket.on('error', () => {
    console.log('Connection to a friend was refused. Retrying in 5 second');
    setTimeout(connectToServer, 5000);
  });
  
  return;
}

connectToServer();