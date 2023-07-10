const http = require('http');
const port = 8000;

const newBook =   {
  author: 'God',
  title: 'Holy Bible',
  releaseDate: '15th century B.C.',
  path: 'img/book_holy_bible.jpg',
}

function sendRequest(book, port, host = 'localhost') {
  const requestData = JSON.stringify(book);

  const options = {
    hostname: host,
    port: port,
    path: '/newBook',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': requestData.length,
    },
  };

  const req = http.request(options, (res) => {
    res.on('data', () => {
      if (res.statusCode === 201) {
        console.log('Data submitted successfully!');
      } else {
        console.error('Error submitting data');
      }
    });
  })

  req.on('error', (error) => {
    console.error('Error sending request', error);
  });

  req.write(requestData);
  req.end();
}

sendRequest(newBook, port);