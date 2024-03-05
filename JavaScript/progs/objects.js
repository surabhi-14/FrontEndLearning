// 4 ways to create an object

// 1. Creating js objects with object literal 
let car = { 
    name : 'GT', 
    maker : 'BMW', 
    engine : '1998cc'
}; 
// Property accessor 
console.log(car.name); //dot notation 
console.log(car['maker']); //bracket notation

//  2. using new keyword
//simple function 
function vehicle(name,maker,engine){ 
    this.name = name; 
    this.maker = maker; 
    this.engine = engine; 
} 
// New keyword to create an object 
let car1  = new vehicle('GT','BMW','1998cc'); 
// Property accessors 
console.log(car1.name); 
console.log(car1.maker); 
console.log(car1['engine']);


// 3. using oobject.create ()
const coder = { 
    isStudying : false, 
    printIntroduction : function(){ 
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`); 
    } 
}; 
const me = Object.create(coder); 
me.name = 'Mukul'; 
me.isStudying = true; 
me.printIntroduction()

// 4. // Using es6 classes 
class Vehicle { 
    constructor(name, maker, engine) { 
      this.name = name; 
      this.maker =  maker; 
      this.engine = engine; 
    } 
  } 
    
  let car2 = new Vehicle('GT', 'BMW', '1998cc'); 
    
  console.log(car2.name);  //GT