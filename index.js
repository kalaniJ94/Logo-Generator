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


// function createShape(letterColor, color, shape, letters){
// [ {
//     name: ('circle'),{
     
//      <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="90" cy="50" r="50" fill="${color}"></circle>
//         <text  x="75" y="50" font-size="16" fill="white">KDJ</svg>
// </svg>

//     }
// }]
    
// }

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => 
    err ? console.log(err) : console.log('Check out your logo!'))
};



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
