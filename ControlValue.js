// How to Get Control value :
//     document.getElementById();
//     document.getElementsByName();
//     document.getElementsByClassName();
//     document.getElementsByTagName();

//     Using above functions we can get value / access / Modify property of the HTML controls.

let txtName = document.getElementById("txtName");

document.getElementById("printTxtName").value = txtName.value;

document.getElementById("printTxtName").style.display = "block"; // To hide or display control 

function changeClasName() {
    //document.getElementById("printTxtName").className = "back-color-chnage";

    document.getElementById("printTxtName").classList = "back-color-chnage abc";
}
// value
// innerHTML
// innerText

//alert(document.getElementById("dvMain").innerHTML);
//alert(document.getElementById("dvMain").innerText);

function Addition() {
    let value1 = document.getElementById("txtVal1"); //get value of Textbox 1
    let value2 = document.getElementById("txtVal2"); //get value of Textbox 2

    let Answer = Number(value1.value) + Number(value2.value); // Addition of two values

    document.getElementById("lblAns").innerText = Answer; // Assign value to label control
}

// Assignment
    // Check all attribute of the control using document.getElementById()