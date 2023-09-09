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
        type: 'list',
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
     
        writeToFile(data);
    })
    
function writeToFile(data) {
let shape;

switch(data.shape.toLowerCase()) {
    case 'circle':
        shape = new Circle(data.text, data.color, data.textColor)
        break;
    case 'triangle':
        shape = new Triangle(data.text, data.color, data.textColor);
        break;
    case 'square':
        shape = new Square(data.text, data.color, data.textColor);
        break;
    default:
        console.log("Error: Invalid shape choice.");
        return;
}
    const newSVGLogo = shape.render();

    fs.writeFile(`${data.shape.toLowerCase()}.svg`, newSVGLogo, (err) => {
        if(err) {
    console.log(`File ${data.shape.toLowerCase()}.svg has been created with the logo.`)
}
});
}




