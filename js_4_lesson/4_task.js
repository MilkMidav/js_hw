/** Write a function that accepts a password and returns boolean whether the password is valid. The password is valid when:
it's between 8 and 30 characters long
contains at least one digit
contains at least one uppercase letter
doesn't contain any of these characters: % ? ! * # */
'use strict'

function isPasswordContainNumber(string) {
  for (let i = 0; i < string.length; i++) {
    const charCode = string[i].charCodeAt();
    if (charCode >= 48 && charCode <= 57) {
      return true;
    }
  }
  return false
}

function checkBannedSymbol(string) {
  const includes = string.includes('%') || string.includes('?') || string.includes('!') || string.includes('*') || string.includes('#') || string.includes('/');

  if (!includes) {
    return true
  } 
  return false
}

function isPasswordLengthValid(string) {
  if (string.length >= 8 && string.length <= 30) {
    return true
  }
  return false
}

function isPasswordContainUpperCase(string) {
  if (string.toLowerCase() !== string) {
    return true;
  }
  return false;
}


function isPasswordValid(string) {
  if (isPasswordLengthValid(string)) {

    if (isPasswordContainNumber(string)) {
  
      if (checkBannedSymbol(string)) {
        
        if (isPasswordContainUpperCase(string)) {
          return true;
        }
        
      } 
      
    } 
    
  } 
  return false
}

const password = 'pass8swWssord';

console.log(isPasswordValid(password))





