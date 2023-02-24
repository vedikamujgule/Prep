const itemsObject = [
    {name:'Bike' ,price:100},
    {name:'Bikde' ,price:34},
    {name:'dike' ,price:333},
    {name:'cike' ,price:930},
    {name:'pike' ,price:50}
]
const array =[1,6,7,4,3,7,9]
// toString
arrayToString = array.toString()
console.log("arrayToString", arrayToString)

//join
arrayJoined = array.join("+")
console.log("arrayJoined", arrayJoined)

//conact
arrayConcat = array.concat(['s','g','6'])
console.log("arrayConcat", arrayConcat)

// splice
arraySplice = arrayConcat.splice(7,3)
console.log("arraySplice", arraySplice)

//slice
arraySlice = array.slice(1,2)
console.log("arraySlice", arraySlice)

//index Of
getIndex =array.indexOf(7)
console.log("getIndex", getIndex)

//last index of 
getIndex =array.indexOf(7)
console.log("getIndex", getIndex)
