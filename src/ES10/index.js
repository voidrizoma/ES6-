//array flat return a matriz
let array = [1, 2, 3, [1, 2, 3,[1,2,3]]]
console.log(array.flat(2))

//flatmap... map each item then pass ina function

let array1 = [1, 2, 3]
console.log(array1.flatMap(value => [value, value * 2]))

//trimStart... use for delete initial spaces into a string

let hello = "           hola olla"
console.log(hello.trimStart())

//Optiona cach binding--- we can pass the error value into a catch scope without pass the value as an argument
try {
    
} catch {
    
}

//from entries... transform arrat to object
let entries = [["name", "karen"], ["age", 32]];
console.log(Object.fromEntries(entries))

//symbol... allow us get a description
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);