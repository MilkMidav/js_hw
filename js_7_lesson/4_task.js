/** Given an array of people, convert each object into an HTML element with the following structure:
<div>
  <h2>%NAME%</h2>
  <p>Country: %COUNTRY%</p>
  <p>Age: %AGE%</p>
</div>*/
'use strict'

function toHTML(person) {
  return `<div> 
        <h2>${person.name}</h2> 
        <p>${person.country}</p>
        <p>${person.age}</p>
      <div>`;
}

function peopleToHTML(array) {
  return array.map(toHTML);
}

console.log(peopleToHTML([
  {
    id: 1,
    name: 'Kate',
    age: 22,
    country: 'USA',
  },
  {
    id: 2,
    name: 'Bruce',
    age: 9,
    country: 'Denmark',
  },
  {
    id: 3,
    name: 'Ian',
    age: 16,
    country: 'Croatia',
  },
  {
    id: 4,
    name: 'John',
    age: 48,
    country: 'Portugal',
  },
  {
    id: 5,
    name: 'Stephen',
    age: 31,
    country: 'United Kingdom'
  }
]));