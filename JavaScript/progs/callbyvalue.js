let myObj = { a: 1 };
const myFunc = obj => {
  obj.a++;
  return obj;
}
let otherObj = myFunc(myObj);
console.log(myObj)// { a: 2 }
console.log(otherObj)// { a: 2 }
console.log(myObj===otherObj) // true

myObj = { a: 4, b: 0 };
console.log(myObj)// { a: 4, b: 0 }
console.log(otherObj)// { a: 2 }
console.log(myObj===otherObj) // false
