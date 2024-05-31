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
let student_Name = "Amit1";
let last_Name = "abc";
let marks = 50;

console.log(student_Name);

if (student_Name == "Amit") {
    console.log("Condition true");
}
else {
    console.log("Condition false");
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
