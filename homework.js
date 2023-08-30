

//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything from the Taco Bell menu",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// I'm not sure if this was the way you wanted, it seems inefficient compared to looping but
// looping it was really challenging, and you just said parses

function favFoods(person) {
    console.log(`My favorite pizzas are ${person.pizza[0]} and ${person.pizza[1]}`);
    console.log(`My favorite tacos are ${person.tacos}`);
    console.log(`My favorite burgers are from ${person.burgers}`);
    console.log(`My favorite ice cream flavors are ${person.ice_cream[0]}, ${person.ice_cream[1]} and ${person.ice_cream[2]}`);
    console.log(`My favorite shake from oberwise is ${person.shakes[0].oberwise} `);
    console.log(`My favorite shake from dunkin is ${person.shakes[0].dunkin}`);
    console.log(`My favorite shake from culvers is ${person.shakes[0].culvers}`);
    console.log(`My favorite shake from mcdonald's is the ${person.shakes[0].mcDonalds}`);
    console.log(`My favorite shake from cupids candies is ${person.shakes[0].cupids_candies}`);

}

favFoods(person3)


//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => `${this.name} is ${this.age} years old.`

    incrementAge = () => {
        this.age += 1;
        return this.age;
    }
}

const dylanK = new Person('DizzlyK', 142);
console.log(dylanK.printInfo());

dylanK.incrementAge();
dylanK.incrementAge();
dylanK.incrementAge();

console.log(dylanK.printInfo());

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('There was an error accessing the API (then catch method)', error);
})

//using async/await

const driverData = async () => {
    try {
        const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json');
        const data = await response.json();
        console.log(data);
    }
    catch {
        console.log('There was an error accessing the API');
    }
}

driverData();

//Begin CodeWars

/* Problem 1
Convert a Number to a String!
https://www.codewars.com/kata/5265326f5fda8eb1160004c8

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?
Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"

*/

function numberToString(num) {
    let str = num.toString();
    console.log(str);
}

numberToString(999);
numberToString(123);

/* Okay now I admit that was too easy. Now for a 7 kyu
Vowel Count
https://www.codewars.com/kata/54ff3102c1bad923760001f3

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {    //.includes() checks 'if i in str' in python
            count++;
        }
    }
    return count;
}

console.log(getCount('abracadabra'));

/*That was a bit more difficult, but let's do a hard one...
Simple Pig Latin
https://www.codewars.com/kata/520b9d2ad5c005041100000f

Move the first letter of each word to the end of it,
then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
    str = str.split(' '); //alter the string and split the string into words and/or symbols
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {      //regex if index is letter, True or False if matches i to a letter
            str[i] = str[i].slice(1) + str[i][0] + 'ay';    //takes substring of word starting at index 1 and goes to end of word ie: 'ello'
        }   //then adds the first letter ie 'H' plus 'ay'
    }
    return str.join(' '); //joins them back just like python
}

console.log(pigIt('Hello world !'))

