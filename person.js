"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor() {
        this.personality = 'Mystery'; // constructor method initalize the property to the default value 
    }
    // This method allows a person to answer a question about their personality
    askQuestion(option) {
        if (option == 1) {
            this.personality = "an Introvert";
        }
        else if (option == 2) {
            this.personality = "a Extrovert";
        }
        else {
            this.personality = 'a Mystery';
        }
    }
    // This method returns the current value of the personality property.
    getPersonality() {
        return this.personality;
    }
}
exports.Person = Person;
