// Array :
//     Store multiple values in single variable.
//     Array can be accessed using Index.
//         Index is sequantial number that is assigned by Array.
//         Index always start with 0.
//     We can access array value by using index.
//     Array declared in '[]' brackets.
//     value store as a comma seperated into the array.


//     Syntax :
//         Initialization and declaration
//         const variable_name = ["value1","value2","value3",...,"valueN"];

//         Declare blank array
//         const variable_name = [];

//         Array object
//         const variable_name = new Array("value1","value2","value3",...,"valueN");


const cars = ['BMW', 'TATA', 'Volvo', 'KIA'];

console.log(cars);

// Declare and add value later.
const bikes = [];
bikes[0] = "Honda";
bikes[1] = "TVS";
bikes[2] = "Harley"
bikes[3] = "Royal Enfield";

console.log(bikes);


// length :
let carCount = cars.length;
console.log(carCount);

// Value access using index
console.log(bikes[2]);


// Update value on index
bikes[1] = "Pulsar";

console.log("Bike values = " + bikes); // Concat array value with static string.

