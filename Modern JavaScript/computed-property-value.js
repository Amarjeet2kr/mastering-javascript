
let LAST_NAME = "lastname";
let fullname = {
    firstname: "Steve",
    // Defining computer property
    [LAST_NAME]: "Jobs"
};
console.log(
    "Full Name: " + fullname.firstname + " " + fullname.lastname
);