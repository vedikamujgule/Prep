 const cart =["shoes","pant","kurta"]

 createOrder(cart)
 .then(function(orderID){
    proceedToPayment(orderID);
 })
 .catch(function(err){
    console.log("Cart is invalid", err)
 });//return orderid

 promise.then(confirm =>proceedToPayment(orderID))

//create promise

function createOrder(cart){
    const prom = new Promise(function(resolve, reject){
         //createOrder API
         //validateCart
         //reurn order id
         if(!validateCart(cart)){
             const err = new Error("Cart is not valid")
             reject(err)
         }
         //if sucess
         const orderID =011 // we get an order ifd from Dbatabase
         if(orderID){
            resolve(orderID)
         }
    })
    return prom;
}

function proceedToPayment(orderID){ 
    return new Promise(function(resolve,reject){
        resolve("Payment Successful")
    })
}


function validateCart(){
    return true;
}

function proceedToPayment(orderID){ 
    return orderID;
}