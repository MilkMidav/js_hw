const http = require("http");
const fs = require('fs').promises;
const path = require('path');

const host = 'localhost';
const port = 8000;

const html = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <title>book</title>
</head>
<body>
  <div class="main_container">
    <div class="grid_container" id="books"></div>
  </div>
</body>
</html>`

const booksData = [
  {
    id: 1,
    author: 'Adam Hochschild',
    title: 'American Midnight',
    releaseDate: 'October 4, 2022',
    path: 'img/book_american_midnight_hochschild.jpg',
  },
  {
    id: 2,
    author: 'Erik Larson',
    title: 'The Devil in the White city',
    releaseDate: 'February 10, 2004',
    path: 'img/book_devil_in_the_white_city_larson.jpg',
  },
  {
    id: 3,
    author: 'Steven Gwynne',
    title: 'Empire of the summer moon',
    releaseDate: 'July 7, 2011',
    path: 'img/book_empire_of_the_summer_moon_gwynne.jpg',
  },
  {
    id: 4,
    author: 'Stacy Schiff',
    title: 'The Revolutionary: Samuel Adams',
    releaseDate: 'October 25, 2022',
    path: 'img/book_the_revolutionary_samuel_adams_schiff.jpg',
  },
  {
    id: 5,
    author: 'William L. Shirer',
    title: 'The Rise and Fall of the Third Reich',
    releaseDate: 'December 1, 1991',
    path: 'img/book_the_rise_and_fall_of_the_third_reich_shirer.jpg',
  },
  {
    id: 6,
    author: 'Johnny Joey Jones',
    title: 'Unbroken Bonds of Battle: A Modern Warriors Book of Heroism, Patriotism, and Friendship',
    releaseDate: 'June 27, 2023',
    path: 'img/book_unbroken_bonds_of_battle.jpg',
  },
  {
    id: 7,
    author: 'Kate Storey',
    title: 'White House by the Sea: A Century of the Kennedys at Hyannis Port',
    releaseDate: 'October 22, 2020',
    path: 'img/book_white_house_by_the_sea_storey.jpg',
  },
  {
    id: 8,
    author: 'David Grann',
    title: 'Killers of the Flower Moon: The Osage Murders and the Birth of the FBI',
    releaseDate: 'April 18, 2017',
    path: 'img/book_killers_of_the_flower_moon_grann.jpg',
  },
  {
    id: 9,
    author: "Bill O'Reilly's",
    title: 'Killing the Witches: The Horror of Salem, Massachusetts',
    releaseDate: 'July 7, 2011',
    path: 'img/book_killing_the_witches_oreilly.jpg',
  },
  {
    id: 10,
    author: 'Lucas Miles',
    title: 'Woke Jesus: The False Messiah Destroying Christianity',
    releaseDate: 'June 6, 2023',
    path: 'img/book_woke_jesus_miles.jpg',
  },
];

let cssFile;

function addBooksToHTML(booksData, htmlString) {
  const containerStartTag = '<div class="container__card">';
  const containerEndTag = '</div>';

  let result = htmlString;
  let booksHtml = '';

  booksData.forEach((book) => {
    booksHtml += `
      ${containerStartTag}
        <img class="card__img" src="${book.path}" alt="book_image">
        <p class="card__title">${book.title}</p>
        <p class="card__author">${book.author}</p>
        <p class="card__release_date">${book.releaseDate}</p>
      ${containerEndTag}
    `;
  });

  result = result.replace('<div class="grid_container" id="books"></div>', `<div class="grid_container" id="books">${booksHtml}</div>`);

  return result;
}

let updatedHtmlString = addBooksToHTML(booksData, html);

const requestListener = function (req, res) {
  switch (req.url) {
    case "/newBook":
      if (req.method = 'POST') {
        let body = '';

        req.on('data', (chunk) => {
          body += chunk.toString();
        });

        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            data.id = booksData.length + 1;
            booksData.push(data);

            updatedHtmlString = addBooksToHTML(booksData, html);
            
            res.setHeader('Content-Type', 'text/plain');
            res.writeHead(201);
            res.end('Data submitted successfully!');
          } catch (error) {
            console.log('Error parsing JSON data', error);

            res.setHeader('Content-Type', 'text/plain');
            res.writeHead(400);
            res.end('Error submitting data. Invalid JSON format.');
          }
        })
      }
      break;
    case "/books":
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(updatedHtmlString);
      break;
    case '/styles.css':
      res.setHeader("Content-Type", "text/css");
      res.writeHead(200);
      res.end(cssFile);
      break;
    default:
      if (req.url.startsWith('/img/')) {
        const imagePath = path.join(__dirname, req.url);

        fs.readFile(imagePath)
          .then(imageData => {
            const extension = path.extname(imagePath).slice(1);
            const contentType = `image/${extension}`;

            res.setHeader("Content-Type", contentType);
            res.writeHead(200);
            res.end(imageData);
          })
          .catch(err => {
            console.log(`Could not read image file: ${err}`);

            res.writeHead(404);
            res.end();
          });
      } else {
        res.writeHead(404);
        res.end();
      }
  }
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/styles.css")
  .then(contents => {
    cssFile = contents;
    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  })
  .catch(err => {
    console.log(`Could not read style.css file: ${err}`);
    process.exit(1);
  });
