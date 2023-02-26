let name =25
console.log(name.length);

//First method- long
let person = new Object();
person.name = 'Vedika'
person.eyeColor ='green'
person.age=27
person.updateAge = function(){
    return ++person.age
}

//Second method- shorthand
let Person ={
    name:'Vedika',
    surname:'Mujgule',
    Age:25,
}

