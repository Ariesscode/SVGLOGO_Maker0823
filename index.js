const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./shapes/circle');
const triangle = require('./shapes/triangle');
const square = require('./shapes/square');
const constructor = require('./shapes/constructor');
const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');

inquirer
.prompt([
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
        name: 'shape',
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
        name: 'color',
        message: 'Enter a shape color or hexadecimal number.',
        validate: (input) => {
            if(input === "") {
                return 'No color has been provided. Enter a color for the LOGO shape.'
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



]).then((data) => {
        console.log("creating Logo....");
        writeToFile();
    })
    
function writeToFile(data) {
    const userShape = data.shape;
    

    if(userShape === circle) {
        fs.writeFile(`${userShape}.svg`, Circle);
    } else if (userShape === triangle) {
        fs.writeFile(`${userShape}.svg`, Triangle);
    } else if(userShape === square) {
        fs.writeFile(`${userShape}.svg`, Square);
    } else {
        console.log("Error found. Make sure all questions are answered correctly.");
    }
}



