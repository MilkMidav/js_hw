/**  Write a function that accepts an array of emails and a domain name. 
 * Return a new array containing emails with the given domain name */
'use strict'

function getEmailDomain(array, domain) {
  const endWith = '@' + domain;

  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].endsWith(endWith)) {
      result.push(array[i])
    }
  }
  
  return result.length === 0 ? console.log("domain is not found") : result
}

const arr = ['steve@yahoo.com', 'jack@google.com', 'kate@mailbox.com', 'luke@google.com'];

const result = getEmailDomain(arr, 'yahoo.com')

console.log(result)