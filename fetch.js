//reduce()
fetch("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xddyM5Z5llwe5nz0xAnhvAHaD_%26pid%3DApi&f=1&ipt=a35b61640b8dc9b60353ec3c191de8c2a77694439ddb75e1ac827ceb09ff09ab&ipo=images")
.then(function(response){
return response.blob()
})
.then(function(response){
  console.log(response)})