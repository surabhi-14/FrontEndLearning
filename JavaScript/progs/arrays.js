const cars = ["Saab", "Volvo", "BMW"];

//create and h=then give valuse
const cars1 = [];
cars1[0]= "Saab";
cars1[1]= "Volvo";
cars1[2]= "BMW";

cars1.forEach(element => {
    console.log(element)
});

//using new keyword
const cars2 = new Array("Saab", "Volvo", "BMW");

for(let i =0;i<cars2.length;i++)
{
    console.log(cars2[i]);
}

