/**  Write a function that accepts an array of emails and a domain name. 
 * Return a new array containing emails with the given domain name */
'use strict'

function filterByDomain(array, domain) {
  const endWith = '@' + domain;

  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].endsWith(endWith)) {
      result.push(array[i])
    }
  }
  
  return result;
}

const arr = ['steve@yahoo.com', 'jack@google.com', 'kate@mailbox.com', 'luke@google.com'];

const result = filterByDomain(arr, 'yahoo.com')

console.log(result)