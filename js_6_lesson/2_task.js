/** Given an array of items, find the most expensive one: */
'use strict'

const applePrice =  [
  {
    id: 1,
    title: 'iPhone 14',
    price: 1500,
  },
  {
    id: 2,
    title: 'AirPods Pro',
    price: 270,
  },
  {
    id: 3,
    title: 'iPad Mini',
    price: 550,
  },
  {
    id: 4,
    title: 'MacBook Pro',
    price: 2500,
  },
  {
    id: 5,
    title: 'Apple Watch Ultra',
    price: 850,
  },
  {
    id: 6,
    title: 'Mac Mini',
    price: 950,
  },
];

function findMostExpensive(array) {
  let biggest = array[0].price;
  let result = 0;

  for (const object of array) {
    if (biggest < object.price) {
      biggest = object.price;
      result = object;
    }
  }

  return result;
}

console.log(findMostExpensive(applePrice));