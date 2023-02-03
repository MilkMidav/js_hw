/**Given an object and an array of properties, 
 * return a new object that won't contain provided properties: */
'use strict'

const obj = {
  x: 1,
  y: 2,
  z: 3,
  a: 'test',
  b: true,
  v: [],
};

const arr = ['x', 'y', 'z'];

function hideProps(object, array) {
  for (const item of array) {
    if (item in obj) {
      delete object[item];
    }
  }

  return object;
}

/**SECOND SOLUTION */

function hideProps2(object, arr) {
  const result = {};

  for (const key in object) {
    if (!arr.includes(key)) {
      result[key] = object[key];
    }
  }

  return result;
}
console.log(hideProps(obj, arr));
console.log(hideProps2(obj, arr))