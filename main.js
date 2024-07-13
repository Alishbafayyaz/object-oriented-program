"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const student_js_1 = require("./student.js");
const name = await inquirer_1.default.prompt([
    {
        name: "answer",
        type: "input",
        message: "What is your name?"
    }
]);
const ask = await inquirer_1.default.prompt([
    {
        name: "choice",
        type: "number",
        message: "Type '1' if you like to talk to yourself or Type '2' if you like to talk to other person. ",
        validate: function (value) {
            // Check if the input can be parsed as an integer
            if (Number.isInteger(Number(value))) {
                return true;
            }
            else {
                return "Please enter a valid integer.";
            }
        },
    },
]);
const myStudent = new student_js_1.Student();
myStudent.askQuestion(ask.choice);
myStudent.Name = name.answer;
console.log(`Your name is ${myStudent.Name} and you are ${myStudent.getPersonality()}`);
