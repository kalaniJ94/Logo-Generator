class SVGGenerator {
    constructor() { }
    
    generateShape(shape, color, textColor, letters) {
        switch (shape) {
            // if (shape == "Rectangle") {
            //     let shape === "rect"
            // }
            // else if (shape == "Triangle"){
            //     let shape === "polygon"
            // }
            // else {
            //     shape = "circle"
            // };
            case 'Circle':
                console.log("generateShape returned: " + `${shape}, ${color}, ${textColor}, ${letters}`);
                return this.generateCircleSVG(shape, color, textColor, letters);
                
            case 'Rectangle':
            // let shape = "rect ";
                return this.generateRectangleSVG(shape, color, textColor, letters);
            case 'Triangle':
                let shape = "polygon"
                return this.generateTriangleSVG(shape, color, textColor, letters);
            default:
                throw new Error('Invalid shape.');
                
        }
    }

    generateCircleSVG( shape, color, textColor, letters) {
        console.log("circle", color , textColor, letters)
        return `
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <${shape} cx="90" cy="50" r="50" fill="${color}"></circle>
        <text  x="75" y="50" font-size="16" fill="${textColor}">${letters}</text>
    </svg>
        `
    }
    generateRectangleSVG( shape, color, textColor, letters) {
        console.log("Rectangle", color, textColor, letters)
        return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <${shape}height="100" width="200" x="100" y="60" fill="${color}"/>
        <text x="150" y="105" font-size="16" fill= "${textColor}">${letters}</text>
        </svg>
        `
    }
    generateTriangleSVG( shape, color, textColor, letters){
        console.log("triangle" + shape, color, textColor, letters)
        return `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <${shape} points="50,1 1,95 99,95" fill="${color}" /> 
        <text x="35" y="80" font-size="16" fill="${textColor}">${letters}</text>
    </svg> 
        `
    }
};

function generateSVG(shape, color, textColor, letters){
    const svgGenerator = new SVGGenerator();
    return svgGenerator.generateShape(shape, color, textColor, letters);
}

module.exports = {
    SVGGenerator,
    generateSVG,
}