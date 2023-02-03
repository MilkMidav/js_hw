/**Given an array of songs, group them by album title 
 * (return an object where keys are album titles and values are arrays of songs)
!note that some songs might be singles */
'use strict'

const songs = [
  {
    id: 1,
    title: 'Know Yourself',
    artist: 'Drake',
    album: {
      id: 1,
      title: 'IYRTITL',
    },
  },
  {
    id: 2,
    title: 'One Dance',
    artist: 'Drake',
    album: {
      id: 2,
      title: 'Views',
    },
  },
  {
    id: 3,
    title: 'Trophies',
    artist: 'Drake',
    album: null,
  },
  {
    id: 4,
    title: 'Rich Flex',
    artist: 'Drake',
    album: {
      id: 3,
      title: 'Her Loss',
    },
  },
  {
    id: 5,
    title: 'U With Me?',
    artist: 'Drake',
    album: {
      id: 2,
      title: 'Views',
    },
  },
  {
    id: 6,
    title: 'Company',
    artist: 'Drake',
    album: {
      id: 1,
      title: 'IYRTITL',
    }
  }
];
function groupByAlbum(array) {
  const result = {};

  for (const song of array) {
    if (song.album?.title) {
      result[song.album.title] = [];
    }
  }

  for (const song of array) {
    if (song.album?.title) {
      result[song.album.title].push(song);
    }
  }

  return result;
}

/**SECOND SOLUTION */

function groupByAlbum2(array) {
  const result = {};

  for (const song of array) {
    if (song.album?.title === undefined) {
      continue;
    }

    if (song.album.title in result === false) {
      result[song.album.title] = [];
    }

    if (song.album?.title) {
      result[song.album.title].push(song);
    }
  }

  return result;
}

console.log(groupByAlbum(songs));
console.log(groupByAlbum2(songs));