const http = require("http");
const fs = require('fs').promises;
const path = require('path');

const host = 'localhost';
const port = 8000;

async function createBooksPage() {
  try {
    const booksData = await fs.readFile(`${__dirname}/booksData.json`, 'utf8');
    const contents = await fs.readFile(`${__dirname}/index.html`, 'utf8');

    const booksHtml = JSON.parse(booksData).map((book) => `
      <div class="container__card">
        <img class="card__img" src="${book.path}" alt="book_image">
        <p class="card__title">${book.title}</p>
        <p class="card__author">${book.author}</p>
        <p class="card__release_date">${book.releaseDate}</p>
      </div>
    `).join('');

    const result = contents.replace('{{BOOKS_DATA}}', booksHtml);

    return result;
  } catch (error) {
    console.log(`An error occurred while creating the books page: ${error}`);
    throw error;
  }
}

function handleCreateBookRequest(req, res) {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const booksData = await fs.readFile(`${__dirname}/booksData.json`, 'utf8');
      const data =  JSON.parse(booksData);

      const receivedData = JSON.parse(body);
      receivedData.id = data.length + 1;
      data.push(receivedData);

      const updatedData = JSON.stringify(data);
      await fs.writeFile(`${__dirname}/booksData.json`, updatedData, 'utf8');

      res.setHeader('Content-Type', 'text/plain');
      res.writeHead(201);
      res.end(JSON.stringify(receivedData));
    } catch (error) {
      console.log('Error updating JSON data', error);

      res.setHeader('Content-Type', 'text/plain');
      res.writeHead(400);
      res.end('Error submitting data.');
    }
  });

  return;
}

async function requestListener(req, res) {
  switch (req.url) {
    case "/books":
      if (req.method === 'POST') {
        handleCreateBookRequest(req, res);
      } else {
        try {
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(await createBooksPage())
        } catch (error) {
          console.log(`Error generating books page: ${error}`);
          res.writeHead(500);
          res.end();
        }
      }
      break;
    case '/styles.css':
      try {
        const contents = await fs.readFile(`${__dirname}/styles.css`);

        res.setHeader("Content-Type", "text/css");
        res.writeHead(200);
        res.end(contents);
      } catch (error) {
        console.log(`Could not read style.css file: ${error}`);

        res.writeHead(404);
        res.end()
      }
      break;
    default:
      if (req.url.startsWith('/img/')) {
        const imagePath = path.join(__dirname, req.url);
        try {
          const imageData = await fs.readFile(imagePath);
          const extension = path.extname(imagePath).slice(1);
          const contentType = `image/${extension}`;

          res.setHeader("Content-Type", contentType);
          res.writeHead(200);
          res.end(imageData);
        } catch (error) {
          console.log(`Could not read image file: ${error}`);

          res.writeHead(404);
          res.end();
        }
      } else {
        res.writeHead(404);
        res.end();
      }
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
