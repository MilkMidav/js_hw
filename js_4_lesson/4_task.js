/** Write a function that accepts a password and returns boolean whether the password is valid. The password is valid when:
it's between 8 and 30 characters long
contains at least one digit
contains at least one uppercase letter
doesn't contain any of these characters: % ? ! * # */
'use strict'

function containsNumber(string) {
  for (let i = 0; i < string.length; i++) {
    const charCode = string[i].charCodeAt();
    if (charCode >= 48 && charCode <= 57) {
      return true;
    }
  }
  return false
}

function containsBannedSymbol(string) {
  const includes = string.includes('%') || string.includes('?') || string.includes('!') || string.includes('*') || string.includes('#') || string.includes('/');

  return !includes;
}


function isPasswordValid(string) {
  if (string.length >= 8 && string.length <= 30) {

    if (!containsNumber(string)) {
      return false;
    } 

    if (!containsBannedSymbol(string)) {
      return false;    
    } 

    if (string.toLowerCase() !== string) {
      return true;
    }
    
  } 
  return false
}

const password = 'pass8swwsWsord';

console.log(isPasswordValid(password))





