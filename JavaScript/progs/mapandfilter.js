let myArray1 = [1, 2, 3, 4]; 
  
const array1 = myArray1.map((element) => { 
    return element * 2; 
}).reverse(); 
console.log(array1) // return array of same size

let myArray2 = [1, 2, 3, 4]; 
  
const array2 = myArray2.filter((element) => { 
    return element > 2; 
}).reverse(); 
console.log(array2) // return array of different size