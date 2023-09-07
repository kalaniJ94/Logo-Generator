const inquirer = require('inquirer');
const fs = require('fs');

const { SVGGenerator, generateSVG  } = require('./lib/shapes.js');


const questions = [
    {
        type: "list",
        name: "shape",
        message: "What shape should your logo be?",
        choices: ["Circle", "Rectangle", "Triangle"]
    },
    {
        type: "input",
        name: "color",
        message: "Please enter a color for your shape in your logo (or a hexadecimal code)"
    },
    {
        type: "input",
        name: "letters",
        message: "Please enter up to three characters to use in the logo.",
    },
    { 
        type: "input",
        name: "textColor",
        message: "Please enter a color for the letters in your logo (or a hexadecimal code)"
    },
]


function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
        let logoData = generateSVG(data.shape, data.color, data.letters, data.textColor);
        const filename = 'logo.svg'
        
        fs.writeFile(filename, logoData, (err) => 
        err ? console.log(err) : console.log('Check out your logo!'))
      
        })
};

init();
