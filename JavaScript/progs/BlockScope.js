console.log("Block Scope using let and const");
console.log(
  "Restricts the variables that is declared inside specific block, from access outside the block"
);
{
  let p = 110;
  const q = 111;
}
//console.log(p); // Uncaught ReferenceError: p is not defined
//console.log(q); // Uncaught ReferenceError: q is not defined

//defined array
var varfunc = [];
for (var i = 0; i < 5; i++) {
  varfunc.push(function () {
    console.log(i);
  });
}
varfunc[3](); //5

var letfunc = [];
for (let i = 0; i < 5; i++) {
  letfunc.push(function () {
    console.log(i);
  });
}
letfunc[3](); //3

var letfunc1 = [];
for (var i = 0; i < 5; i++) {
  let j = i;
  letfunc1.push(function () {
    console.log(j);
  });
}
letfunc1[3](); //3
