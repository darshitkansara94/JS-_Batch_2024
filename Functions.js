// Functions :
//     Function is group / block og code.
//     Which perform on some JS events.
//     Main purpose of fumnction is reusability of code.

//     Two types of functions :
//         1. Default functioncn :
//             Function which is not contain any type of parameter / argument.
//             Syntax :
//                 function function_Name()
//                 {
//                     Block of code
//                 }
//         2. Parameterized function :
//                 Function which accept parameter / argument.
//                 To perform specific operation / To pass value from once function to another function.
//                 We can pass n no of params.

//                 Syntax :
//                     function function_Name(param1, param2, param3...paramN)
//                     {
//                         Block of code.
//                     }

// alert("Before function");

// Default function
function FirstFunction() {
    alert("Function executed");
}

// Parametereized function
function SecondFunction(Value1, Value2) {
    document.getElementById("lblValue").innerText = Number(Value1) + Number(Value2);
}



function ThirdFunction(Value1, Value2) {
    return Number(Value1) + Number(Value2);
}

// let Addition = ThirdFunction(20, 30);

// document.getElementById("lblValue").innerText = Addition;

function Addition() {
    let txtValue1 = document.getElementById("txtValue1");
    let txtvalue2 = document.getElementById("txtValue2");

    let sum = ThirdFunction(txtValue1.value, txtvalue2.value);
    // document.getElementById("lblValue").innerText = sum;
    document.getElementById("btnResult").innerText = sum;
}

// Assignment : in common function
//     Multiplication
//     Substration
//     Division