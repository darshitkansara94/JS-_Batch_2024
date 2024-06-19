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

// Display array single value in label
document.getElementById('lblArrayVal').innerText = bikes[2];

// push
// pop
// concat
// join
// at

const arrayPushandPop = [];
// Push :
// Push is insertion of value into the Array.
// It perform LIFO(Last in First Out) algorithm.

// Syntax :
//     Array.push(value);

// Example :
arrayPushandPop.push('Pizza', 'Burger');

console.log(arrayPushandPop);

// Pop :
// Remove last inserted value from array.
// No argument is required.

// Syntax :
//     Array.pop();

// Example :
arrayPushandPop.pop();

console.log(arrayPushandPop);

const dynamicArray = [];

function EnterValueInArray() {
    let arrayValue = document.getElementById("txtArrayValue").value;

    dynamicArray.push(arrayValue);

    document.getElementById('lblValue').innerText = arrayValue;

    console.log(dynamicArray);
}

function RemoveValueFromArray() {
    dynamicArray.pop();

    console.log(dynamicArray);
}

// Join :
// Convert array into String format and add seperator between each value.
// Comma seperated value can be anything.

// Syntax :
//     array.join('seperator');

// Example :
const fruitArray = ['Orange', 'Mango', 'Kiwi', 'Apple'];

console.log(fruitArray.join(' / '));

console.log(typeof (fruitArray.join('/')));

// Concat :
// To merge two array into single array.

// Syntax :
//     array1.concat(array2);

// Example :
const vegetableArray = ['Tomato', 'Potato', 'Chilli', 'garlic'];

console.log(fruitArray.concat(vegetableArray));

console.log(fruitArray);

// at :
// Retrieve value from particular index.

//Syntax :
// array.at(index)

// array.at[index]

//Example :
console.log(vegetableArray.at(1));

// sort
// reverse
// delete


