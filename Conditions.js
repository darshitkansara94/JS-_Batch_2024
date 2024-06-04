// Operators : 
//     == (comparision) :
//         Compare two values.
//     === (comparision) :
//         Compare value with datatype.
//     >
//     >=
//     <
//     <=
//     != :
//         Both value can not be same.

// Conditions :
//     Condition is check either value passed by user is correct or not.
//     Condition return in boolean(true / false).
//     When we need to compare two values we can use conditions.

//     && (And) :
//         Both the condition must be true then only IF condition is executed.
//         From condition1 and Condition2, If one condition is false then else part will be executed.
//     || (OR) :
//         From condition1 and condition2, If any single condition is true then If part is executed.


//     Types of condition :
//         If else :
//             To compare single condition.
//             It can be nested.Condition.
//             In a single condition, multiple sub condition can be checked.

//             Syntax :
//                 If(condition)
//                 {
//                     code
//                 }
//                 else
//                 {
//                     code
//                 }

//                 Nested If else
//                     If(condition)
//                     {
//                         If(condition)
//                         {

//                         }
//                         else
//                         {

//                         }
//                     }
//                     else
//                     {

//                     }
//                 Multiple conditions :
//                     If(condition1 && condition2 || condition3)
//                     {

//                     }
//                     else
//                     {

//                     }
//         If else if else :
//             Multiple conditions can be applied.

//             Syntax :
//                     If(condition)
//                     {}
//                     else if(condition){}
//                     else if(condition){}
//                     else{}

//                 Nested condition :
//                 If(condition)
//                 {}
//                 else if(condition){
//                     if(condition){}
//                     else{}
//                 }
//                 else if(condition){}
//                 else{}
//         Switch case :
//             To verify condition.

//             Syntax :
//                 switch(condition)
//                 {
//                     case 1:
//                         code
//                         break;
//                     case 2:
//                         code
//                         break;
//                     case n:
//                         code
//                         break;
//                     default:
//                         code
//                         break;
//                 }

//Example:
// If Else:
let student_Name = "Amit";
let last_Name = "abc";
let marks = 50;

console.log(student_Name);

if (student_Name == "Amit") {
    console.log("Condition true");
}
else {
    console.log("Condition false");
}

if (marks > 52) { // marks = 50
    alert("If executed");
}
else {
    alert('else executed');
}

if (marks < 50) { // marks = 50
    alert("If executed");
}
else {
    alert('else executed');
}

// Multiple Condition
if (student_Name == "Amit" && last_Name == "abc") {
    console.log("Condition true");
}
else {
    console.log("Condition false");
}

if (student_Name == "Amit" || last_Name == "abc") {
    console.log("Condition true");
}
else {
    console.log("Condition false");
}

// Compare with datatype
if (marks === "50") {
    console.log("Marks are matched");
}
else {
    console.log("Marks are not matched");
}

if (marks == "50") {
    console.log("Marks are matched");
}
else {
    console.log("Marks are not matched");
}

// If else if else
if (student_Name == "Amit") {
    console.log("Student name is Amit");
}
else if (last_Name == "abc") {
    console.log("last name is ABC");
}
else {
    console.log("Student not exist");
}


// Switch Case :
switch (student_Name) {
    case "Dignesh":
        console.log("Dignesh Matched");
        break;
    case "Amit":
        console.log("Amit Matched");
        break;
    case "Jigar":
        console.log("Jigar Matched");
        break;
    default:
        console.log("No value Matched");
        break;
}

alert("After switch case");

// Above 80 = 'A Grade'
// Greater than or = 70 and less than or equal to 80 = 'B Grade'
// Greater than or = 60 and less than or equal to 70 = 'C Grade'
// Greater than or = 50 and less than or equal to 60 = 'D Grade'
// Greater than or = 35 and less than or equal to 50 = 'E Grade'
// Below 35 = 'F Grade'

let student_Marks = 30;

switch (true) {
    case student_Marks > 80:
        console.log("A Grade");
        break;
    case student_Marks >= 70 && student_Marks <= 80:
        console.log("B Grade");
        break;
    case student_Marks >= 60 && student_Marks <= 70:
        console.log("C Grade");
        break;
    case student_Marks >= 50 && student_Marks <= 60:
        console.log("D Grade");
        break;
    case student_Marks >= 35 && student_Marks <= 50:
        console.log("E Grade");
        break;
    case student_Marks < 35:
        console.log("F Grade");
        break;
    default:
        console.log("Invalid input");
        break;
}