const Shape = require("./Shape.js")
class Circle extends Shape {
    constructor (color, textColor, letters){
        super (color, textColor, letters)
        // More here
    }
    insertCircleSVG(){
        return `        <circle cx="90" cy="50" r="50" fill="${this.color}"></circle>
        `
    }
    insertText(){
        return `
        <text  x="75" y="50" font-size="16" fill="${this.textColor}">${this.letters}</text>
    </svg>
        `
    }
}
class Triangle extends Shape {
    constructor (color, textColor, letters){
        super (color, textColor, letters)
        // More here
    }
    insertTriangleSVG(){
       return `
       <polygon points="50,1 1,95 99,95" fill="${this.color}" /> 
        `
    }
    insertText(){
        return `
        <text x="35" y="80" font-size="16" fill="${this.textColor}">${this.letters}</text>

    
        `
    }
}
class Square extends Shape {
    constructor (color, textColor, letters){
        super (color, textColor, letters)
        // More here
    }
    insertSquareSVG(){
        return `
        <rect height="100" width="200" x="100" y="60" fill="${this.color}"/>
        `
    }
    insertText(){
        return `
        <text x="150" y="105" font-size="16" fill= "${this.textColor}">${this.letters}</text>
        </svg>
    `
    }
}

module.exports = {
    Circle, Triangle, Square
}