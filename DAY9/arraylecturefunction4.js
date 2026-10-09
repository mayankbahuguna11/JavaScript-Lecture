// concat: add multiple array elements into one array.
let namedata = ["Rohan", "Vivek", "Ajay"];

let othername = ["Rahul", "Amit"];

let result = namedata.concat(othername);

console.log(result);

console.log("\n");

// every: checks whether all elements satisfy a condition or not.
let res = namedata.every((value)=>{
    return value.length >= 4;
});
console.log(res);

console.log("\n");

let res2 = namedata.every((value)=>{
    return value.length >= 5;
});
console.log(res2);

console.log("\n");

// some: checks whether at least one element satisfies a condition

let resu = namedata.some((value)=>{
    return value === "Vivek";
});
console.log(resu);

console.log("\n");

let resu2 = namedata.some((value)=>{
    return value === "Kapil";
});
console.log(resu2);