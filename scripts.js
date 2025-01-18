//OBJECTS: Collection of related properties({key:value} pairs) or methods(functions)
let person = {
    name: 'Munir',
    age: 25,
    country: 'Nigeria',
    isStudent: true,
    sayHi: function(){console.log('Hi everyone!')},
    eat: () => console.log('I am eating')
}; 
person.sayHi();
person.eat();
console.log(person.isStudent);

//ARRAYS: more than one value in a variable
let fruits = ['mango', 'banana', 'apple', 'orange'];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.length);

//ARRAY METHODS
//sort()-Sorts the elements of an array in place and returns the array.
//reverse()-Reverses the elements of an array in place.
//push()-Adds one or more elements to the end of an array and returns the new length of the array.
//pop()-Removes the last element from an array and returns that element.
//shift()-Removes the first element from an array and returns that element.
//unshift()-Adds one or more elements to the beginning of an array and returns the new length of the array.
//splice()-Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//slice()-Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
//concat()-Returns a new array comprised of this array joined with other array(s) and/or value(s).
//join()-Joins all elements of an array into a string.
//indexOf()-Returns the first (least) index of an element within the array equal to an element, or -1 if none is found.
//lastIndexOf()-Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found.
//includes()-Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//find()-Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
//map()-Creates a new array with the results of calling a provided function on every element in the calling array.
//filter()-Creates a new array with all elements that pass the test implemented by the provided function.
//reduce()-Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
//forEach()-Executes a provided function once for each array element.
//some()-Tests whether at least one element in the array passes the test implemented by the provided function.
//every()-Tests whether all elements in the array pass the test implemented by the provided function.


//FUNCTIONS
function greenSchool(){
    console.log("i am happy")
}
greenSchool();

function addNumbers(x, y){
    console.log(x + y);
}
addNumbers(3, 8);

function add(x,y){
    return x + y;
}
console.log(add(5, 7));

function isValidEmail(email){
    if(email.includes('@')){
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidEmail('munirmuhd120@gmail.com'));

//ARROW FUNCTION: simple way to write function expressions
//FORMULA = (parameters) => some code
setTimeout(function(){
    console.log('Hello');
}, 1000);

setTimeout(() => {console.log('Hello')}, 1000);

const hello = (name, age) => {console.log('Hello ' + name);
                              console.log('you are ' + age + 'years old');}
hello("Munir", 20);

const hello1 = function(name, age){
    console.log('Hello ' + name);
    console.log('you are ' + age + 'years old');
}
hello1("Mohammed", 20);

//MAP METHOD
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(number){
    return number * number;
});
console.log(squaredNumbers);

let numbers1 = [1, 2, 3, 4, 5];
let squaredNumbers1 = numbers1.map((number) => (number * number));
console.log(squaredNumbers1);

//DESTRUCTURING: extracting values from arrays and objects and assigning them in a convenient way
//[]-for extracting values from arrays,{}-for extracting values from objects
//EXAMPLE 1. To swap the value of two variables
let a = 7;
let b = 2;
[a,b] = [b,a];
console.log(a);
console.log(b);

//EXAMPLE 2. To swap elements in an array
const colors = ["Yellow", "Green", "Blue", "Red"];
[colors[0],colors[3]] = [colors[3], colors[0]];
console.log(colors);

//EXAMPLE 3. ASSIGN ARRAY ELEMENTS TO VARIABLE
const color1 = ["Violet", "Purple", "Brown"];
const[firstColor, secondColor, thirdColor] = color1;
console.log(firstColor);
console.log(secondColor);

//EXAMPLE 4. Extract values from elements
const person1 = {
    firstName: "Munir",
    lastName: "Mohammed",
    age: 19,
    job: "Chef",
}
const person2 = {
    firstName: "Munir",
    lastName: "Mohammed",
    age: 19,
}
const {firstName, lastName, age, job="Unemployed"} = person2
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//EXAMPLE 5. Destructuring in function parameters
function displayPerson({firstName, lastName, age, job="Footballer"}){
    console.log("name: " , firstName, lastName),
    console.log("age: ", age),
    console.log("job: ", job)
}
const person3 = {
    firstName: "Munir",
    lastName: "Mohammed",
    age: 19,
    job: "Chef",
}
const person4 = {
    firstName: "Munir",
    lastName: "Mohammed",
    age: 19,
}
displayPerson(person3);

//TEMPLATE LITERALS
//Template literals in JavaScript are an enhanced way to create strings, offering more powerful features than regular string literals. They are enclosed by backticks (``) and provide:
//1.Multi-line Strings: No need for escape characters, making code cleaner.
//2.String Interpolation: Embed expressions using ${expression} syntax for dynamic content.
//3.Tagged Templates: Custom functions can process template literals for advanced string manipulation.

//TERNARY OPERATORS
//A ternary operator is a convenient way to handle conditional statements. It's essentially a compact version of the if-else statement, allowing you to evaluate a condition and return one of two values based on whether the condition is true or false.
// Syntax = condition ? expressionIfTrue : expressionIfFalse
//Example:

let age1 = 18
let canDrive = age1 >=18 ? 'Yes' : 'No';
console.log(canDrive);
