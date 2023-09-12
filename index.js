const inquirer = require('inquirer');
const fs = require('fs');
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
    },
    {
        type: 'input',
        name: 'fontSize',
        message: 'Enter a font size. If no font size entered, a default font size of 60 will be set.',
        initial: '60'
    }
]).then((data) => {
    const fontSize = data.fontSize || 60;
    console.log(`Selected font size: ${fontSize}`);

let shape;

switch(data.shape.toLowerCase()) {
    case 'circle':
        shape = new Circle(data.color, data.text, data.textColor, data.fontSize)
        break;
    case 'triangle':
        shape = new Triangle(data.color, data.text, data.textColor, data.fontSize);
        break;
    case 'square':
        shape = new Square(data.color, data.text, data.textColor, data.fontSize);
        break;
    default:
        console.log("Error: Invalid shape choice.");
        return;
}
    const svgLogo = shape.render();

    fs.writeFile(`${data.shape.toLowerCase()}.svg`, svgLogo, (err) => {
        if(err) {
            console.error(`Error: ${err}`);
        } else {
    console.log(`File ${data.shape.toLowerCase()}.svg has been created with the logo.`)
}
});
});




