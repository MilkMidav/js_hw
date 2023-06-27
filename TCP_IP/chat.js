const net = require('net');

function startChat() {
  const hostname = 'localhost';
  const [username, port, receiverPort] = process.argv.slice(2);

  let connect = {
    state: null,
  }

  const server = net.createServer((socket) => {
    socket.on('data', data => {
      const { message, sender } = JSON.parse(data.toString());
      
      if (!connect.state) {
        console.log(`${message}`);
        connect.state = true;
      } else {
        console.log(`${sender}: ${message}`);
      }
    });
  });
  
  server.listen(port, () => {
    console.log(`Accepting connecting on ${hostname}:${port}`);
  });
  
  (function connectToServer() {
    const socket = new net.Socket();
    
    socket.connect(receiverPort, hostname, () => {
      console.log(`Connected to a friend at ${hostname}:${receiverPort}`);
      
      const messageConnections = {
        message: `${username} has entered the chat room`,
        sender: username
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
  })();
}

startChat();