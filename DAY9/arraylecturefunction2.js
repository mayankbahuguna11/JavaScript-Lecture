let name = ["Mayank", "Yogesh", "Sohan", "Suraj", "Balaji"];
for(let i = 0; i < 2; i++){
    console.log(name[i]);
}

console.log("\n");

for(let i = 1; i < 4; i++){
    console.log(name[i]);
}

console.log("\n");

for(i = name.length - 1; i >= 0; i--){
    console.log(name[i]);
}

console.log("\n");

// forEach: executes a function for each element.
name.forEach(function(value){
    console.log(value);
});

console.log("\n");

// map: creates a new array by modifying every element.
let result = name.map(function(value){
    return value.toUpperCase();
});
console.log(result);

console.log("\n");

// filter: creates a new array containing elements that satisfy a condition
let resu = name.filter((value) => {
    return value.length > 5;
});
console.log(resu);

console.log("\n");

let nums = [10, 15, 20, 25];
let data = nums.filter((value) => {
    return value >= 20;
});
console.log(data);

console.log("\n");

// find: returns the first element that satisfies the condition.
let nums2 = [10, 20, 30, 40];
console.log(nums2.find(x => x > 20));