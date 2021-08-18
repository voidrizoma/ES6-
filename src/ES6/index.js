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

