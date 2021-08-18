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
