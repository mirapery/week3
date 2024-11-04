
const person = { name: 'Alice', age: 30, city: 'New York' };
const { name, age } = person;

console.log('Name:', name);
console.log('Age:', age);


const person1 = { name1: 'Alice', info1: { age1: 30, occupation1: 'Engineer' } };
const { name1, info1: { age1, occupation1 } } = person1;

console.log('Name:', name1);
console.log('Age:', age1);
console.log('Occupation:', occupation1);


function greetUser({ name, age }) {
    console.log(`Hello, ${name}! You're ${age} years old.`);
  }
  
  greetUser({ name: 'Bob', age: 25 });