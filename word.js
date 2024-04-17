#! usr/bin/env node
// import the 'inquirer' module
import inquirer from "inquirer";
//Declaring a variable
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Please enter your sentence to count the word: "
    }
]);
let words = answers.sentence.trim().split(" ");
//Print array of words to the console
console.log(words);
//Print the word count of the sentence to the console
console.log(`Dear User, Your sentence word count is ${words.length}`);
