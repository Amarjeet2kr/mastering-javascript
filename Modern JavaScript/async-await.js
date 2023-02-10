// async : it ensures to return a promise 
// await : works only inside async function

async function myAsync() {
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve("done!", 1000));
    });

    let result = await promise;
    
    console.log(result);
}

myAsync();