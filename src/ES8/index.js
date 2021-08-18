//object entries .. returns a values from matrix
const data = {
  frontend: 'Karen',
  backend: 'Alma',
  designer: 'Diana'
}

const entries = Object.entries(data)
console.log(entries)

//Object values returns the values from an object to an array
const values = Object.values(data)
console.log(values)

//padding
const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(2,'hi'))

//Async await
const helloWord = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("hola olla"), 3000) 
      : reject( new Error('test error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWord()
  console.log(hello)
}

helloAsync()

const anotherAsync = async () => {
  try {
    const hello = await helloWord()
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}

anotherAsync()
