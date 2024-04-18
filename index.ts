#! /usr/bin/env node

// import the inquirer module which is command line interface for node.js
import inquirer from "inquirer"

//declare constant 'answers' and assign it to the result of inquirer.prompt function

const answers : {
    Sentence : string
}  = await inquirer.prompt([
    {
        name : "Sentence",
        type: "Input",
        message : "Enter your sentence to cont the word :"
    }
]);

 const words = answers.Sentence.trim().split(" ")
// print the array of words t the console

console.log(words)
// print the word count of the sentence to the console

console.log(`your  sentence word count is ${words.length}`);