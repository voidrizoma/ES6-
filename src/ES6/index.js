// Default params
// before ES6
function newName(name, age, country) {
    var name = name || "karen"
    var age = age || "32"
    var country = country || "CDMX"
    console.log(name, age, country)
  
  }
  
  // ES6
function newName2(name = "Karen", age = "32", country = "CDMX") {
  console.log(name, age, country)
}

//Concat

let hello = 'hello'
let phrase = 'phrase'

let newPhrase = `${hello} ${phrase}`
console.log(newPhrase)

// string multilineal

let lorem = `Hello! I want to be a multilineal string
blah blah
blah blah
......
many letters...`

console.log(lorem)

//Destructuring
let person = {
  'name': 'Karen',
  'age': 32,
  'country': 'MX'
}

//Before ES6
console.log(person.name, person.age, person.country)

//ES6
let { name, age, country } = person
console.log(name, age, country)

//spread operator
let team1 = ['karen', 'lorem', 'ipsum']
let team2 = ['demo', 'test', 'chale']
let joinTeams = ['Tito', ...team1, ...team2]

console.log(joinTeams)

//create objects
let name = 'Karen'
let age = 32

//before ES6
obj = {name: name, age: age}

//ES6
obj2 = {name, age}
console.log(obj2)

//arrow functions: better syntaxt and a .this not linked
const names = [
  {name: 'Karen', age: 32},
  {name: 'Simon', age: 9},
  {name: 'Tito', age:5}
]

let listNames = names.map((item => console.log(item.name)))

const listNames = (name, age, country) => {
//  ...
}

const listNames2 = name => {
  //...
}

//Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve('Hey')
    } else {
      reject ('ups!!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))

//classes.. more clear syntaxt to handle objects and inherency
class calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }
  sum(valueA, valueB){
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

const calc = new calculator()
console.log(calc.sum(3,4))

//modules
import {hello} from './module'
hello()

//generators
function* helloWorld(){
  if(true) {
    yield 'Hello';
  }if (true) {
    yield 'World'
  }
}

const generator = helloWorld()
console.log(generator.next().value)
console.log(generator.next().value)