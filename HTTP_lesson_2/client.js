const host = 'localhost';
const port = 8000;

const newBook =   {
  author: 'God',
  title: 'Holy Bible',
  releaseDate: '15th century B.C.',
  path: 'img/book_holy_bible.jpg',
}

async function sendRequest(book) {
  try {
    const response = await fetch(`http://${host}:${port}/newBook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });

    if (response.status === 200) {
      console.log('Data submitted successfully!');
    } else {
      console.error('Error submitting data');
    }
  } catch (error) {
    console.error('Error sending request', error);
  }
}

sendRequest(newBook);