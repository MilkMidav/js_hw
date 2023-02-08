/**Given an array of people, return a string containing all people's names separated by commas: */
'use strict'

// function getNames(array) {
//   return array.reduce(function (accumulator, person) {
//     return accumulator + (person.name + ', ');
//   }, '');
// }


function getNames(array) {
  return array.reduce(function (accumulator, person) {
    return accumulator === '' ? person.name : `${accumulator}, ${person.name}`
  }, '');
}

console.log(getNames([
  {
    id: 1,
    name: 'Kate',
    age: 22,
  },
  {
    id: 2,
    name: 'Bruce',
    age: 9,
  },
  {
    id: 3,
    name: 'Ian',
    age: 16,
  },
  {
    id: 4,
    name: 'John',
    age: 48,
  },
  {
    id: 5,
    name: 'Stephen',
    age: 31
  }
]));