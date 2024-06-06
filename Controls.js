// value
//     value is used with the control whose value user can modify at runtime.
//     innerHTML
//         innerHTML returns a whole HTML code of child element instead of value / text.
//     innerText
//         innerText is used when we want to get value from controls which are readonly / the controls has value as a child element.


var divHTML = document.getElementById('dvMain');

// alert(divHTML.innerHTML);

let spnValue = document.getElementById('spnChild');

// alert(spnValue.innerText);

document.getElementById('spnPrintValue').innerText = spnValue.innerText;

// Calculation :
// 1. Two textbox and one label
// 2. User enter value in textbox and output should be print in label

function Calculation() {
    let value1 = document.getElementById("txtValue1");
    let value2 = document.getElementById('txtValue2');

    if (value1.value == "") {
        alert("Please enter value in Text 1");
    }
    else if (value2.value == "") {
        alert("Please enter value in Text 2");
    }
    else {
        document.getElementById('lblAns').innerText = Number(value1.value) + Number(value2.value);
    }
}


