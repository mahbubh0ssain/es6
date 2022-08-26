let city = "Dhaka";
const country = "Bangladesh";

const continent = ` The city name is ${city} and country name is ${country}.`;
// console.log(continent);

const obj = { name: "Mahbub", love: "Rimi" };
const life = `${obj.name} loves ${obj.love}.`;
// console.log(life);

arrowFunc1 = (num) => num / 5;
// console.log(arrowFunc(90));

arrowFunc2 = (num1, num2) => {
  const result = (num1 + 2) * (num2 + 2);
  return result;
};
// console.log(arrowFunc2(2, 3));

arrowFunc3 = (num1, num2, num3) => num1 * num2 * num3;
// console.log(arrowFunc3(2, 3, 4));

// kono function likhe felake bole function declaration r function k variable a raha k k bole function er expresion

// var
// var diye variable declare korle reassign redeclare kora jay
// let
// let diye declare korle reassign kora jay but redeclare kora jay n a
// const
// const diye declare korle reasiign and redeclare konontai kora jay na .
// let const scope a kja kore .

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = myArr.map((number) => number * 5);

// console.log(result);

const newArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const oddFromArr = newArr.filter((number) => number % 2);
// console.log(oddFromArr);

const productArr = [
  { name: "camera", price: 54000 },
  { name: "laptop", price: 85000 },
  { name: "drone", price: 50000 },
  { name: "modile", price: 5000 },
  { name: "gimble", price: 15000 },
];

const desired = productArr.find((product) => product.price === 5000);
// console.log(desired);

// map() => do something over an array and return a new array
// foreach() => do something over an array but dosen't return an array
// filter() => conditionally do something over an array and return all matched element in a new array
// find() =>  conditionally do something over an array and return all matched first element

const product = { name: "Gimble", price: 15000 };

const { name, price } = product;
// console.log(name, price);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first, second, third] = numbers;
const [, , third1] = numbers;
// console.log(third1);
// console.log(third);

arrowFunction = (num1, num2, num3 = 7) => num1 + num2 + num3;
// console.log(arrowFunction(2, 3));

const nestedObj = {
  name: "Mahbub",
  age: 22,
  address: { village: "randhunibari", thana: "belkuchi", jela: "sirajgaj" },
  study: {
    university: "JU",
    subject: "Philosophy",
    school: [
      "faltema rahman",
      "adorsho school",
      "railway colony",
      "soydabad high school",
      "alim Uddin high school",
    ],
  },
};
console.log(nestedObj?.study?.school[2]);
