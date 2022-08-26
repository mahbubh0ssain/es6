// map all time do a thing on an array and return a new array.
// const num = [23, 25, 65, 67, 84];
// const double = num.map((x) => x * 2);
// const doublse = num.map((x) => x / 2);
// console.log(double);
// console.log(doublse);

// const products = [
//   { id: 1, name: "laptop", price: 12000 },
//   { id: 2, name: "mobile", price: 29000 },
//   { id: 3, name: "ear buds", price: 24000 },
//   { id: 4, name: "iwatch", price: 2000 },
// ];
// const desiredProduct = products.map((items) => items.name);
// console.log(desiredProduct);
 
 // the same as map() but dosent return anything
const products = [
  { id: 1, name: "laptop", price: 12000 },
  { id: 2, name: "mobile", price: 29000 },
  { id: 3, name: "ear buds", price: 24000 },
  { id: 4, name: "iwatch", price: 2000 },
];
const desiredProduct = products.forEach((items) => console.log(items.name));
