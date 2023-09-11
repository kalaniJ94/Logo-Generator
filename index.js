const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require("./lib/function")

//inquirer goes here
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
        message: "Please enter three characters to use in the logo.",
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color for the letters in your logo (or a hexadecimal code)"
    },
]

//starts app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            compileSVG(data.shape, data);
            if(data.letters.length != 3){
                throw new Error("Please enter three letters for the logo.");
            };
        })

};
// Uses an if/else statement to check shape first, runs SVGgenerator based on that choice. 
function compileSVG(shape, data) {
    console.log(data);
    if (shape === "Circle") {
        const circle = new Circle(data.color, data.textColor, data.letters)
        let SVGString = circle.render() + circle.insertCircleSVG() + circle.insertText()
        const filename = 'logo.html'
        fs.readFile(filename, 'utf8', (err, template) => {
            if (err) {
                console.log(err);
                return;
            }

            // Replace the placeholder with the SVG content
            const htmlWithSVG = template.replace('PLACEHOLDER_FOR_SVG_CONTENT', SVGString);

            const outputFile = 'compiled_logo.html';
            fs.writeFile(outputFile, htmlWithSVG, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`Check out your compiled logo in ${outputFile}`);
            });
        });
    }



    
    else if (shape === "Triangle") {
        const triangle = new Triangle(data.color, data.textColor, data.letters)

        let SVGString = triangle.render() + triangle.insertTriangleSVG() + triangle.insertText();
        const filename = 'logo.html'
        fs.readFile(filename, 'utf8', (err, template) => {
            if (err) {
                console.log(err);
                return;
            }

            const htmlWithSVG = template.replace('PLACEHOLDER_FOR_SVG_CONTENT', SVGString);

            const outputFile = 'compiled_logo.html';
            fs.writeFile(outputFile, htmlWithSVG, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`Check out your compiled logo in ${outputFile}`);
            });
        });

    }
    else if (shape === "Rectangle"){
        const rectangle = new Square(data.color, data.textColor, data.letters)
        let SVGString = rectangle.render() + rectangle.insertSquareSVG() + rectangle.insertText();
        const filename = 'logo.html'
        fs.readFile(filename, 'utf8', (err, template) => {
            if (err) {
                console.log(err);
                return;
            }

            const htmlWithSVG = template.replace('PLACEHOLDER_FOR_SVG_CONTENT', SVGString);

            const outputFile = 'compiled_logo.html';
            fs.writeFile(outputFile, htmlWithSVG, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`Check out your compiled logo in ${outputFile}`);
            });
        });
    }
}

init();3
