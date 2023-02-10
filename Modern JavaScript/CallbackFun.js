var numbers = [1, 2, 3, 4, 5];

function mainFun(callback) {
    console.log("Performing operation...");

    numbers.forEach(callback);
}

// define callback function
function callbackFunction(numbers) {
    console.log("Result: " + numbers);
}

mainFun(callbackFunction);