alert("your script works");
let name = prompt("enter your name");

let write  = confirm("is your name correct?");
if(write){
    document.write("my name is "+ name);
}
else{
    document.write("you clicked cancel");
}
console.log(window);

var a = document.body.firstChild
console.log(a)
console.log(a.parentNode)
console.log(a.parentElement)

var c =document.body.firstChild.nextSibling
console.log(c)

var b= document.body.lastChild
console.log(b)

let arr = Array.from(document.body.childNodes)
console.log(arr)