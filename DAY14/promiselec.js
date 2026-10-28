// A promise is an object that represents the future success or failure of an asynchronous operation and its resulting value.
// Used in API calls, login and registration, payment processing, order placement and file uploading. 
let promise = new Promise(function(resolve, reject){
    console.log("Your Order");

    // resolve("Order Placed Successfully");
    reject("Order Rejected")
});

promise
// then method is used to execute a function when promise is successfully fulfiled.
    .then(function(result){
        console.log(result);
    })
// catch method is used to execute a function when promise is rejected or an error occurs.
    .catch(function(error){
        console.log(error);       
    });