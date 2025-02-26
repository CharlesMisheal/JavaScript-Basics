//Backend Assignment

// 1.Declare a variable for your name, age, and favourite programing languange, then print them.
let name = "Alex Gardener";
let age = 309;
let favouriteLanguage = "JavaScript";
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Favorite Language: " + favouriteLanguage);

// 2. Write a program that checks if a person is eligible to vote (18+)
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    }
    else {
        console.log("you are not eligible to vote.");
    }
}

// 3. Create a loop that prints all even numbers from 1 to 20
for (let i = 1; i <=20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Write a function that takes a name as input and prints "hello, [name]!"
function printHello(name) {
    console.log("Hello, " + name + "!");
}
printHello("Bill Gates");

// 5. Create an object with the properties name, age, and country, then print each property.
let person = {
    name: "Mark Angel",
    age: 28,
    country: "Nigeria"
};
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Country; " + person.country);