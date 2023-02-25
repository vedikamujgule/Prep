const cart=['shoes','pants','kurta']

// //both the following apis are dependent and hence asynchrnous
// //async with call back
// //issue:  
// createOrder(cart);//return order id
// proceedToPayment(orderId,function(){
//     proceedToPayment(orderId)
// }); //proceed payment

// //promise is an empty object with data value in it
// // {data:underfined}
// //after promise gets data
// // {data:orderDetails}
// const promise = createOrder(order);
// promise.then(function(){
//     proceedToPayment(orderId)
// })

const GIT_API = "https://api.github.com/users/vedikamujgule"
const data = fetch(GIT_API)
console.log(data)


// promise chain

createOrder(cart)
.then(orderId =>procedToCart(orderId))
.then(orderSummary => showOrderSummary(orderId))
