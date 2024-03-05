//passing function as an argument
function greet(name){ 
    return `Hi!! ${name} `; 
} 
  
function greet_name(greeting,message,name){ 
       console.log(`${greeting(name)} ${message}`); 
} 
  
greet_name(greet,'Welcome To GeeksForGeeks','JavaScript');
//function returning another function
const greet1 =  function(name){ 
    return function(m){ 
    
        console.log(`Hi!! ${name}, ${m}`); 
    } 
} 
  
const greet_message1 = greet1('ABC'); 
greet_message1("Welcome To GeeksForGeeks")