const alphabet = ['2','drf','er','d','e']
const numbers = ['1','2','3']

//basics
const [a,,c] =alphabet
const newArray = [...alphabet, ...numbers]
console.log(a,c)
console.log(newArray)


//array destructuring
function sumAndMultiply(a,b){
    return [a+b, a*b, a/b]
}

const [sum,add,multiply] = sumAndMultiply(3,5)
console.log(sum,add,multiply)

//object destructuring
const personOne = {
    name:'Vedika',
    age:32,
    address:{
        city:'Atlanta',
        state:'GA'
    }
}

const personTwo = {
    name:'Vedika',
    age:32,
    address:{
        city:'Atlanta',
        state:'GA'
    }
}

const {name:FirstName,age} = personTwo
console.log(FirstName,age)

function printUser({name,age,address}){
    console.log(`Name is: ${name}`)
}
printUser(personOne)