let name = ["Mayank", "Yogesh", "Sohan", "Suraj", "Balaji"];

// findIndex: returns the index of the first matching element.
let result = name.findIndex((value) =>{
   return value === "Mayank";
});
console.log(result);

console.log("\n");

// join: converts array elements into a string.

let joindata = name.join(" ");
console.log(joindata);

console.log("\n");

// sort: sorts elements in an array.
let nums = [43, 67, 21, 10, 87]

// ascending number
nums.sort(function(a, b){
    return a - b;
});
console.log(nums);

console.log("\n");

// descending number
nums.sort(function(a, b){
    return b - a;
});
console.log(nums);

console.log("\n");

// slice: copies a portion of an array without changing the original array.
console.log(name);

let resu = name.slice(1, 3);

console.log(resu);
