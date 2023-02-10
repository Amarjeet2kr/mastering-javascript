// callback function

function add(x, y) {
    return x + y;
}

function addFive (x, addRef){
    return addRef(5, x)
}

const me = add;

const res = addFive(10, me)

console.log(res);

