/**Given an array people, get rid of all adults (>= 18 yrs old): */
'use strict'

function isMinor(person) {
  return person.age < 18;
}

function removeAdults(array) {
  const minor = array.filter(isMinor);

  return minor;
}

// OR

function removeAdults2(array) {
  const minor = array.filter(function (person) {
    return person.age < 18;
  });

  return minor;
}

console.log(removeAdults([
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