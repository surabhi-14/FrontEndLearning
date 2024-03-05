// primitive data types
let a= null; // explicitly said it's null
let b= 345;
let c = true;
let d = BigInt("567");
let e = "surabhi";
let f = Symbol("it's a symbol");
let g = undefined;
let h; // need not to define explicitly
console.log(a,b,c,d,e,f,g);
console.log("a =", typeof a, a);
console.log("b =", typeof b, b);
console.log("c =", typeof c, c);
console.log("d =", typeof d, d);
console.log("e =", typeof e, e);
console.log("f =", typeof f, f);
console.log("g =", typeof g, g);
console.log("h =", typeof h, h);

// objects - non primitive datatypes // key value pairs

const item = {
    "name": "surabhi",
    "active": true
}
console.log("name = ", item["name"]);
console.log("active = ", item["active"]);
console.log(item);

//create a variable of type string and try to add a number to it
let str1 = "surabhi"; 
console.log("str1 = ", typeof str1 , str1); //surabhi
function f1 () {
    let str1 = 1;
    console.log("str1 = ", typeof str1 , str1); // 1
}
f1();