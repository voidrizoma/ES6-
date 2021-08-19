// Operador de reposo Spread operador... return a new object

const obj = {
    name: 'KAren',
    age: 32
}

let {
  name,
  ...all
} = obj
console.log(name, all)

const obj2 = {
  name: 'Karen'
}
// propagation properties
const obj3 = {
  ... obj2,
  country: 'MX'
}
console.log(obj3)

// Promise.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => {
      resolve('Hello World!');
    }, 3000) : reject(new Error('Test Error'));
  });
};

helloWorld().then(result => console.log('result -> ', result)).catch(err => console.log('err -> ', err)). finally(() => console.log('finalizó'));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);