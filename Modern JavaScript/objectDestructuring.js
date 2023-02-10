// destructuring: allow exract the multiple properties from object
// allow to unpack values from arrays, objects, 

// object destructuring
function getUser(){
    return {
        name : 'Tyler McGinnis',
        handle: "@tylermcginnis",
        location: 'Eden, Utah'
    };
}

// var name = user.name;
// var handle = user.handle;
// var location = user.location

console.log(name);
console.log(handle);
console.log(location);

var {name, handle, location} = getUser();


// array destructuring
var user = ["user1", "handle1", "location1"];
var name = user[0];
var handle = user[1];
var location = user[2];

// Object destructuring
var csv = "1997, Ford, F350, Must sell!";
var [year, make, model, desciption] = csv.split(',');

console.log(year);
console.log(make);
console.log(model);
console.log(desciption);