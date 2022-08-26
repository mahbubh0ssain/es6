// reduce kaj kore onl on numbers array. eta array er sob gula element niye kono 1ta kaj kore pore amk 1ta number return korbe.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.reduce((param1,param2)=>{return param1=param2;},initialValue);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const addAll = arr.reduce((prevValue, curValue) => {
  // console.log(prevValue, curValue);
  return prevValue + curValue;
}, 0);
// console.log(addAll);

const student = {
  name: "Mahbub",
  age: 22,
  height: 5.2,
  hall: "ABH",
  university: "JU",
  subject: "Philosophy",
};

console.log(student["subject]); // bracket notation 
console.log(student.subject); // dot notation
