//for loop
let i = 5;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// for in loop
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x];
  console.log(text);
}
//for of loop
let language = "JavaScript";

let text1 = "";
for (let x of language) {
text1 += x;
console.log(text1);
}