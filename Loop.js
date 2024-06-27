// Types of Loop:
//     For loop
// For in
//     for of
//     while loop
//     do while loop
//     foreach


// For loop:
//     For loop execute code only when condition is true.

//     Syntax :
// for (variable; condition; incremental_variable) {
//     Code
// }

// variable:
//             Value initailize.
//             From which value or when loop is started.

//     Example :
// let variable = 0;
// condition:
//             Validate the condition is true or not.
//             Based on condition loop will execute code.

//     incremental_variable :
//             Increase value after every iteration.

//     Example :
// for (let variable = 0; variable < 10; variable++) {
//     console.log("variable Value is = " + variable);
// }

// Loop with array
// const fruits = ['Apple', 'Kiwi', 'Orange', 'Mango', 'Banana'];

// console.log(fruits); // return array

// console.log(fruits.length); // return length / size of array

// Print every element from array 

// for (let fruitsInit = 0; fruitsInit < fruits.length; fruitsInit++) {
//     console.log("Fruit name = " + fruits[fruitsInit]);
// }


// Perform Push and POP operation using loop
// const vehicle = [];

// function PushValueToArray() {
//     let txtValue = document.getElementById('txtValue').value;

//     vehicle.push(txtValue);

//     PrintArray("Push");
// }

// function PopValueFromArray() {
//     vehicle.pop();

//     if (vehicle.length > 0) {
//         PrintArray("Pop");
//     }
//     else {
//         console.log("No value found in Array");
//     }
// }

// function PrintArray(operation)
// {
//     for (let i = 0; i < vehicle.length; i++) {
//         console.log(operation + " value : " + vehicle[i]);
//     }
// }

// for in 
// for in use to iterate on array and object.

// Syntax :
// for(let variable in array/object)
//     {
//         // code iteration
//     }

// Example :
const arrayVehicle = ['Honda', 'Activa', 'Access', 'Scooter'];

for (let vehicle in arrayVehicle) {

    console.log(arrayVehicle[vehicle]);
}

const objectStudent = { Name: 'WelTec', Address: 'vadodara', Age: '29' };
console.log(objectStudent);

console.log("Print Object");
for (let obj in objectStudent) {
    console.log(obj + " = " + objectStudent[obj]);
}
// for of
// Iterate only on array and string value.

// Synatx :
//     for(variable of array/string){
//         code
//     }

Example:
for (let arr of arrayVehicle) {
    console.log(arr);
}

// Not valid in of loop
// for(let obj1 of objectStudent)
//     {
//         console.log(obj1);
//     }

let str = 'WelTec Institute';

for (let str1 of str) {
    console.log(str1);
}

// While :
// While loop is same as for loop.
// incremental variable is define inside the loop.
// Condition check at the loop.It will return either true or false.

//Synatx :
// while(condition)
//     {
//         code

//         incremental operator
//     }

// Example :

// Create label
// Create HTML element
// Create Text
// append text into control.
// Property you want to assign like CSS, id, title
// append control to body/ html page / any other control.

function CreateLabel(arrayText, i) {
    var lbl = document.createElement('label');

    var text = document.createTextNode(arrayText);

    lbl.id = arrayText + "_" + i;

    lbl.appendChild(text);

    document.body.appendChild(lbl);
}
function CreateArray() {
    let i = 0;
    console.log("While Loop");
    while (i < arrayVehicle.length) {
        // console.log(arrayVehicle[i]);
        CreateLabel(arrayVehicle[i], i);
        i++;
    }
}

// do while loop :
// When user want to execute first iteration every time.

// Syntax :
//     do
//     {

//     }
//     while(condition)

// Example :
function UsingDoWhileLoop() {
    let i = 0;

    do {
       CreateLabel(arrayVehicle[i], i);

       i++;
    }
    while (i > arrayVehicle.length)
}