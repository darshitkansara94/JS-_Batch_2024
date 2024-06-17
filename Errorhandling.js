// Error handling :
//     TO handle errors occured by user / configuration.
//     When Error occur default page should not display.
//     TO handle we have try, catch, finally, throw.

//     try :
//         your actual logic is written in this block.
//     catch :
//         Error handling by this block.
//     finally :
//         Either your code execute succesfully or not this block is execute in both cases.
//     throw :
//         When user want to display custom message on exception.

//     Syntax :
//         try
//         {
//             actual logic
//         }
//         catch(variable)
//         {
//             error display
//         }
//         finally
//         {
//             execute at the end if error occur or not.
//         }
function Addition() {
    console.log("Addition function executed");
}

function Errorhandlingfun() {
    try {
        let funName = Addition();
    }
    catch (msg) {
        document.getElementById("lblError").innerText = msg;
    }
    finally {
        alert("Finally block executed");
    }
}

function ErrorhandlingfunWithouttrycatch() {
    let funName = Addition();
}

function CheckNumber() {
    try {
        let txtValue = Number(document.getElementById('txtValue').value);

        if (!isNaN(txtValue)) {
            throw "Entered value is number";
        }
        else {
            throw "Entered value is not number";
        }
    }
    catch (msg) {
        document.getElementById("lblError").innerText = msg;
    }
}