const net = require('net');

function startChat() {
  const hostname = 'localhost';
  const [username, port, receiverPort] = process.argv.slice(2);

  const server = net.createServer((socket) => {
    socket.on('data', data => {
      const { message, sender, handshake } = JSON.parse(data.toString());

      if (handshake && !message) {
        console.log(`${sender} has entered the chat room`);
      } else {
        console.log(`${sender}: ${message}`);
      }
    });
  });
  
  server.listen(port, () => {
    console.log(`Accepting connecting on ${hostname}:${port}`);
  });
  
  function connectToServer() {
    const socket = new net.Socket();
    
    socket.connect(receiverPort, hostname, () => {
      console.log(`Connected to a friend at ${hostname}:${receiverPort}`);
      
      const messageConnections = {
        sender: username,
        handshake: true
      };

      socket.write(JSON.stringify(messageConnections));

      process.stdin.on('data', data => {
        const message = {
          message: data.toString(),
          sender: username
        };
        
        socket.write(JSON.stringify(message));
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
}

startChat();