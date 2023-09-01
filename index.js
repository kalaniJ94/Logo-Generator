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
        type: "input",
        name: "color",
        message: "Please enter a color for your logo (or a hexadecimal code)"
    },
    {
        type: "list",
        name: "shape",
        message: "What shape should your logo be?",
        choices: ["Circle", "Square", "Triangle"]
    },
]
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
        })
};

init();
