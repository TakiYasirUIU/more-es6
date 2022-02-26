const numbers = [5, 13,7, 51, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers); 

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 3, color: 'white'}
]

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'blue');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);

// map gono hare kone ekta element re nia sei result take nia arrer vitor dibe.
// filter protek ta element er jonno condition dibo condition true hoile oi element gula array er vitor dibe kisu na paile [] dekhabe.
// find condition onujaye prothon element ta dibe ar na thakle undifined dekhabe.

