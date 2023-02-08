/**Given an array of items, calculate the total price of all items: */
'use strict'

function getTotal(array) {
  const total = array.reduce(function(accumulator, array) {
    return accumulator + array.price;
  }, 0);

  return total;
}

console.log(getTotal([
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
]));