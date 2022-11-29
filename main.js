/*    // let, const

let score = 10;



console.log(score); //

// Strings, Numbers, Boolean, null, undefined


const name = 'john';
const age = 30;


// concarenation 

console.log('my name is ' + name + ' and I am ' + age);

// template string 
console.log(`My name is ${name} and I am ${age}`); 

const s = 'technology, computers, it, code';

console.log(s.split(','));

//arrays - variable that hold multiple values

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
fruits[3]= 'grapes'

fruits.push('mangoes');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray('hello'));

console.log(fruits.indexOf('oranges'));
console.log(fruits);
console.log(fruits[1]); 

*/

const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    adress: {
        street: '50 main st',
        city: 'boston',
        state: 'MA'
    }
}
/*
console.log(person.firstName,person.lastName);

console.log(person.hobbies[2]);

console.log(person.adress.city);

const { firstName,lastName,adress:{ city }} = person;

console.log(city);

person.email = 'john@gamil.com' ;

console.log(person);


const todos = [
    {
        id: 1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text:'Meeing with boss',
        isCompleted: true
    },
    {
        id: 3,
        text:'dentist appt',
        isCompleted: false
    },
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/
/*
// For  


for(let i =0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}


for(let i =0; i < todos.length; i++) {
    console.log(todos [i].text);
}

for(let todo of todos) 
{
    console.log(todo.id);
}


// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});   


const todoText = todos.map(function(todo)
{
    return todo.text;
});

console.log(todoText);


const todoCompleted = todos.filter(function(todo)
{
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);


 const x = 13;

 if (x === 10)  {
console.log('x is 10');
    
 } else if(x > 10) {
    console.log('x is greater than 10');
 } else {
    console.log('x is less then 10')
 }

 const x = 6;
 const y = 12;

if(x > 5 && y > 10){
    console.log('x is more than 5 or y is more than 10');
}


const x = 9;

const color = 'green';

switch(color) {
    case 'red':
        console.log('color id red');
        break;
        case 'blue':
            console.log('color id blue');
            break;
    default:
        console.log('color is NOT red or blue');
}




function addNums (num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}

addNums(5,4); 


const addNums = (num1 = 1 , num2 = 1)=> {
return num1 = num2;
}

console.log(addNums(5, 5));

// constructor function 
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
   }
   
   Person.prototype.getBirthYear = function() {
    return this.dob.getFullName();
   }
    Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
    }

// Class
class Person {
    constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
getBirthYear() {
    return this.dob.getFullName();
}

getFullName(){
    return `${this.firstName} ${this.lastName}`;
}
}


// instantiate object 
const person1 = new Person('john', 'doe', '4-3-1980');
const person2 = new Person('mary', 'smith', '3-6-1970');

console.log(person2.getFullName())
console.log(person1);

*/


// Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));


// Multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('my-form'));
//console.log(document.getElementsByTagName('li'));

/*

const ul = document.querySelector('.items')

// ul.remove();
//ul . lastElementChild.remove()
ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
//btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
        .lastElementChild.innerHTML = '<h1>Hello'

});

*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

  

    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

setTimeout(( ) => msg.remove(), 3000);
   } else {
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(`$
    {nameInput.value}) : ${emailInput.value}`));
    userList.appendChild (li);

// Clear fields
  nameInput.value = '';
  emailInput.value = '';


   }
}






















