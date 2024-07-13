"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const person_js_1 = require("./person.js");
// To inherit the properties of Person in the Student class.
class Student extends person_js_1.Person {
    constructor() {
        super(); // Calls the constructor of the Person class.
        this.name = ''; //  initializing the name property to an empty string.
    }
    // Use get accessor to read data from the class
    get Name() {
        return this.name;
    }
    // use set accessor to update the value of name.
    set Name(_name) {
        this.name = _name;
    }
}
exports.Student = Student;
