const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./shapes/circle');
const triangle = require('./shapes/triangle');
const square = require('./shapes/square');
const constructor = require('./shapes/constructor');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters.',
        validate: (text) => {
            if(text === "") {
                return 'Please enter a valid number of characters to create LOGO.'
            }
            return true
        }

    },
    {
        type: 'choice',
        name: 'color',
        message: 'Choose a shape for the LOGO:',
        choices: ['Triangle', 'Circle', 'Square'],
        validate: (choices) => {
            if(choices === "") {
                return 'Shape is required to create LOGO.'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color or hexadecimal number (#number).',
        validate: (input) => {
            if(input === "") {
                return 'Invalid input, Enter a text color or hexadecimal number starting with a number symbol.'
            }
            return true
        }
    }



]