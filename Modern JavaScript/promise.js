// the promise object takes two argument i.e callback to resolve and reject 

let myPromise = new Promise(function(resolve, reject){
    let x = 0;

    if (x == 0) {
        resolve("OK");
    } else {
        reject("Error");
    }
});

myPromise.then(
    function(value){
        console.log(value);
    },
    function(error){
        console.log(error);
    }

)





// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         resolve("success!");
//     }, 250);
// });

// myPromise.then((successMessage) => {
//     console.log("Yah! " + successMessage);
// });