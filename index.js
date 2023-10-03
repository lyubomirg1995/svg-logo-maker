

const { Shape, Triangle, Circle, Square } = require('./lib/shapes.js')
const inquirer = require('inquirer');
const fs = require('fs');
//inquirer prompts for shape color, shape type, text color, and character amount
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter at most 3 characters for the logo',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Select shape color',
        
    },
]

inquirer.prompt(questions).then((answers) => {
    const {text, textColor, shape, shapeColor} = answers;
    const shapeObj = new Shape();
    let svgElement = '';

    shapeObj.setColor(shapeColor)
//renders shape characteristics depending on the selected option
    switch(shape) {
        case 'Triangle':
            const triangle = new Triangle()
            triangle.setColor(shapeColor)
            svgElement = triangle.render()
            break;

        case 'Circle':
            const circle = new Circle()
            circle.setColor(shapeColor);
            svgElement = circle.render()
            break;
        case 'Square':
            const square = new Square()
            square.setColor(shapeColor)
            svgElement = square.render();
            break;
}
    let x = 150, y = 120;
    if(shape === 'Triangle') {
        y = 135;
    } else if (shape === 'Square') {
        y = 145;
    }
//dynamically generated svg code logic for view in live server
    const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                     ${svgElement}
                     <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-anchor="middle">${text}</text>
                     </svg>`

fs.writeFileSync('logo.svg',finalSvg)

console.log('Generated logo.svg')
})

