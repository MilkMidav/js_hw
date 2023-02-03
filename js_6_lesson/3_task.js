/** Given an array of different people and a company name, 
 * return a new array of people who work in the given company: */
'use strict'

const people = [
  {
    id: 1,
    name: 'John',
    job: {
      title: 'Software Engineer',
      company: 'Microsoft',
    },
  },
  {
    id: 2,
    name: 'Andrew',
    job: {
      title: 'Software Engineer',
      company: 'Google',
    },
  },
  {
    id: 3,
    name: 'John',
    job: null,
  },
  {
    id: 4,
    name: 'Kate',
    job: {
      title: 'Marketing Assistant',
      company: 'Microsoft',
    },
    friends: [
      {
        id: 5,
        name: 'Eric',
        job: {
          title: 'QA Engineer',
          company: 'Amazon',
        },
      },
      {
        id: 6,
        name: 'Stacy',
        job: {
          title: 'Business Development Manager',
          company: 'Microsoft',
        },
      },
    ]
  },
];

function findColleagues(array, word, result = []) {
  for (const item of array) {
    if (item.job?.company === word) {
      result.push(item);
    }
    
    if (item.friends) {
      findColleagues(item.friends, word, result);
    }
  }

  return result;
};

console.log(findColleagues(people, 'Microsoft'));


