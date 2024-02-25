// Declaratiion of Variables

// Storing the value into the varibale by using id selector
const countValue = document.getElementById('counter');

// Decleration of Functions()

// const Increment = () => {

//     // Get the value from UI and convert it into the integer
//     //ParseInt converts the string value into the Integer
//     let value = parseInt(countValue.innerText);

//     //    Update the value
//     value = value + 1;

//     // Set the value into the UI
//     countValue.innerText = value;

// }

// const Decrement = () => {

//     // Get the value from UI and convert it into the integer
//     let value = parseInt(countValue.innerText);

//     //    Update the value
//     value = value - 1;

//     //    Set the value into the UI
//     countValue.innerText = value;

// }



// By using EventListners

function Increment(){
        // Get the value from UI and convert it into the integer
    // ParseInt converts the string value into the Integer
    let value = parseInt(countValue.innerText);

    //    Update the value
    value = value + 1;

    // Set the value into the UI
    countValue.innerText = value;
}
function Decrement(){
        // Get the value from UI and convert it into the integer
    // ParseInt converts the string value into the Integer
    let value = parseInt(countValue.innerText);

    //    Update the value
    value = value - 1;

    // Set the value into the UI
    countValue.innerText = value;
}

document.addEventListener('click',Increment)
document.addEventListener('click',Decrement);




