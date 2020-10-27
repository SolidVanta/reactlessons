// let defines a variable which is really just a variable
// const is a const which never changes its value

function printMyName(name) {
    console.log(name);
  }
  
  printMyName('Max');
  
  const printMyNamearr = (name) => {
    console.log(name);
  }
  
  printMyNamearr("Peter");
  
  
  const multiply = (number) => {
    console.log(number * 2);
  }
  
  multiply(3);
  
  const shortmultiply = number => console.log(number * 2);
  
  shortmultiply(4);
  //For the arrow function you can omit the parenthesis if only one arg is used
  //In the case the function has no parameter list then you have to have empty parenthesis.

  //File1: person.js

  const person = {
      name:'Max'
  }

  export default person

  //File2: utility.js

  export const clean = () => {..}
  export const baseData = 10;

  //File2: app.js
  import person from './person.js'
  import prs from './person.js'
  // The above two lines import the same default const person because we defined it as default
  // and it is the only export available in the file. It doesn't matter what we name it. Both refer to the saame object

  import {baseData} from './utility.js'
  import {clean} from './utility.js'
// we import individual objects by their name because we didn't name anything as the default.



//Classes
/*
* Has variabels and methods
*consrtuctor functions
* intheritance
*/

class Human {
  constructor() {
    this.gender = 'male'; //ES6

    gender = 'male'; // ES7
  }

  printMyGender(){
    console.log(this.gender);
  }

  printGender = () => {
    console.log(this.gender);
  }
}


class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
    name = 'Maxx';
  
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printMyGender();


//Spread & Rest Operators

//Spread is used to split up array elements OR object properties
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProp:5}
// Rest is used to merge a list of function arguments into an array

function sortArgs(...args) {
  return args.sort()
}

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers)


const person = {
  name: 'Max'
  };

const newPerson = {
  ...person,
  age: 28
  }

console.log(newPerson);


const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));


//Destructuring
// Easily extrat array elements or object properties and store them in variables
// Similar to spread except it takes all elements/properties. Destructuring allows to pull out single elements/properties and store them in variables.


[a,b] = ['Helo', 'Max']
console.log(a)
console.log(b)

const numbers = [1,2,3];
[num1,num2] = numbers;
console.log(num1,num2);

[num1, ,num3] = numbers;
console.log(num1,num3);


//References and Copy
//Objects and Arrays are referenced while priitive types such as int are copied.
//Deep Copy
const number = 1;
const num2 = number;

console.log(num2)

//Reference
const person = {
  name: 'Max'
};

const secondPerson = person;

person.name = 'Manu';

console.log(secondPerson);

//Real copy where we copy the properties in order to have a separate copy
//Reference
const person = {
  name: 'Max'
};

const secondPerson = {
  ...person
};

person.name = 'Manu';

console.log(secondPerson);
