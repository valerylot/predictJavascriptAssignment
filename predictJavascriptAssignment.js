// PROBLEM 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //output is Tesla
console.log(otherRandomCar) //output is Mercedes

//that's the output because the const made, if we wanted to get the other output, we would do const [ , , thirdCar ] = cars then console.log(thirdCar)


// PROBLEM 2
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName); //output is Elon
console.log(employeeName); //output is a reference error because we put it into otherName and not empployeeName as a variable

//to fix the error, we would define employeeName


// PROBLEM 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //outpout is '12345'
console.log(hashedPassword); //output is undefined because there isn't a key value of hashedPassword in the object

//to fix the output issue, add the key hashedPassword into the object

// PROBLEM 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
const [,,,,fourth] = numbers;
//Predict the output
console.log(first === second); //output is false
console.log(first === third); //output is true
console.log(fourth)



// PROBLEM 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //will print out 'value'
console.log(secondKey); //will print out the array
console.log(secondKey[0]); //will print out 1
console.log(willThisWork); //will print out 5


//PROBLEM 6
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

//output for line 66 is: Paul was found at index 0. George was found at index 1. John was found at index 2. Ringo was found at index 3.
//output for line 68 is: name and index after loop is Ringo : 4

//PROBLEM 7
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }     

//output for 81 is: nothing is output because the function was never invoked

//PROBLEM 8
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

//output for line 94 is: Paul was found at index 0. George was found at index 1. John was found at index 2. Ringo was found at index 3.

//PROBLEM 9
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) //true because it's comparing that both values at the 0 index are the same
console.log(planet === planetCopy) //false because they are shallow copies and not deep copies of one another


