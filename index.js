const inquirer = require('inquirer');
const fs = require('fs');

// const { choices } = require('yargs');
// const { generateSVG } = require();
const questions = [
    {
        type: "input",
        name: "letters",
        message: "Please enter up to three characters to use in the logo.",
    },
    {
        type: "list",
        name: "shape",
        message: "What shape should your logo be?",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "color",
        message: "Please enter a color for your shape in your logo (or a hexadecimal code)"
    },
    { 
        type: "input",
        name: "letterColor",
        message: "Please enter a color for the letters in your logo (or a hexadecimal code)"
    },
]


function createShape(letterColor, color, shape, letters){
    
    
}





function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            const data = logo(response)

            console.log(data)
            writeToFile('logo.svg', data, (err) => 
            err? console.log(err) : console.log('Generated logo.svg'))
        })
};

init();
