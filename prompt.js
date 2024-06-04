// prompt :
//     Prompt is a dialog provided by JS.
//     It is open like alert dialog.
//     Prompt accept value from the user.
//     Prompt has two buttons -> Ok and Cancel
//     Ok button return true value with the value entered by user.
//     Cancel button returns false by default.

//     Syntax :
//         prompt("message","Default_Value");

let promptValue = prompt("Enter Name : ", "");
alert(promptValue);

if (promptValue == null) {
    alert('Clicked on Cancel button');
}
else if (promptValue == "") {
    alert("User has not enter any value");
}
else {
    alert("Clicked on OK button");
}

