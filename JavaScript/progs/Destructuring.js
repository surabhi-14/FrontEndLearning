console.log(
  "Destructuring is exactly the same. We may have an array or object that we are working with,",
  " but we only need some of the items contained in these.",
  "Destructuring makes it easy to extract only what is needed."
);

//destructuring Arrays

//example 1
const vehicles = ["mustang", "f-150", "expedition"];
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
console.log(car, truck, suv); //mustang f-150 expedition
//with destructuring
const vehicles1 = ["mustang", "f-150", "expedition"];
const [car1, truck1, suv1] = vehicles1;
console.log(car1, truck1, suv1); //mustang f-150 expedition

//example 2
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

myVehicle(vehicleOne);
// old way
function myVehicle(vehicle) {
  const message =
    "My " +
    vehicle.type +
    " is a " +
    vehicle.color +
    " " +
    vehicle.brand +
    " " +
    vehicle.model +
    ".";
  console.log(message); //My car is a red Ford Mustang.
}
//with destructuring
myVehicle1(vehicleOne);
function myVehicle1({ type, color, brand, model }) {
  const message =
    "My " + type + " is a " + color + " " + brand + " " + model + ".";
  console.log(message);
  //My car is a red Ford Mustang.
}

//destructuring Objects
const profile = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  website: "codesweetly.com",
};

//const { firstName: firstName, lastName: lastName, website: website } = profile;

const { firstName, lastName, website } = profile;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"
