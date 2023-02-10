
// var : scope is inside the function 
function getDate() {
    var date = new Date();

    function formatDate() {
        return date.toDateString().slice(4);
    }
    return formatDate();
}

console.log(getDate());



function discountedPrices(prices, discount) {
    var discounted = []
    for(var i = 0; i<prices.length; i++){
        var discountedPrices = prices[i] * (1 - discount);
        var finalPrice = Math.round(discountedPrices * 100) / 100;
        discounted.push(finalPrice);
    }
    console.log(i); // as here i is type of var so is it still in scope
    console.log(discountedPrices);
    console.log(finalPrice);
}

discountedPrices([100, 200, 300], 0.5);




// let : block scope 
function discountedPrices(prices, discount) {
    let discounted = []
    for(let i = 0; i<prices.length; i++){
        let discountedPrices = prices[i] * (1 - discount);
        let finalPrice = Math.round(discountedPrices * 100) / 100;
        discounted.push(finalPrice);
    }
    // console.log(i); // as here i is type of let so its scope is valid onlly in block
    // console.log(discountedPrices);
    // console.log(finalPrice);
}



// const : can't be re-assigned

// const val = 59; 
// val = 50; // it will give error - assigment to constant variable

